import { createClient, EntryCollection } from "contentful";
import { ProductCategoryEntrySkeleton, ProductsListEntrySkeleton } from "@/core/types/types";

const contentfulClient = createClient({
  environment: "master",
  space: "ghjcm95y2t8m",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL ?? "",
});

async function getProducts(): Promise<
  EntryCollection<ProductsListEntrySkeleton, undefined, string>
> {
  try {
    const response = await contentfulClient.getEntries<ProductsListEntrySkeleton>({
      content_type: "productsList",
    });
    return response;
  } catch (error) {
    console.error("Unable to fetch productsList", error);
    throw error;
  }
}

async function getProductCategories(): Promise<
  EntryCollection<ProductCategoryEntrySkeleton, undefined, string>
> {
  try {
    const response = await contentfulClient.getEntries<ProductCategoryEntrySkeleton>({
      content_type: "productCategory",
    });
    return response;
  } catch (error) {
    console.error("Unable to fetch productCategory");
    throw error;
  }
}

export const apiService = {
  getProducts,
  getProductCategories,
};
