import { motion } from "framer-motion";
import { useState } from "react";
import BackSoonImage from "@/images/back-soon.png";
import { ProductEntrySkeleton } from "@/core/types/types";
import { Asset, Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";

interface LazyLoadedImageProps {
  product: Entry<ProductEntrySkeleton>;
}

export default function LazyLoadedImage({ product }: LazyLoadedImageProps) {
  const [isLoading, updateIsLoading] = useState(true);
  const imgUrl = "https:" + (product.fields.coverImage as Asset)?.fields?.file?.url; // todo: remove 'as'
  const linkUrl =
    product.fields?.title ??
    ""
      .trim()
      .toLowerCase()
      .split(" ")
      .filter((x) => x !== "-")
      .join("-");

  return (
    <motion.div
      key={product.sys.id}
      data-title={product.fields?.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1, transition: { duration: 0.35 } }}
      exit={{ opacity: 0, transition: { duration: 0.75 } }}
      onLoad={() => updateIsLoading(false)}>
      <Link href={`/shop/${linkUrl}`} className="relative">
        <Image
          src={imgUrl === undefined ? "" : imgUrl + "?w=400"} // TODO: Add a fallback image here
          alt={(product.fields.title as string) ?? ""} // TODO: remove 'as'
          width="400"
          height="400"
          className="object-cover top-0 left-0 block h-full w-full"
        />
        {!product.fields?.showPrice && (
          <Image
            alt="Out of stock, back soon"
            src={BackSoonImage}
            className="h-14 w-14 xl:h-20 xl:w-20 absolute top-2 right-2 xl:top-4 xl:right-4 opacity-60"
          />
        )}
      </Link>
    </motion.div>
  );
}
