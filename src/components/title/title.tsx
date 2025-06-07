import { motion } from "framer-motion";
import CartImage from "@/images/cart.png";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TitleProps {
  showCart: boolean;
  updateExpandCart: Dispatch<SetStateAction<boolean>>;
  selectedSubCategory: string;
  updateShowMobileSubCategories: Dispatch<SetStateAction<boolean>>;
}

export default function Title({
  showCart,
  updateExpandCart,
  selectedSubCategory,
  updateShowMobileSubCategories,
}: TitleProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="pt-12 xl:pt-8 w-full h-44 sm:h-52 xl:h-44 2xl:h-52 sticky top-0 left-0 right-0 z-10 bg-white flex my-auto">
      <div className="mx-auto items-center w-11/12 sm:w-full grid grid-rows-2 3xl:grid-rows-none 3xl:grid-cols-10 ">
        <Link
          href="/"
          className="max-w-min 3xl:col-span-3 cursor-pointer self-end 3xl:self-center sm:ml-10 3xl:ml-20 w-full xl:pt-2 pb-1 xl:pb-0">
          <h1 className="text-3xl sm:text-4xl font-suisse font-extralight md:text-5xl xl:text-4.5xl 2xl:text-5.5xl text-left tracking-widest leading-3 whitespace-nowrap">
            SEAGAR DESIGN
          </h1>
        </Link>
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl xl:text-4.5xl 2xl:text-5.5xl 3xl:col-span-4 h-full 3xl:h-auto 
            sm:pl-10 3xl:pl-0 3xl:w-10/12 3xl:mx-auto font-suisse font-extrabold text-left tracking-widest 
            whitespace-nowrap">
          <Link href="/store">STORE</Link>
        </h1>
        <div className="xl:hidden pb-3 flex flex-row justify-between">
          <p
            className="sm:pl-10 inline-block font-suisse font-extralight underline cursor-pointer hover:text-black"
            onClick={() => updateShowMobileSubCategories(true)}>
            BROWSE {`– ${selectedSubCategory.toUpperCase()}`}
          </p>
          {showCart && (
            <motion.div
              key="mobile-cart-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35 } }}
              exit={{ opacity: 0, transition: { duration: 0.75 } }}
              className="sm:hidden relative rounded-full cursor-pointer mr-0.5 mb-0.5"
              onClick={() => updateExpandCart(true)}>
              <Image src={CartImage} alt="" className="h-5 w-5" onLoad={() => setIsLoaded(true)} />
              {isLoaded && (
                <div className="absolute bottom-0 -right-0.5 h-2.5 w-2.5 bg-black border-2 border-white rounded-full"></div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
