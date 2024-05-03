import Image from 'next/image';
import { Section } from '../../src/features/layout/Section';

export const Header2 = () => {
  return (
    <Section>
      <div className="relative  flex h-9 justify-center bg-muted dark:bg-muted-foreground">
        <div className="absolute  right-1/2 translate-x-1/2 transform  rounded  font-medium text-white">
          <Image
            alt="Logo"
            width={50}
            height={50}

            src="/logo-round.png"
            className="h-9 w-auto"
          />
        </div>
      </div>
    </Section>
  )
}; 
