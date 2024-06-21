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
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const removeSpace = (str: string) => str.replace(/\s+/g, '');

const NavItems = () => {
  const [isClicked, setIsClicked] = useState(Array(navMenu.length).fill(false));

  const handleToggle = (index) => {
    setIsClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'relative pl-4 before:absolute before:h-full before:w-2 before:left-0 before:bg-[#512D6D]'
      : '';

  return (
    <Menubar className='py-7'>
      {navMenu.map((nav, index) =>
        nav.menu ? (
          <MenubarMenu key={index}>
            <MenubarTrigger
              className='text-lg font-medium py-1 uppercase flex justify-between'
              onClick={() => handleToggle(index)}
            >
              {nav.title}
              {isClicked[index] ? (
                <MdKeyboardArrowDown className='h-7 w-7' />
              ) : (
                <MdKeyboardArrowRight className='h-7 w-7' />
              )}
            </MenubarTrigger>
            <MenubarContent>
              {nav.menu.map((item) => (
                <MenubarSub key={index}>
                  <MenubarSubTrigger className='capitalize'>
                    <NavLink
                      to={`/${nav.title.replace(/\s+/g, '-')}/${removeSpace(
                        item.main
                      )}`}
                      className={activeLink}
                    >
                      {item.main}
                    </NavLink>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    {item.sub.map((subitem) => (
                      <MenubarItem key={index} className='capitalize'>
                        <NavLink
                          to={`/${nav.title.replace(/\s+/g, '-')}/${removeSpace(
                            subitem
                          )}`}
                          className={activeLink}
                        >
                          {subitem}
                        </NavLink>
                      </MenubarItem>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ) : (
          <MenubarMenu>
            <NavLink
              to={`/${removeSpace(nav.title)}`}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontWeight: 500,
                padding: '0.25rem 0',
                textTransform: 'uppercase',
              }}
            >
              {nav.title}
            </NavLink>
          </MenubarMenu>
        )
      )}
    </Menubar>
  );
};

export default NavItems;
