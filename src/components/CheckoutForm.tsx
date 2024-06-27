import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from './ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  fname: z.string(),
  lname: z.string(),
  company: z.string().optional(),
  unitNum: z.string(),
  street1: z.string(),
  street2: z.string(),
  city: z.string(),
  state: z.string(),
  postcode: z.string().length(5, { message: 'Postcode must be 5 number only' }),
  phone: z.string().length(10),
  shipping: z.enum(['pickup', 'delivery'], {
    required_error: 'You need to select a shipping method.',
  }),
  store: z.string(),
  pickupHp: z.string().length(10),
  date: z.date({ required_error: 'Date for pickup / delivery is required.' }),
  time: z.string(),
  comment: z
    .string()
    .min(10, {
      message: 'Comment must be at least 10 characters.',
    })
    .max(160, {
      message: 'Comment must not be longer than 30 characters.',
    })
    .optional(),
});

const CheckoutForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      fname: '',
      lname: '',
      company: '',
      unitNum: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      postcode: '',
      phone: '',
      shipping: undefined,
      store: '',
      pickupHp: '',
      date: undefined,
      time: '',
      comment: '',
    },
  });

  const shipping = form.watch('shipping');

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='my-10'>
        <div className='border border-slate-300 rounded-lg overflow-hidden mb-5'>
          <p className='bg-[#512D6D] px-5 py-3 tracking-wider font-medium text-white text-lg'>
            SHIPPING ADDRESS
          </p>
          <div className='px-3 py-5 flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your email'
                      {...field}
                      className='border-slate-400'
                    />
                  </FormControl>
                  <FormDescription>
                    You can create an account after checkout.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className='mt-5' />
            {shipping !== 'pickup' && (
              <>
                <FormField
                  control={form.control}
                  name='fname'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Your First Name...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='lname'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Your Last Name...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='company'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Company name...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='unitNum'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Block / Unit Number *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Unit number...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='street1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Street address 1...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='street2'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder='Street address 2...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>District/City *</FormLabel>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className='border-slate-400'>
                            <SelectValue placeholder='Please select a District/City' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='city1'>City 1</SelectItem>
                          <SelectItem value='city2'>City 2</SelectItem>
                          <SelectItem value='city3'>City 3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='state'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region/State *</FormLabel>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className='border-slate-400'>
                            <SelectValue placeholder='Please select a region, state or province' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='state1'>State 1</SelectItem>
                          <SelectItem value='state2'>State 2</SelectItem>
                          <SelectItem value='state3'>State 3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='postcode'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postcode *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Postcode...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Phone number...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
        </div>

        <div className='border border-slate-300 rounded-lg overflow-hidden pb-5 mb-5'>
          <p className='bg-[#512D6D] px-5 py-3 tracking-wider font-medium text-white text-lg'>
            SHIPPING METHODS
          </p>
          <div className='px-3 py-5 flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='shipping'
              render={({ field }) => (
                <FormItem className='space-y-3 mb-3'>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex gap-8'
                    >
                      <FormItem className='flex items-center space-x-2 space-y-0'>
                        <FormControl>
                          <RadioGroupItem
                            value='pickup'
                            className='rounded-sm h-5 w-5 text-violet-700'
                          />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Store Pickup
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-2 space-y-0'>
                        <FormControl>
                          <RadioGroupItem
                            value='delivery'
                            className='rounded-sm h-5 w-5 text-violet-700'
                          />
                        </FormControl>
                        <FormLabel className='font-normal'>Delivery</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {shipping === 'pickup' && (
              <>
                <FormField
                  control={form.control}
                  name='store'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Store Location *</FormLabel>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className='border-slate-400'>
                            <SelectValue placeholder='Choose a store...' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='store1'>Store 1</SelectItem>
                          <SelectItem value='store2'>Store 2</SelectItem>
                          <SelectItem value='store3'>Store 3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='pickupHp'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Phone number for pickup...'
                          {...field}
                          className='border-slate-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date *</FormLabel>
                  <FormDescription>
                    (whole cakes have to be ordered 4 working days ahead)
                  </FormDescription>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal border-slate-400',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='time'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time *</FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className='border-slate-400'>
                        <SelectValue placeholder='Choose a time for pickup/delivery...' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='time1'>Time 1</SelectItem>
                      <SelectItem value='time2'>Time 2</SelectItem>
                      <SelectItem value='time3'>Time 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='comment'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Please let us know your requirement...'
                      className='resize-none h-[200px] border-slate-400'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type='submit'
          className='px-12 py-7 bg-[#512D6D] text-xl font-bold'
        >
          NEXT
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
