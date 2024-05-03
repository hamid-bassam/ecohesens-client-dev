import Image from 'next/image';
import { Section } from '../../src/features/layout/Section';

export const Header2 = () => {
  return (
    <Section>
      <div className="relative  flex h-16 justify-center bg-muted dark:bg-muted-foreground">
        <div className="absolute -bottom-6 right-1/2 translate-x-1/2 transform  rounded  font-medium text-white">
          <Image
            alt="Logo"
            width={100}
            height={100}
            src="/logo-round.png"
            className="h-16 w-auto"
          />
        </div>
      </div>
    </Section>
  )
}; 
