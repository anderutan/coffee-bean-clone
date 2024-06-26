import { useAppSelector } from '@/app/hooks';
import CartItemCard from '@/components/CartItemCard';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const cartItem = useAppSelector((state) => state.cart);
  const subtotal = cartItem.totalPrice.toFixed(2);
  const tax = (Number(subtotal) * 0.06).toFixed(2);
  const total = (Number(subtotal) + Number(tax)).toFixed(2);
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

      <Card className='my-10 border border-slate-400'>
        <CardHeader className='border-b border-b-slate-400'>
          <CardTitle className='text-center'>SUMMARY</CardTitle>
        </CardHeader>
        <CardContent className='py-5 border-b border-b-slate-400'>
          <div className='flex justify-between mb-4'>
            <p className='flex-1 text-lg leading-5'>ORDER SUBTOTAL</p>
            <p className='flex-1 text-lg text-end'>MYR{subtotal}</p>
          </div>
          <div className='flex justify-between '>
            <p className='flex-1 text-lg'>TAX (6% SST)</p>
            <p className='flex-1 text-lg text-end'>MYR{tax}</p>
          </div>
        </CardContent>
        <CardContent className='py-5 border-b border-b-slate-400'>
          <div className='flex justify-between mb-4 items-center'>
            <p className='text-2xl font-medium leading-6'>ORDER TOTAL</p>
            <p className='flex-1 text-3xl font-semibold text-end'>MYR{total}</p>
          </div>
          <div className='flex justify-between '>
            <p className='text-2xl font-medium'>TOTAL QTY</p>
            <p className='flex-1 text-3xl font-semibold text-end'>
              {cartItem.totalQuantity} unit
            </p>
          </div>
        </CardContent>
        <CardFooter className='w-full'>
          <div className='relative flex w-full mx-auto mt-8'>
            <Link
              className='w-full p-3 bg-[#512D6D] text-white font-bold border border-[#512D6D] relative z-10 text-center text-xl'
              to='/checkout'
            >
              PROCEED TO CHECKOUT
            </Link>
            <span className='absolute h-[50px] w-full -bottom-[0.25rem] -right-[0.2rem] bg-[#9A4BD8] z-00'></span>
          </div>
        </CardFooter>
      </Card>

      <div className='my-10'>
        <p className='font-medium mb-1'>PROMO CODE</p>
        <div className='flex'>
          <Input
            placeholder='Enter Promo Code...'
            className='border border-slate-500'
          />
          <button className='h-10 px-10 bg-[#512D6D] text-white font-bold flex justify-center items-center rounded-md rounded-l-none -ml-3'>
            APPLY
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
