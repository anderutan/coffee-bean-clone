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

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  fname: z.string(),
  lname: z.string(),
  company: z.string().optional(),
  unitNum: z.string(),
  street1: z.string(),
  street2: z.string().optional(),
  city: z.string(),
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
    },
  });

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
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className='border-slate-400'>
                        <SelectValue placeholder='Please select a District/City' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='city1'>City 1</SelectItem>
                        <SelectItem value='city2'>City 2</SelectItem>
                        <SelectItem value='city3'>City 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
