import * as contentful from "contentful";

export interface ProductsListEntrySkeleton {
  contentTypeId: "productsList";
  fields: {
    products: contentful.EntryFieldTypes.Array<
      contentful.EntryFieldTypes.EntryLink<ProductEntrySkeleton>
    >;
  };
}

export interface IProductsList {
  products: ProductEntrySkeleton[];
  displayProducts: contentful.Entry<ProductEntrySkeleton>[] | null;
}

export interface ProductEntrySkeleton {
  contentTypeId: "product";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    description: contentful.EntryFieldTypes.Text;
    price: contentful.EntryFieldTypes.Text;
    showPrice: contentful.EntryFieldTypes.Boolean;
    skuCode: contentful.EntryFieldTypes.Text;
    coverImage: contentful.EntryFieldTypes.AssetLink;
    images: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.AssetLink>;
    category: contentful.EntryFieldTypes.EntryLink<ProductCategoryEntrySkeleton>;
    designer: contentful.EntryFieldTypes.EntryLink<DesignerEntrySkeleton>;
  };
}

export interface IProduct {
  title: string;
  description: string;
  price: string;
  showPrice: boolean;
  skuCode: string;
  coverImage: contentful.Asset;
  images: contentful.Asset[];
  category: IProductCategory;
  designer: IDesigner;
}

export interface ProductCategoryEntrySkeleton {
  contentTypeId: "productCategory";
  fields: {
    title: contentful.EntryFieldTypes.Text;
  };
}

export interface IProductCategory {
  title: string;
}

export interface DesignerEntrySkeleton {
  contentTypeId: "designer";
  fields: {
    title: contentful.EntryFieldTypes.Text;
  };
}
export interface IDesigner {
  title: string;
}
