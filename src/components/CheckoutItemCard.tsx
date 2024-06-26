import { CartItem } from '@/features/cart/cartSlice';
import { Separator } from './ui/separator';

type Props = {
  item: CartItem;
};

const CheckoutItemCard = ({ item }: Props) => {
  const subtotal = (item.product.price * item.quantity).toFixed(2);
  return (
    <>
      <div className='w-full flex py-5 first-of-type:pt-0'>
        <div>
          <img
            src={item.product.image}
            alt={item.product.title}
            className='h-24 w-24'
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <p className='text-lg font-medium uppercase leading-5'>
            {item.product.title}
          </p>
          <p className='font-light'>Qty: {item.quantity}</p>
        </div>
        <div className='flex-1'>
          <p className='text-right font-light'>Subtotal</p>
          <p className='font-medium uppercase text-right'>MYR{subtotal}</p>
        </div>
      </div>
      <Separator className='bg-slate-400 last-of-type:hidden' />
    </>
  );
};

export default CheckoutItemCard;
