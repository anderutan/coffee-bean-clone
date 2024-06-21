import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ReactElement } from 'react';
import { Separator } from './ui/separator';

type CartPopoverProps = {
  children: ReactElement;
};

const CartPopover: React.FC<CartPopoverProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className='w-[100%]'>
        <div className='pb-4'>
          <p className='text-2xl font-bold'>MY CART</p>
        </div>
        <Separator />
        <div className='pb-5 pt-7'>
          <p className='text-center font-medium'>
            You have no items in your shopping cart
          </p>
          {/* CartCard for added cart item */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;
