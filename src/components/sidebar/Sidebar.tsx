import { useState } from "react";
import {
  SettingsOutlined,
  Home,
  Person,
  Inventory2,
  CircleNotifications,
} from "@mui/icons-material";
import InventoryIcon from "../../assets/icon/inventory.svg";
import NextIcon from "../../assets/icon/next-button.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const navItems = [
    { title: "Dashboard", icon: <Home /> },
    { title: "Product", icon: <Inventory2 /> },
    { title: "User", icon: <Person /> },
    { title: "Notifications ", icon: <CircleNotifications />, gap: true },
    { title: "Setting", icon: <SettingsOutlined /> },
  ];
  return (
    <div>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={NextIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                      border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={InventoryIcon}
            className={`w-12 h-12 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-bold text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Inventory Management
          </h1>
        </div>
        <ul className="pt-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.title.toLocaleLowerCase()}`}
                className={({ isActive }) =>
                  `flex rounded-md p-2 cursor-pointer hover:bg-slate-100 text-sm items-center gap-x-4 
                    ${isActive ? "bg-slate-100" : ""}
                    ${item.gap ? "mt-9" : "mt-2"}
                  `
                }
              >
                {item.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {item.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
