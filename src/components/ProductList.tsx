import type { Coffee } from '@/lib/type';

type Props = {
  coffeeData: Coffee[];
};

const ProductList = ({ coffeeData }: Props) => {
  return (
    <div className='w-full py-10 grid grid-cols-2 gap-x-4 gap-y-6'>
      {coffeeData.map((item) => (
        <div className='flex flex-col items-center'>
          <img src={item.image} alt={item.title} className='h-40 w-40' />
          <h3 className='uppercase text-xl leading-5 font-medium text-center h-[2.7rem] overflow-hidden line-clamp-2 mb-5'>
            {item.title}
          </h3>
          <p className='text-xl leading-5 font-semibold pb-5'>
            MYR{item.price}.00
          </p>
          <div className='relative w-full'>
            <button className='w-full py-3 bg-[#512D6D] text-white font-bold relative z-10'>
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
