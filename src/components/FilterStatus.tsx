import { IoCloseSharp } from 'react-icons/io5';
import { coffeeData } from '@/api/data';
import { useSearchParams } from 'react-router-dom';

const FilterStatus = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories = searchParams.getAll('category');
  const minPrice = Math.min(...coffeeData.map((coffee) => coffee.price));
  const maxPrice = Math.max(...coffeeData.map((coffee) => coffee.price));
  const initialPriceRange = [
    Number(searchParams.get('minPrice')) || minPrice,
    Number(searchParams.get('maxPrice')) || maxPrice,
  ];

  const handleClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.delete('category');
      selectedCategories
        .filter((cat) => cat !== category)
        .forEach((cat) => {
          params.append('category', cat);
        });
    } else {
      params.delete('minPrice');
      params.delete('maxPrice');
    }
    setSearchParams(params);
  };

  const isPriceRangeAdjusted =
    initialPriceRange[0] !== minPrice || initialPriceRange[1] !== maxPrice;

  return (
    (selectedCategories.length > 0 || isPriceRangeAdjusted) && (
      <div className='pb-8'>
        <p className='font-medium text-lg pb-1'>Now Shopping by</p>
        {selectedCategories.map((cat) => (
          <div key={cat} className='flex gap-3 items-center py-1'>
            <button onClick={() => handleClick(cat)} className='pl-3'>
              <IoCloseSharp className='h-5 w-5 text-slate-400' />
            </button>
            <p className='font-light capitalize'>
              <span className='font-semibold'>Category: </span>
              {cat}
            </p>
          </div>
        ))}
        {isPriceRangeAdjusted && (
          <div className='flex gap-3 items-center py-1'>
            <button onClick={() => handleClick()} className='pl-3'>
              <IoCloseSharp className='h-5 w-5 text-slate-400' />
            </button>
            <p className='font-light capitalize'>
              <span className='font-semibold'>Price: </span>
              {`MYR${initialPriceRange[0]} - MYR${initialPriceRange[1]}`}
            </p>
          </div>
        )}
        <button
          className='text-semibold underline pt-3'
          onClick={() => setSearchParams({})}
        >
          Clear All
        </button>
      </div>
    )
  );
};

export default FilterStatus;
