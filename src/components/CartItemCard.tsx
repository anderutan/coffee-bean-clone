import { IoCloseSharp } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  CartItem,
  removeItemFromCart,
  updateItemQuantity,
} from '@/features/cart/cartSlice';
import { Separator } from '@/components/ui/separator';
import { useAppDispatch } from '@/app/hooks';

type Props = {
  item: CartItem;
};

const CartItemCard = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrease = (id: string, quantity: number) => {
    dispatch(updateItemQuantity({ productId: id, quantity: quantity + 1 }));
  };

  const handleDecrease = (id: string, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ productId: id, quantity: quantity - 1 }));
    }
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ productId: id, quantity }));
    }
  };
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
        <div className='flex-1 flex flex-col gap-4'>
          <p className='text-lg uppercase leading-5'>{item.product.title}</p>
          <p className='text-sm'>Stock available: {item.product.stock}</p>
          <p className='font-bold text-xl'>MYR{item.product.price}.00</p>
          <div className='flex-1 flex justify-between -mt-3'>
            <div>
              <button
                onClick={() => handleDecrease(item.product.id, item.quantity)}
              >
                <FaMinus />
              </button>
              <input
                type='number'
                value={item.quantity}
                className='w-16 text-center mx-2 h-9'
                onChange={(e) =>
                  handleQuantityChange(item.product.id, Number(e.target.value))
                }
              />
              <button
                onClick={() => handleIncrease(item.product.id, item.quantity)}
              >
                <FaPlus />
              </button>
            </div>
            <button className='' onClick={() => handleDelete(item.product.id)}>
              <IoCloseSharp className='w-7 h-7 mr-4' />
            </button>
          </div>
        </div>
      </div>
      <Separator className='bg-slate-400' />
    </>
  );
};

export default CartItemCard;
