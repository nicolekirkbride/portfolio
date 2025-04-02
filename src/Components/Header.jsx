import React from "react";

function Header() {
  const menuItemsList = [
    { name: "Experience" },
    { name: "For Fun" },
    { name: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center pt-8 pl-15 pr-15">
      <div className="w-[80px] bg-black text-white p-2 text-lg font-bold">
        LOGO
      </div>

      <nav className="flex gap-10 cursor-pointer text-white">
        {menuItemsList.map((item, index) => (
          <h1
            key={index} // Added key to prevent React warning
            className="relative transition duration-300 ease-in-out 
          before:absolute before:-bottom-1 before:left-1/2 before:h-[1px] 
          before:w-0 before:bg-white before:-translate-x-1/2 
          before:transition-all before:duration-300 
          hover:before:w-full text-md font-normal"
          >
            {item.name}
          </h1>
        ))}
      </nav>
    </header>
  );
}

export default Header;
