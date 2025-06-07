import { apiService } from "@/core/services/api-service";
import { typeGuards } from "@/core/types/type-guards";
import { ProductEntrySkeleton } from "@/core/types/types";
import MainLayout from "@/layout/main-layout";
import { Entry } from "contentful";
import { GetStaticPropsResult } from "next";

interface StoreProps {
  productsList: Entry<ProductEntrySkeleton>[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<StoreProps>> {
  // Query the CMS for the residential pages and alerts in parallel
  const productsList = await apiService.getProducts();

  if (
    !productsList.items.length ||
    !typeGuards.isProductsListEntrySkeleton(productsList.items[0]) ||
    !typeGuards.isProductEntrySkeltonArray(productsList.items[0].fields.products)
  ) {
    return {
      notFound: true,
    };
  }

  const productList = productsList.items[0].fields.products as Entry<ProductEntrySkeleton>[];

  // Return the page and data for layout
  return {
    props: {
      productsList: productList,
    },
    revalidate: process.env.NEXT_PUBLIC_ENV === "prod" ? 900 : 1,
  };
}

export default function Store({ productsList }: StoreProps) {
  return (
    <MainLayout
      left={<div className="flex flex-col items-center w-full justify-center bg-red-200">1123</div>}
      centre={<div className="flex flex-col items-center w-full justify-center bg-red-200">2</div>}
      right={<div className="flex flex-col items-center w-full justify-center bg-red-200">3</div>}
    />
  );
}
