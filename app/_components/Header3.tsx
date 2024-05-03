import { ChevronDown } from 'lucide-react';
import { Section } from '../../src/features/layout/Section';


export const Header3 = () => {
  return (
    <Section>
      <div className="relative  flex h-8 justify-center bg-muted dark:bg-muted-foreground">
        <div className="absolute -bottom-4 right-1/2 translate-x-1/2 transform  rounded  font-medium text-white">
          <ChevronDown className="text-primary h-8 w-8 rounded-full bg-muted" />
        </div>
      </div>
    </Section>
  )
}; 
