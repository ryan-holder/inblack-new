/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductEntrySkeleton, ProductsListEntrySkeleton } from "@/core/types/types";
import { Entry } from "contentful";

function isProductsListEntrySkeleton(obj: unknown): obj is ProductsListEntrySkeleton {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as any).fields === "object" &&
    Array.isArray((obj as any).fields.products)
  );
}

export function isProductEntrySkeltonArray(
  entries: unknown
): entries is Entry<ProductEntrySkeleton>[] {
  return (
    Array.isArray(entries) &&
    entries.every(
      (entry) =>
        typeof entry === "object" &&
        entry !== null &&
        "sys" in entry &&
        "fields" in entry &&
        (entry as Entry<ProductEntrySkeleton>).sys.contentType?.sys.id === "product"
    )
  );
}

export const typeGuards = {
  isProductsListEntrySkeleton,
  isProductEntrySkeltonArray,
};
