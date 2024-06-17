const NavbarItem = ({ title }) => {
  return (
    <div className="group flex items-center gap-1 font-semibold">
      <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
        {title}
      </div>
    </div>
  );
};

export default NavbarItem;
