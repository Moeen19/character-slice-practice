import Link from "next/link";
import React from "react";

const PageBtn = ({ text }) => {
  const handleClickPage = () => {
    return `/${text}`;
  };
  return (
    <Link href={handleClickPage()}>
      <div className="rounded-[8px] p-3 hover:cursor-pointer bg-[gray]/20 font-medium">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default PageBtn;
