interface SideNavProps {
  isSideNavOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isSideNavOpen, onClose }) => {
  const navLinks = [
    { text: "Dashboard", href: "#" },
    { text: "Vital Task", href: "#" },
    { text: "My Task", href: "#" },
    { text: "Task Categories", href: "#" },
    { text: "Settings", href: "#" },
    { text: "Help", href: "#" },
  ];

  const navStyles =
    "hover:bg-[white] hover:text-[#ff6767] py-3 px-3 hover:rounded-[8px] transition-all list-none w-[200px] font-semibold text-[16px]";

  return (
    <aside
      className={`inset-y-0 left-0 z-30 bg-red-400 text-white p-4 fixed transform top-16 rounded-tr-xl
				transition-transform duration-300 ease-in-out md:hidden bottom-0 shadow-[8px_0px_15px_-3px_rgba(0,0,0,0.15)] ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <button className="absolute right-3 top-2" onClick={onClose}>
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
      <div className="flex flex-col mt-5 px-1 ">
        {navLinks.map((nav) => (
          <li key={nav.text} className={navStyles}>
            <a>{nav.text}</a>
          </li>
        ))}
			</div>
			<p className={`${navStyles} absolute bottom-16`}>Logout</p>
    </aside>
  );
};

export default SideNav;
