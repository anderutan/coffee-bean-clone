import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '@/app/hooks';
import { updateCoffeeReviews } from '@/features/product/productSlice';

const formSchema = z.object({
  id: z.string(),
  nickname: z.string().min(2, {
    message: 'Nickname must be at least 2 characters.',
  }),
  summary: z
    .string()
    .min(2, {
      message: 'Summary must be at least 2 characters.',
    })
    .max(100, {
      message: 'Summary must be less than 100 characters',
    }),
  review: z
    .string()
    .min(2, {
      message: 'Review must be at least 2 characters.',
    })
    .max(500, {
      message: 'Review must be less than 500 characters',
    }),
});

export default function ReviewForm({ productId }: { productId: string }) {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: uuid().slice(0, 8),
      nickname: '',
      summary: '',
      review: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (productId) {
      dispatch(updateCoffeeReviews({ id: productId, review: values }));
      form.reset({
        id: uuid().slice(0, 8),
        nickname: '',
        summary: '',
        review: '',
      });
    } else {
      console.error('Product ID is not available');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='nickname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input placeholder='Your nickname' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='summary'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Input placeholder='Product summary' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='review'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea placeholder='Your review' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full bg-violet-800 font-bold'>
          Submit Review
        </Button>
      </form>
    </Form>
  );
}
