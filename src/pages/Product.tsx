// Product.tsx
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import {
  fetchCoffeeById,
  updateCoffeeReviews,
} from '@/features/product/productSlice';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  FaPlus,
  FaMinus,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { addItemToCart, updateItemQuantity } from '@/features/cart/cartSlice';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReviewForm from '@/components/ReviewForm';
import { Separator } from '@/components/ui/separator';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter((segment) => segment);
  const { productId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchCoffeeById(productId));
    }
  }, [productId, dispatch]);

  const selectedCoffeeData = useAppSelector(
    (state) => state.product.selectedCoffee
  );

  const handleDecrease = () => {
    if (
      quantity > 1 &&
      selectedCoffeeData &&
      quantity <= selectedCoffeeData.stock
    ) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (
      quantity > 0 &&
      selectedCoffeeData &&
      quantity < selectedCoffeeData.stock
    ) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (selectedCoffeeData && value <= selectedCoffeeData.stock) {
      setQuantity(value);
    } else if (selectedCoffeeData && value > selectedCoffeeData.stock) {
      setQuantity(selectedCoffeeData.stock);
    }
  };

  const handleAddCart = () => {
    if (selectedCoffeeData) {
      dispatch(addItemToCart(selectedCoffeeData));
      dispatch(updateItemQuantity({ productId: productId, quantity }));
    }
  };

  return (
    <main className='px-3 pb-10 h-full min-h-screen'>
      <PageBreadcrumb pathArray={pathArray} title={selectedCoffeeData?.title} />
      <div>
        <img src={selectedCoffeeData?.image} alt='' />
        <div className='pb-2'>
          <h3 className='text-3xl uppercase font-bold'>
            {selectedCoffeeData?.title}
          </h3>
          <span className='relative pl-4 after:absolute after:h-[5px] after:w-16 after:bottom-2 after:left-0 after:bg-[#512D6D]'></span>
        </div>
        <h4 className='text-3xl uppercase font-bold pb-2'>
          MYR{selectedCoffeeData?.price}.00
        </h4>
        <p className='pb-10'>{selectedCoffeeData?.description}</p>
        <p className='pb-3'>
          <span className='font-bold'>Stock available: </span>
          {selectedCoffeeData?.stock}
        </p>
        <div className='pb-8'>
          <div>
            <button onClick={handleDecrease}>
              <FaMinus />
            </button>
            <input
              type='number'
              value={quantity}
              className='w-16 text-center mx-2'
              onChange={handleQuantityChange}
            />
            <button onClick={handleIncrease}>
              <FaPlus />
            </button>
          </div>
        </div>
        <button
          className='flex items-center justify-center gap-1 w-full py-3 text-white font-bold bg-[#512D6D]'
          onClick={handleAddCart}
        >
          ADD TO CART <MdOutlineShoppingBag />
        </button>
        <div className='flex items-center gap-4 py-8 text-slate-500 font-bold'>
          <p>SHARE TO:</p>
          <a href='#'>
            <FaFacebook />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
        <Tabs defaultValue='description' className='w-full'>
          <TabsList className='flex'>
            <TabsTrigger value='description' className='flex-1 '>
              Product Description
            </TabsTrigger>
            <TabsTrigger value='reviews' className='flex-1'>
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value='description'>
            <p className='capitalize pb-1 text-lg'>
              <span className='font-semibold'>Category: </span>
              {selectedCoffeeData?.category}
            </p>
            <p className='text-lg'>
              <span className='font-semibold'>Description: </span>
              {selectedCoffeeData?.description}
            </p>
          </TabsContent>
          <TabsContent value='reviews'>
            {selectedCoffeeData?.reviews.length ? (
              selectedCoffeeData.reviews.map((review) => (
                <div key={review.id} className='text-lg flex flex-col gap-1'>
                  <p>
                    <span className='font-semibold'>Name: </span>{' '}
                    {review.nickname}
                  </p>
                  <p>
                    <span className='font-semibold'>Summary: </span>{' '}
                    {review.summary}
                  </p>
                  <p>
                    <span className='font-semibold'>Reviews: </span>{' '}
                    {review.review}
                  </p>
                  <Separator className='bg-slate-700 my-5' />
                </div>
              ))
            ) : (
              <p>There are no reviews for this product.</p>
            )}
            <div className='py-3'>
              <p className='font-bold'>
                <span className='font-light text-slate-600'>
                  You're reviewing:{' '}
                </span>
                {selectedCoffeeData?.title}
              </p>
              <div className='py-3'>
                <ReviewForm productId={productId} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Product;
