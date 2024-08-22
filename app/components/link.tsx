import NextLink from 'next/link';
import { cn } from '../utils/cn';

export default function Link({ className, ...props }: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      className={cn(
        'border-b-[3px] border-transparent bg-[linear-gradient(indigo,indigo),linear-gradient(transparent,transparent)] bg-[size:0%_3px,100%_3px] bg-[position:0_bottom,0_bottom] bg-no-repeat pb-[3px] leading-snug text-[indigo] transition-[background-size] duration-300 hover:bg-[size:100%_3px]',
        className,
      )}
      {...props}
    />
  );
}
