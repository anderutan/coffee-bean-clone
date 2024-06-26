import { useAppSelector } from '@/app/hooks';
import CartItemCard from '@/components/CartItemCard';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItem = useAppSelector((state) => state.cart);
  return (
    <main className='px-3 h-full min-h-screen'>
      <div className='flex flex-col items-center pt-5 pb-10'>
        <h1 className='text-3xl font-bold'>SHOPPING CART</h1>
        <span className='relative pl-4 after:absolute after:h-[5px] after:w-16 after:-bottom-5 after:-left-5 after:bg-[#512D6D]'></span>
      </div>

      <div>
        <p className='mb-2 font-semibold'>PRODUCT</p>
        <Separator className='bg-slate-400' />
        {cartItem.items.map((item) => (
          <CartItemCard item={item} key={item.product.id} />
        ))}
      </div>

      <div className='relative flex mx-2 mt-8'>
        <Link
          className='w-full p-3 bg-white text-[#512D6D] font-bold border border-[#512D6D] relative z-10 text-center'
          to='/'
        >
          CONTINUE SHOPPING
        </Link>
        <span className='absolute h-[50px] w-full -bottom-[0.25rem] -right-[0.2rem] bg-[#9A4BD8] z-00'></span>
      </div>
    </main>
  );
};

export default Cart;
