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
import { Button } from '@/components/ui/button';
import { Divide } from 'lucide-react';

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
        {cartItem.items.length ? (
          cartItem.items.map((item) => (
            <CartItemCard item={item} key={item.product.id} />
          ))
        ) : (
          <div className='pt-5'>
            <p>
              You have no items in your shopping cart. Please click item below
              to continue shopping.
            </p>
          </div>
        )}
      </div>

      <Button variant='outline' className='w-full mt-8'>
        <Link to='/'>CONTINUE SHOPPING</Link>
      </Button>

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
            <p className='flex-1 text-2xl font-medium leading-6'>ORDER TOTAL</p>
            <p className='flex-auto text-3xl font-semibold text-end'>
              MYR{total}
            </p>
          </div>
          <div className='flex justify-between '>
            <p className='flex-1 text-2xl font-medium'>TOTAL QTY</p>
            <p className='flex-auto text-3xl font-semibold text-end'>
              {cartItem.totalQuantity} unit
            </p>
          </div>
        </CardContent>
        <CardFooter className='w-full'>
          <Button className='w-full mx-auto mt-8' size='lg'>
            <Link to='/checkout'>PROCEED TO CHECKOUT</Link>
          </Button>
        </CardFooter>
      </Card>

      <div className='w-full mt-10 my-5'>
        <p className='font-medium mb-1'>PROMO CODE</p>
        <div className='flex'>
          <Input
            placeholder='Enter Promo Code...'
            className='border border-slate-500 focus-visible:ring-0'
          />
          <Button className='h-10 px-6 bg-[#512D6D] text-white font-bold flex justify-center items-center rounded-md ml-3'>
            APPLY
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
