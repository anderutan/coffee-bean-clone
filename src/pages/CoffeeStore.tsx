import PageBreadcrumb from '@/components/PageBreadcrumb';
import { useLocation } from 'react-router-dom';

const CoffeeStore = () => {
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter((segment) => segment);
  console.log(pathArray);
  return (
    <main className='px-3'>
      <PageBreadcrumb pathArray={pathArray} />
    </main>
  );
};

export default CoffeeStore;
