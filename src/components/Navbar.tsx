import Hamburger from 'hamburger-react';
import logo from '/public/Logo.webp';
import FBIcon from '/public/fb.webp';
import IGIcon from '/public/ins.webp';
import TTIcon from '/public/tiktok.webp';
import { Separator } from '@/components/ui/separator';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useState } from 'react';
import CartPopover from './CartPopover';
import SearchbarPopover from './SearchbarPopover';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='px-3'>
      <div className='flex items-center'>
        <Hamburger toggled={isOpen} toggle={setOpen} size={18} />

        <img src={logo} alt='logo' className='h-6 w-40' />
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
        <SearchbarPopover>
          <FaMagnifyingGlass className='h-5 w-5' />
        </SearchbarPopover>
      </div>
    </nav>
  );
};

export default Navbar;
