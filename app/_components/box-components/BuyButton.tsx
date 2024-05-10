
import { toast } from 'react-hot-toast';
import { useRecoilValue } from 'recoil';
import { Button } from "../../../src/components/ui/button";
import { cn } from '../../../src/lib/utils';
import { checkout } from "../../actions/checkout";
import { boxStateFinal } from '../../state/boxStateFinal';


export type BuyButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export const BuyButton = (props: BuyButtonProps) => {

  const box = useRecoilValue(boxStateFinal);

  const getVariantIds = () => {
    if (!box?.suggestions) return []; // Retourne un tableau vide si aucune suggestion n'est disponible

    return box.suggestions.map(suggestion => {
      return suggestion.products.find(p => !p.isVariant)?.product.variantId ?? "";
    });
  }

  const checkoutUrlRedirection = async () => {

    const url = await checkout(getVariantIds());
    if (window) {
      if (url === 'Missing product variant ID' || url === 'Error creating checkout') {
        toast.error(url as string);
        return;
      }
      window.location.href = url as string;
    }
  }

  return (
    <Button variant="default" className={cn('rounded-full h-14 px-14', props.className)} onClick={checkoutUrlRedirection}  >
      {props.children}
    </Button>
  )
};