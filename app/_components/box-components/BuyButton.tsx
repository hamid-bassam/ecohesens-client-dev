
import { toast } from 'react-hot-toast';
import { useRecoilValue } from 'recoil';
import { Button } from "../../../src/components/ui/button";
import { checkout } from "../../actions/checkout";
import { boxStateFinal } from '../../state/boxStateFinal';


export type BuyButtonProps = {

};

export const BuyButton = (props: BuyButtonProps) => {

  const box = useRecoilValue(boxStateFinal);

  const getMainProducts = () => {
    if (!box?.suggestions) return []; // Retourne un tableau vide si aucune suggestion n'est disponible

    return box.suggestions.map(suggestion => {
      return suggestion.products.find(p => !p.isVariant);
    });
  }

  const getVariantIds = () => {
    if (!box?.suggestions) return []; // Retourne un tableau vide si aucune suggestion n'est disponible

    return box.suggestions.map(suggestion => {
      return suggestion.products.find(p => !p.isVariant)?.product.variantId ?? "";
    });
  }

  const checkoutUrlRedirection = async () => {
    //  const url = await checkout(props.products.map(p => p?.id ?? ""));
    // mock avec 3 produits pour tester
    // le test fonctionne 
    const url = await checkout(getVariantIds());
    // const url = await checkout(["gid://shopify/ProductVariant/47789432930640", "gid://shopify/ProductVariant/47818942415184", "gid://shopify/ProductVariant/47789372670288"]);
    if (window) {
      if (url === 'Missing product variant ID' || url === 'Error creating checkout') {
        toast.error(url as string);
        return;
      }
      // console.log("errorUrl", JSON.stringify(url));
      window.location.href = url as string;
    }
  }

  return (
    <Button variant="default" onClick={checkoutUrlRedirection}  >
      Buy
    </Button>
  )
};