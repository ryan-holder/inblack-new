import { apiService } from "@/core/services/api-service";
import { ProductEntrySkeleton } from "@/core/types/types";
import { Asset, AssetFile, ChainModifiers, Entry } from "contentful";
import { motion } from "framer-motion";
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import Image from "next/image";
import { Params } from "next/dist/server/request/params";
import ProductDescription from "@/components/products/product-description";
import MainLayout from "@/layout/main-layout";

interface ProductProps {
  product: Entry<ProductEntrySkeleton>;
}

function productNameToUrlString(name: string) {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((x) => x !== "-")
    .join("-");
}

export async function getStaticProps(
  context: GetStaticPropsContext<Params>
): Promise<GetStaticPropsResult<ProductProps>> {
  const slug = context.params?.product;

  const productsList = await apiService.getProducts();
  const products = productsList.items[0].fields.products as Entry<ProductEntrySkeleton>[];
  const product = products.find((x) => productNameToUrlString(x.fields.title as string) === slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product,
    },
    revalidate: process.env.NEXT_PUBLIC_ENV === "prod" ? 900 : 1,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const productsList = await apiService.getProducts();

  const product = productsList.items[0].fields.products as Entry<ProductEntrySkeleton>[];

  const paths = product.map((x) => ({
    params: { product: productNameToUrlString(x.fields.title as string) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default function Product({ product }: ProductProps) {
  const images = product.fields.images as Asset<ChainModifiers, string>[];

  return (
    <MainLayout
      left={<div className="flex flex-col items-center w-full justify-center bg-red-200">1123</div>}
      centre={
        <section className="mx-auto w-full xl:w-11/12 3xl:w-10/12 h-full grid grid-cols-1 gap-3">
          {images.map((image) => {
            const url = "https:" + (image.fields.file as AssetFile).url + "?w=700";
            return (
              <motion.div
                key={url}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.35 } }}
                exit={{ opacity: 0, transition: { duration: 2.75 } }}
                style={{ height: "700px", width: "700px" }}>
                <Image
                  src={url}
                  fill={true}
                  alt={image.fields.title as string}
                  className="object-cover top-0 left-0 block h-full w-full"
                />
              </motion.div>
            );
          })}
        </section>
      }
      right={<ProductDescription product={product} />}
    />
  );
}
