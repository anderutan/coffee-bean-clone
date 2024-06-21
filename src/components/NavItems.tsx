import navMenu from '@/api/nav-menu';
import { Link, NavLink } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

const removeSpace = (str: string) => str.replace(/\s+/g, '');

const NavItems = () => {
  return (
    <Menubar className='py-7'>
      {navMenu.map((nav, index) =>
        nav.menu ? (
          <MenubarMenu key={index}>
            <MenubarTrigger className='text-lg font-medium py-1 uppercase'>
              {nav.title}
            </MenubarTrigger>
            <MenubarContent>
              {nav.menu.map((item) => (
                <MenubarSub key={index}>
                  <MenubarSubTrigger className='capitalize'>
                    <Link
                      to={`/${nav.title.replace(/\s+/g, '-')}/${removeSpace(
                        item.main
                      )}`}
                    >
                      {item.main}
                    </Link>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    {item.sub.map((subitem) => (
                      <MenubarItem key={index} className='capitalize'>
                        <Link
                          to={`/${nav.title.replace(/\s+/g, '-')}/${removeSpace(
                            subitem
                          )}`}
                        >
                          {subitem}
                        </Link>
                      </MenubarItem>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ) : (
          <MenubarMenu>
            <Link
              to={`/${removeSpace(nav.title)}`}
              className='text-lg font-medium py-1 uppercase'
            >
              {nav.title}
            </Link>
          </MenubarMenu>
        )
      )}
    </Menubar>
  );
};

export default NavItems;
