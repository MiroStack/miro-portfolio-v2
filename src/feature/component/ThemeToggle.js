import { useState } from "react";
export const ThemeToggle = ({toggle, setToggle}) => {
  
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div
            className={`
                ${toggle ?  "bg-slate-500 delay-100": "bg-slate-300 delay-100"} 
        w-16 h-8
                  ease-in-out
          transition-all
        rounded-2xl
        shadow-sm
        fixed 
        top-8
        right-[2%]
        translate-x-[-50%]
        cursor-pointer`}
            onClick={handleToggle}
        >
            <div
                className={`
          ${toggle ? "right-[-5%] delay-100" : "left-[25%] delay-100"}
          bg-slate-100
          rounded-full
          h-5 w-5
          absolute
          top-[50%]
          translate-x-[-50%]
          translate-y-[-50%]
          ease-in-out
          transition-all
          duration-300
        `}
            />
        </div>
    );
}