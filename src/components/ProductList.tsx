import { useAppDispatch } from '@/app/hooks';
import { addItemToCart } from '@/features/cart/cartSlice';
import type { Coffee } from '@/lib/type';
import { useSearchParams } from 'react-router-dom';

type Props = {
  coffeeData: Coffee[];
};

const ProductList = ({ coffeeData }: Props) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const searchTerm = searchParams.getAll('category');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const productOrder = searchParams.get('product-order');

  let filterData = coffeeData;

  // Filter by category
  if (searchTerm.length > 0) {
    filterData = filterData.filter((coffee) =>
      searchTerm.some((term) => coffee.category.includes(term))
    );
  }

  // Filter by price range
  if (minPrice && maxPrice) {
    filterData = filterData.filter(
      (coffee) =>
        coffee.price >= Number(minPrice) && coffee.price <= Number(maxPrice)
    );
  }

  // Sort the data based on product-order
  if (productOrder) {
    filterData = filterData.slice().sort((a, b) => {
      switch (productOrder) {
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }

  const handleClick = (item: Coffee) => {
    dispatch(addItemToCart(item));
    console.log(item);
  };

  return (
    <div className='w-full py-10 grid grid-cols-2 gap-x-4 gap-y-6'>
      {filterData.map((item) => (
        <div className='flex flex-col items-center' key={item.title}>
          <img src={item.image} alt={item.title} className='h-40 w-40' />
          <h3 className='uppercase text-xl leading-5 font-medium text-center h-[2.7rem] overflow-hidden line-clamp-2 mb-5'>
            {item.title}
          </h3>
          <p className='text-xl leading-5 font-semibold pb-5'>
            MYR{item.price}.00
          </p>
          <div className='relative w-full'>
            <button
              className='w-full py-3 bg-[#512D6D] text-white font-bold relative z-10'
              onClick={() => handleClick(item)}
            >
              ADD TO CART
            </button>
            <span className='absolute h-full w-full -bottom-[0.15rem] -right-[0.15rem] bg-[#9A4BD8] z-0'></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
