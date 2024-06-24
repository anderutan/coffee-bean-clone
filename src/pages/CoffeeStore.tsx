import FilterCategoryPrice from '@/components/sort-and-filter/FilterCategoryPrice';
import FilterStatus from '@/components/sort-and-filter/FilterStatus';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { useLocation } from 'react-router-dom';
import SortSelect from '@/components/sort-and-filter/SortSelect';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEffect } from 'react';
import { fetchCoffee } from '@/features/product/productSlice';
import ProductList from '@/components/ProductList';

const CoffeeStore = () => {
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter((segment) => segment);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
  }, []);

  const coffeeData = useAppSelector((state) => state.product.coffee);

  return (
    <main className='px-3 h-full min-h-screen'>
      <PageBreadcrumb pathArray={pathArray} />
      <div className='flex flex-col items-center pt-5 pb-10'>
        <h1 className='text-3xl font-bold'>COFFEE</h1>
        <span className='relative pl-4 after:absolute after:h-[5px] after:w-16 after:-bottom-5 after:-left-5 after:bg-[#512D6D]'></span>
      </div>

      <div className='pt-10'>
        <FilterStatus coffeeData={coffeeData} />
        <FilterCategoryPrice coffeeData={coffeeData} />
        <SortSelect />
      </div>
      <div>
        <ProductList coffeeData={coffeeData} />
      </div>
    </main>
  );
};

export default CoffeeStore;
