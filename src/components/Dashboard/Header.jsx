'use client'
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({title}) => {
    const router = useRouter()

    const handlerButton = (ev) => {
        ev.preventDefault()
        router.back()
    }

  return (
    <div className="flex justify-between">
      <button className="text-color-primary" onClick={handlerButton}>
        <ArrowLeft size={28} />
      </button>
      <h2 className="text-xl text-color-primary text-center font-bold">
        {title}
      </h2>
    </div>
  );
};

export default Header;
