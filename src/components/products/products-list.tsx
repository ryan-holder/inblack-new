// import { Entry } from "contentful";
// import { useEffect } from "react";

// const Products: React.FC<IProducts> = ({ isLoading, getDataError, products, displayProducts }) => {
//   useEffect(() => window.scrollTo(0, 0));

//   return (
//     <div className="w-full h-full flex flex-col items-center pb-20 xl:pb-0">
//       {isLoading || (products === null && getDataError === false) ? (
//         <div className="w-full xl:w-11/12 3xl:w-10/12 h-full">
//           <DummyList />
//         </div>
//       ) : (
//         <div className="w-full xl:w-11/12 3xl:w-10/12 grid grid-cols-2 gap-2 sm:gap-3">
//           {displayProducts &&
//             Array.from(displayProducts)
//               .reverse()
//               .sort((x) => (x.fields?.showPrice ? -1 : 1))
//               .map((item: Entry<IProduct>, index: number) => (
//                 <LazyImage
//                   key={item.fields?.title + index + displayProducts.length}
//                   item={item}
//                   onClick={() => {}}
//                 />
//               ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;
