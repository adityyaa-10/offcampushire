const MenuDropdownItem = ({ title }) => {
  return (
    <div className="w-full text-gray-950 transition-all">
      <div className="flex w-full cursor-pointer flex-row items-center justify-between bg-custom-gradient">
        <span className="text-[16px] font-semibold leading-[1.1]">{title}</span>
      </div>
    </div>
  );
};

export default MenuDropdownItem;
