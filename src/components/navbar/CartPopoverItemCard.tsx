import { IoCloseSharp } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  CartItem,
  removeItemFromCart,
  updateItemQuantity,
} from '@/features/cart/cartSlice';
import { Separator } from '../ui/separator';
import { useAppDispatch } from '@/app/hooks';

type Props = {
  item: CartItem;
};

const CartPopoverItemCard = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrease = (id: number, quantity: number) => {
    dispatch(updateItemQuantity({ productId: id, quantity: quantity + 1 }));
  };

  const handleDecrease = (id: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ productId: id, quantity: quantity - 1 }));
    }
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ productId: id, quantity }));
    }
  };
  return (
    <>
      <div className='w-[85vw] flex py-5 first-of-type:pt-0'>
        <div className=''>
          <img
            src={item.product.image}
            alt={item.product.title}
            className='h-24 w-24'
          />
        </div>
        <div className='flex-1 flex flex-col justify-between gap-2'>
          <p className='text-lg font-medium uppercase leading-5'>
            {item.product.title}
          </p>
          <p>Stock available: {item.product.stock}</p>
          <p className='font-medium uppercase'>MYR{item.product.price}.00</p>
        </div>
        <div className='flex flex-col justify-between'>
          <button
            className='self-end'
            onClick={() => handleDelete(item.product.id)}
          >
            <IoCloseSharp className='w-7 h-7' />
          </button>
          <div>
            <button
              onClick={() => handleDecrease(item.product.id, item.quantity)}
              className='-mr-1'
            >
              <FaMinus />
            </button>
            <input
              type='number'
              value={item.quantity}
              className='w-11 text-center mx-2'
              onChange={(e) =>
                handleQuantityChange(item.product.id, Number(e.target.value))
              }
            />
            <button
              onClick={() => handleIncrease(item.product.id, item.quantity)}
              className='-ml-1'
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <Separator className='bg-slate-400 last-of-type:hidden' />
    </>
  );
};

export default CartPopoverItemCard;
