import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ReactElement } from 'react';
import { Separator } from '../ui/separator';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import CartPopoverItemCard from './CartPopoverItemCard';
import { Link } from 'react-router-dom';

type CartPopoverProps = {
  children: ReactElement;
};

const CartPopover: React.FC<CartPopoverProps> = ({ children }) => {
  const cartItem = useAppSelector((state) => state.cart);

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className='w-[100%]'>
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
            <div className='relative'>
              <Link
                className='w-full p-3 bg-white text-[#512D6D] font-bold border border-[#512D6D] relative z-10'
                to='/cart'
              >
                VIEW MY CART
              </Link>
              <span className='absolute h-[40px] w-full -bottom-[0.7rem] -right-[0.15rem] bg-[#9A4BD8] z-00'></span>
            </div>
            <div className='relative'>
              <Link
                className='w-full py-3 px-5 bg-[#512D6D] text-white font-bold relative z-10'
                to='/cart'
              >
                CHECKOUT
              </Link>
              <span className='absolute h-[40px] w-full -bottom-[0.7rem] -right-[0.15rem] bg-[#9A4BD8] z-00'></span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;
