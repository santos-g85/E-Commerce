import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { UserContext } from "../context/UserContext";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/home"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/cart"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Cart
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const { Logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl max-w-full px-6 py-3 sticky top-0 z-40 bg-blue-gray-100 text-blue-gray-900">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5"
        >
          E-Commerce
        </Typography>
        {/* Navigation Links and Profile */}
        <div className="flex items-center gap-4 ml-auto">
          {/* NavList */}
          <div className="hidden lg:block">
            <NavList />
          </div>
          {/* Profile Dropdown */}
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="Profile"
                  className="border border-gray-900 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </Button>
            </MenuHandler>
            <MenuList className="bg-blue-gray-100 text-blue-gray-900">
              <MenuItem
                onClick={() => {
                  Logout();
                  navigate("/login");
                }}
                className="hover:bg-blue-500 hover:text-white"
              >
                Logout
              </MenuItem>
              <MenuItem onClick={() => {
                  navigate("/profile");
                }}className="hover:bg-blue-500 hover:text-white">
                Profile
              </MenuItem>
            </MenuList>
          </Menu>
          {/* Mobile Menu Icon */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
