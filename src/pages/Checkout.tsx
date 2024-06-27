import { useAppSelector } from '@/app/hooks';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import CheckoutItemCard from '@/components/CheckoutItemCard';
import { Separator } from '@/components/ui/separator';
import { PhoneCallIcon, Truck } from 'lucide-react';
import CheckoutForm from '@/components/CheckoutForm';

const Checkout = () => {
  const [open, setOpen] = useState(true);
  const cartItem = useAppSelector((state) => state.cart);
  const subtotal = cartItem.totalPrice.toFixed(2);
  const tax = (Number(subtotal) * 0.06).toFixed(2);
  const shipping = Number(0).toFixed(2);
  const total = (Number(subtotal) + Number(tax) + Number(shipping)).toFixed(2);
  return (
    <main className='px-3 h-full min-h-screen'>
      <div className='flex flex-col items-center pt-5 pb-10'>
        <h1 className='text-3xl font-bold'>CHECKOUT</h1>
        <span className='relative pl-4 after:absolute after:h-[5px] after:w-16 after:-bottom-5 after:-left-5 after:bg-[#512D6D]'></span>
      </div>

      <Collapsible open={open} onOpenChange={setOpen}>
        <Card className='my-10 border border-slate-400'>
          <CollapsibleTrigger className='w-full'>
            <CardHeader className='border-b border-b-slate-400 '>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-left inline-flex'>SUMMARY</CardTitle>
                {open ? (
                  <MdKeyboardArrowDown className='h-8 w-8 text-slate-500' />
                ) : (
                  <MdOutlineKeyboardArrowRight className='h-8 w-8 text-slate-500' />
                )}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className='py-5 border-b border-b-slate-400'>
              <div className='flex justify-between mb-4'>
                <p className='flex-1 text-lg leading-5'>SUBTOTAL</p>
                <p className='flex-1 text-lg text-end'>MYR{subtotal}</p>
              </div>
              <div className='flex justify-between mb-4'>
                <p className='flex-1 text-lg'>TAX (6% SST)</p>
                <p className='flex-1 text-lg text-end'>MYR{tax}</p>
              </div>
              <div className='flex justify-between '>
                <p className='flex-1 text-lg'>SHIPPING</p>
                <p className='flex-1 text-lg text-end'>MYR{shipping}</p>
              </div>
            </CardContent>
            <CardContent className='py-5 border-b border-b-slate-400'>
              <div className='flex justify-between items-center'>
                <p className='flex-1 text-2xl font-medium leading-6'>
                  ORDER TOTAL
                </p>
                <p className='flex-auto text-4xl font-semibold text-end'>
                  MYR{total}
                </p>
              </div>
            </CardContent>
            <CardContent className='py-5 border-b border-b-slate-400'>
              <p className='font-light text-xl tracking-wider my-3'>
                <span className='font-medium'>MY BAG</span> (
                {cartItem.totalQuantity} Items)
              </p>
              <Separator className='bg-slate-300' />
              {cartItem.items.map((item, index) => (
                <CheckoutItemCard item={item} key={index} />
              ))}
            </CardContent>
            <CardFooter className='w-full flex flex-col'>
              <div className='w-full mt-10 my-5'>
                <p className='font-medium mb-1'>PROMO CODE</p>
                <div className='flex'>
                  <Input
                    placeholder='Enter Promo Code...'
                    className='border border-slate-500 focus-visible:ring-0'
                  />
                  <button className='h-10 px-6 bg-[#512D6D] text-white font-bold flex justify-center items-center rounded-md rounded-l-none -ml-3'>
                    APPLY
                  </button>
                </div>
              </div>
              <div className='self-start mt-7'>
                <a href='#' className='flex gap-2 mb-3'>
                  <PhoneCallIcon /> <p className='underline'>Need Help?</p>
                </a>
                <a href='#' className='flex gap-2'>
                  <Truck /> <p className='underline'>About Delivery</p>
                </a>
              </div>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>
      <div>
        <CheckoutForm />
      </div>
    </main>
  );
};

export default Checkout;
