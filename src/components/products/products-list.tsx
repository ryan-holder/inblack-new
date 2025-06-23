import { ProductEntrySkeleton } from "@/core/types/types";
import { Entry } from "contentful";
import LazyImage from "../images/lazy-loaded-image";

interface ProductsProps {
  products: Entry<ProductEntrySkeleton>[];
}

export default function ProductsList({ products }: ProductsProps) {
  return (
    <div className="w-full h-full flex flex-col items-center pb-20 xl:pb-0">
      <div className="w-full h-full xl:w-11/12 3xl:w-10/12 grid grid-cols-2 gap-2 sm:gap-3">
        {products &&
          Array.from(products)
            .reverse()
            .sort((x) => (x.fields?.showPrice ? -1 : 1))
            .map((x) => <LazyImage key={x.sys.id} product={x} />)}
      </div>
    </div>
  );
}
