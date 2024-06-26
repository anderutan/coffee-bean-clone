import logo from '/public/Logo.webp';
import FBIcon from '/public/fb.webp';
import IGIcon from '/public/ins.webp';
import TTIcon from '/public/tiktok.webp';
import { Separator } from '@/components/ui/separator';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import CartPopover from './CartPopover';
import SearchbarPopover from './SearchbarPopover';
import SidebarMB from './SidebarMB';
import { useAppSelector } from '@/app/hooks';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItem = useAppSelector((state) => state.cart.items);

  return (
    <nav className='px-3'>
      <div className='flex items-center py-3'>
        <SidebarMB>
          <button>
            <RxHamburgerMenu className='h-5 w-5 mr-3' />
          </button>
        </SidebarMB>
        <Link to='/' className='w-[50%]'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='flex justify-evenly flex-1'>
          <a href='#'>
            <img src={FBIcon} alt='Facebook icon' className='h-5' />
          </a>
          <a href='#'>
            <img src={IGIcon} alt='Instagram icon' className='h-5' />
          </a>
          <a href='#'>
            <img src={TTIcon} alt='Tiktok icon' className='h-5' />
          </a>
        </div>
      </div>
      <Separator />
      <div className='py-3 flex items-center justify-end gap-3'>
        <CartPopover>
          <MdOutlineShoppingBag className='h-6 w-6' />
        </CartPopover>
        {cartItem.length > 0 && (
          <p className='-ml-3 text-lg text-[#512D6D] font-bold'>
            ({cartItem.length})
          </p>
        )}
        <SearchbarPopover>
          <FaMagnifyingGlass className='h-5 w-5' />
        </SearchbarPopover>
      </div>
    </nav>
  );
};

export default Navbar;
