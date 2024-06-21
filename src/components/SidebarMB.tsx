import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from './ui/separator';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';

type SidebarProps = {
  children: ReactElement;
};

const SidebarMB: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side='left' className='w-4/5'>
          <div>
            <div className='py-7'>
              <Link to='/login' className='font-bold text-xl'>
                LOGIN / SIGN UP
              </Link>
            </div>
            <Separator />
            <div>
              <NavItems />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SidebarMB;
