import {
  HiOutlineHome,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
  HiOutlineTag,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
	HiArrowLeftOnRectangle,
} from "react-icons/hi2";
import { logout } from "../features/auth/AuthSlice";
import type { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";

interface SideNavProps {
  isSideNavOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isSideNavOpen, onClose }) => {
  const navLinks = [
    { text: "Dashboard", href: "#", icon: <HiOutlineHome /> },
    { text: "Vital Task", href: "#", icon: <HiOutlineExclamationCircle /> },
    { text: "My Task", href: "#", icon: <HiOutlineCheckCircle /> },
    { text: "Task Categories", href: "#", icon: <HiOutlineTag /> },
    { text: "Settings", href: "#", icon: <HiOutlineCog /> },
    { text: "Help", href: "#", icon: <HiOutlineQuestionMarkCircle /> },
  ];

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

  const navStyles =
    "hover:bg-[white] hover:text-[#ff6767] py-3 px-3 hover:rounded-[8px] transition-all duration-200 list-none w-[200px] font-semibold text-[16px]";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className={`inset-y-0 left-0 z-30 bg-red-400 text-white p-4 fixed transform top-16 rounded-tr-xl
				transition-transform duration-300 ease-in-out bottom-0 shadow-[8px_0px_15px_-3px_rgba(0,0,0,0.15)]
			 ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"}
			 lg:static lg:translate-x-0
			 lg:h-full
				`}
    >
      <button className="absolute right-3 top-2 lg:hidden" onClick={onClose}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col justify-center items-center px-3">
        <div>
          <img
            src="image.jpg"
            alt="profile-pic"
            className="rounded-full w-16 mb-2"
          />
        </div>
        <p className="text-[14px] font-semibold">David Idowu</p>
        <p className="text-[10px]">idowudavidodun@gmail.com</p>
      </div>
      <div className="flex flex-col mt-5 px-1 lg:grid lg:grid-rows-6 lg:gap-3 ">
        {navLinks.map((nav) => (
          <li key={nav.text} className={navStyles}>
            <a href={nav.href} className="flex items-center gap-x-2 rounded-md">
              <span>{nav.icon}</span>
              <span>{nav.text}</span>
            </a>
          </li>
        ))}
      </div>
      <div
        className={`flex items-center gap-x-2 absolute bottom-16 ${navStyles}`}
      >
        <div>
          <HiArrowLeftOnRectangle />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </aside>
  );
};

export default SideNav;
