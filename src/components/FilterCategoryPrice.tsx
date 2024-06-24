import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { IoCloseSharp } from 'react-icons/io5';
import { Separator } from './ui/separator';
import { coffeeData } from '@/api/data';
import ReactSlider from 'react-slider';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';

const FilterCategoryPrice = () => {
  const uniqueCategories = useMemo(
    () => [...new Set(coffeeData.map((coffee) => coffee.category))],
    []
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategories = searchParams.getAll('category');
  const minPrice = Math.min(...coffeeData.map((coffee) => coffee.price));
  const maxPrice = Math.max(...coffeeData.map((coffee) => coffee.price));

  const initialPriceRange = useMemo(
    () => [
      Number(searchParams.get('minPrice')) || minPrice,
      Number(searchParams.get('maxPrice')) || maxPrice,
    ],
    [searchParams, minPrice, maxPrice]
  );

  const [priceRange, setPriceRange] = useState(initialPriceRange);

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    const newSelectedCategories = [...selectedCategories];

    if (e.target.checked) {
      if (!newSelectedCategories.includes(category)) {
        newSelectedCategories.push(category);
      }
    } else {
      const index = newSelectedCategories.indexOf(category);
      if (index > -1) {
        newSelectedCategories.splice(index, 1);
      }
    }

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.delete('category');
      newSelectedCategories.forEach((cat) => params.append('category', cat));
      params.set('minPrice', String(priceRange[0]));
      params.set('maxPrice', String(priceRange[1]));
      return params;
    });
  };

  const handleSliderChange = (value: number[]) => {
    setPriceRange(value);
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set('minPrice', String(value[0]));
      params.set('maxPrice', String(value[1]));
      params.delete('category');
      selectedCategories.forEach((cat) => params.append('category', cat));
      return params;
    });
  };

  useEffect(() => {
    setPriceRange(initialPriceRange);
  }, [searchParams, initialPriceRange]);

  return (
    <Drawer>
      <DrawerTrigger className='w-full py-3 bg-[#E4E4E4] border-b-2 border-r-2 border-slate-300'>
        Filter
      </DrawerTrigger>
      <DrawerContent className='h-[90%]'>
        <DrawerClose className='absolute right-3 top-3'>
          <IoCloseSharp className='w-8 h-8' />
        </DrawerClose>
        <DrawerHeader>
          <DrawerTitle className='text-3xl text-left'>FILTER</DrawerTitle>
          <span className='relative pl-4 after:absolute after:h-[5px] after:w-16 after:-bottom-0 after:left-0 after:bg-[#512D6D]'></span>
        </DrawerHeader>
        <div className='px-4'>
          <p className='text-xl font-medium mb-5'>CATEGORY</p>
          {uniqueCategories.map((category) => (
            <CheckBox
              category={category}
              key={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategory}
            />
          ))}

          <Separator />
          <p className='text-xl font-medium my-5'>Price</p>
          <ReactSlider
            className='w-full h-[25px]'
            thumbClassName='h-5 w-5 bg-purple-500 p-5 cursor-grab flex justify-center items-center text-white'
            trackClassName='h-[8px] bg-[#512D6D]'
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onChange={handleSliderChange}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterCategoryPrice;

type CheckBox = {
  category: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({ category, checked, onChange }: CheckBox) => {
  return (
    <div className='flex items-center space-x-2 pt-2 pb-4'>
      <input
        id={category.replace(/\s+/g, '')}
        type='checkbox'
        value={category}
        checked={checked}
        className='w-5 h-5 text-[#512D6D] border focus:ring-[#512D6D] rounded focus:ring-2 checked:bg-[#512D6D] '
        onChange={onChange}
      />

      <label
        htmlFor={category.replace(/\s+/g, '')}
        className={`font-light text-[#512D6D] leading-none capitalize pl-2 ${
          checked ? 'font-bold' : ''
        }`}
      >
        {category}
      </label>
    </div>
  );
};
