import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ReactElement } from 'react';
import { Separator } from '../ui/separator';
import { useAppSelector } from '@/app/hooks';
import CartPopoverItemCard from './CartPopoverItemCard';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

type CartPopoverProps = {
  children: ReactElement;
};

const CartPopover: React.FC<CartPopoverProps> = ({ children }) => {
  const cartItem = useAppSelector((state) => state.cart);

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className='w-full'>
        <div className='pb-4'>
          <p className='text-2xl font-bold'>MY CART</p>
        </div>
        <Separator />
        <div className='pb-5 pt-7'>
          {cartItem.items.length ? (
            cartItem.items.map((item, index) => (
              <CartPopoverItemCard item={item} key={index} />
            ))
          ) : (
            <p className='text-center font-medium'>
              You have no items in your shopping cart
            </p>
          )}
        </div>
        <div>
          <div className='flex justify-between pb-4'>
            <div>
              <p className='text-xs font-medium tracking-wider'>SUBTOTAL</p>
              <p className='text-2xl font-bold -mt-1'>
                MYR{cartItem.totalPrice}.00
              </p>
            </div>
            <div className='flex flex-col items-end'>
              <p className='text-xs font-medium tracking-wider'>TOTAL QTY</p>
              <p className='text-2xl font-bold -mt-1'>
                {cartItem.totalQuantity}
              </p>
            </div>
          </div>
          <div className='flex justify-between pb-5'>
            <Button variant='outline'>
              <Link to='/cart'>VIEW MY CART</Link>
            </Button>
            <Button>
              <Link to='/checkout'>CHECKOUT</Link>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;
