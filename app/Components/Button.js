import Link from "next/link";
import React from "react";

const Button = ({ text, page }) => {
    const handleClickPage = () => {
        let num = Number(page);
        if(text === 'Previous' && num > 1){
            return `/${num - 1}`;
        }else if(text === 'Next' && num != 207){
           return `/${num + 1}`
        }
        return `/${num}`
    }
  return (
    <div>
      <Link 
      className="bg-black text-white px-6 py-3 rounded-[8px]"
      href={handleClickPage()}>
          {text}
      </Link>
    </div>
  );
};

export default Button;
