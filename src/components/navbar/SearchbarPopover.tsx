import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ReactElement } from 'react';
import { Separator } from './ui/separator';

type SearchbarPopoverProps = {
  children: ReactElement;
};

const SearchbarPopover: React.FC<SearchbarPopoverProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className='w-full py-5'>
        <div>
          <input
            type='text'
            placeholder='Search entire store here...'
            className='border-b text-lg'
          />
        </div>
        {/* Need to add search function */}
      </PopoverContent>
    </Popover>
  );
};

export default SearchbarPopover;
