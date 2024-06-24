import FilterCategoryPrice from '@/components/FilterCategoryPrice';
import FilterStatus from '@/components/FilterStatus';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { useLocation } from 'react-router-dom';

const CoffeeStore = () => {
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter((segment) => segment);

  return (
    <main className='px-3'>
      <PageBreadcrumb pathArray={pathArray} />
      <div className='flex flex-col items-center pt-5 pb-10'>
        <h1 className='text-3xl font-bold'>COFFEE</h1>
        <span className='relative pl-4 after:absolute after:h-[5px] after:w-16 after:-bottom-5 after:-left-5 after:bg-[#512D6D]'></span>
      </div>

      <div className='pt-10'>
        <FilterStatus />
        <FilterCategoryPrice />
      </div>
    </main>
  );
};

export default CoffeeStore;
