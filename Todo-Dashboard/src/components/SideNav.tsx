import React from "react";

const SideNav = () => {
  const navLinks = [
    { text: "Dashboard", href: "#" },
    { text: "Vital Task", href: "#" },
    { text: "My Task", href: "#" },
    { text: "Task Categories", href: "#" },
    { text: "Settings", href: "#" },
    { text: "Help", href: "#" },
  ];

  const navStyles =
    "hover:bg-[white] hover:text-[#ff6767] py-2 px-1 hover:rounded-[8px] transition-all";

  return (
    <div className="bg-red-500 text-white p-4 absolute w-full top-10 bottom-0">
      <div className="flex flex-col justify-center items-center px-3">
        <p className="text-[12px] font-semibold">David Idowu</p>
        <p className="text-[10px]">idowudavidodun@gmail.com</p>
      </div>
      <div className="flex flex-col mt-5 text-[12px] px-1 font-semibold">
        {navLinks.map((nav) => (
          <li key={nav.text} className={navStyles}>
            <a>{nav.text}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
