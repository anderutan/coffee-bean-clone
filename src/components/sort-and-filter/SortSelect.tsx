import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSearchParams } from 'react-router-dom';

const SortSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (value: string) => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set('product-order', value);
      return params;
    });
  };

  return (
    <Select onValueChange={handleSortChange}>
      <SelectTrigger className='w-full py-3 border-b-2 border-r-2 border-slate-300'>
        <SelectValue placeholder='Sort by - Name (A-Z)' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='name-asc'>Sort by - Name (A-Z)</SelectItem>
        <SelectItem value='name-desc'>Sort by - Name (Z-A)</SelectItem>
        <SelectItem value='price-asc'>Sort by - Price - Low To High</SelectItem>
        <SelectItem value='price-desc'>
          Sort by - Price - High To Low
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
