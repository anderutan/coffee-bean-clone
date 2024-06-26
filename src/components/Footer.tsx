import { FaWpforms } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-200 w-full p-8'>
        <div className='px-5'>
          <div className='flex flex-col gap-3'>
            <p className='font-semibold'>QUICK LINKS</p>
            <a href='#' className='font-light'>
              Careers
            </a>
            <a href='#' className='font-light'>
              Contact Us
            </a>
            <a href='#' className='font-light'>
              Terms & Conditions
            </a>
            <a href='#' className='font-light'>
              Privacy Policy
            </a>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-semibold pt-8'>CUSTOMER CARE</p>
            <p className='font-light'>Share with us your feedback!</p>
            <a href='#' className='flex gap-2 items-center font-light'>
              <FaWpforms /> Feedback Form
            </a>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-semibold pt-8'>THE COFFEE BRAN CARD</p>
            <a href='#' className='font-light'>
              Register My Coffee Bean Card
            </a>
            <a href='#' className='font-light'>
              FAQs
            </a>
          </div>
        </div>
        <div className='mt-12'>
          <p className='text-sm font-light mb-1'>
            SEND ME REWARDS & PROMOTIONS!
          </p>
          <div className='flex'>
            <Input
              placeholder='Your E-mail'
              className='border border-slate-500'
            />
            <button className='w-10 h-10 bg-[#512D6D] flex justify-center items-center rounded-md rounded-l-none -ml-3'>
              <MdKeyboardArrowRight className=' w-5 h-5 text-white' />
            </button>
          </div>
        </div>
      </footer>
      <div className='w-full bg-[#512D6D] px-8 py-3'>
        <p className='text-white text-center leading-5 text-sm font-light'>
          Copyright &#169; 2024. The Coffee Bean and Tea Leaf (Malaysia) Sdn.
          Bhd.
        </p>
      </div>
    </>
  );
};

export default Footer;
