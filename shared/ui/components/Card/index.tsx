import { cn } from '@_utils/tailwind';
import { cva, VariantProps } from 'class-variance-authority';

const CardVariants = cva(
  `
  w-3xl rounded-3xl shadow-lg flex items-center justify-center bg-white p-4 text-5xl
  `,
  {
    variants: {
      variant: {
        default: '',
        grey: 'bg-gray-150 Card-gray-950',
        red: 'bg-red-600',
      },
      size: {
        default: 'px-2 py-1',
        md: 'px-4 py-2',
        lg: 'px-6 py-3',
        xl: 'px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface CardProps extends VariantProps<typeof CardVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Card({ variant, size, className, children }: CardProps) {
  return (
    <>
      <div className={cn(CardVariants({ variant, size, className }))}>
        {children && children}
      </div>
    </>
  );
}