import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Entry } from "contentful";
import { DesignerEntrySkeleton, ProductEntrySkeleton } from "@/core/types/types";
import Accordion from "@/components/accordion/accordion";

interface ProductInformationProps {
  product: Entry<ProductEntrySkeleton>;
  // addItemToCart: (item: Entry<ProductEntrySkeleton>, quantity: number) => Promise<boolean>;
}

export default function ProductInformation({ product }: ProductInformationProps) {
  const title = product.fields?.title as string;
  const description = product.fields?.description as string;
  const price = product.fields?.price as string;
  const designerName =
    ((product.fields?.designer as Entry<DesignerEntrySkeleton>).fields?.title as string) ?? "";

  const [isLoading, updateIsLoading] = useState(false);
  const [addToCartFailure, updateAddToCartFailure] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
      transition={{ opacity: { duration: 0.75 } }}
      className="h-full xl:mr-20 flex flex-col items-start pt-3 xl:pt-0">
      <div className="w-full xl:w-full 2xl:w-10/12 3xl:w-9/12 mx-auto xl:max-h-screen xl:pb-96 xl:overflow-y-scroll hide-scrollbar relative">
        <h1 className="text-xl xl:text-lg 2xl:text-xl font-suisse font-semibold tracking-wider">
          {title}
        </h1>
        <h2 className="text-xl xl:text-lg 2xl:text-xl font-suisse font-semibold tracking-wider">
          {designerName.toLowerCase() === "other" ? "" : "by " + designerName.toUpperCase()}
        </h2>
        {product.fields?.showPrice && (
          <p className="pt-2 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
            {price.includes("$") ? price : "$" + price}
          </p>
        )}
        {product.fields?.showPrice ? (
          <button
            className={`mt-4 py-2 w-full font-suisse text-md xl:text-sm 2xl:text-md tracking-wide text-white border-2  ${
              addToCartFailure
                ? "bg-gray-300 border-gray-300 cursor-not-allowed"
                : "hover:opacity-80 bg-black border-gray-800"
            }`}
            onClick={async () => {
              // if (!addToCartFailure) {
              //   updateIsLoading(true);
              //   const addToCartRes = await addItemToCart(product, 1);
              //   if (addToCartRes === false) {
              //     updateAddToCartFailure(true);
              //   }
              //   updateIsLoading(false);
              // }
            }}>
            {addToCartFailure
              ? "CURRENTLY UNAVAILABLE"
              : isLoading
              ? "ADDING TO CART"
              : "ADD TO CART"}
          </button>
        ) : (
          <div className="mt-2"></div>
        )}
        <a
          className={`inline-block mt-2 py-2 w-full text-center hover:opacity-80 font-suisse text-md xl:text-sm 2xl:text-md tracking-wide border-2 border-gray-800 ${
            addToCartFailure ? "bg-black text-white" : "bg-white text-black"
          }`}
          href={`mailto:hello@seagardesign.com?subject=Enquiry: ${title}`}>
          ENQUIRE ABOUT THIS PRODUCT
        </a>
        <hr className="mt-6 border-black bg-black" />
        <p className="mt-4 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
          {description}
        </p>
        <hr className="mt-6 border-black bg-black" />
        <Accordion
          title="Delivery"
          body={
            <Fragment>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                Click and collect and same-day delivery are available on request in Christchurch.
                Please{" "}
                <a href="mailto:hello@seagardesign.com" className="underline">
                  contact us
                </a>{" "}
                for more information.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                New Zealand - $10
              </p>
              <p className="leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                Australia - $40
              </p>
              <p className="leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                Rest of the World - $50
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                We ship homeware items locally and internationally. When your order is shipped, we
                will email you confirmation and your tracking number.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                Within New Zealand delivery timeframes are usually 1-3 days, however this does
                extend during peak times and lockdowns. If you need something quickly we can usually
                help with an express delivery option. Please reach out at{" "}
                <a href="mailto:hello@seagardesign.com" className="border-b border-gray-200">
                  hello@seagardesign.com
                </a>{" "}
                and we will be happy to discuss these with you.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                Our larger or fragile items will automatically incur additional shipping charges at
                the checkout. We reserve the right to contact you if your address requires further
                freight charges to be paid.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                We ship furniture, art and lighting orders nationwide within New Zealand. These are
                either shipped with a selected courier or fragile freight carrier, with the pricing
                dependent on the location, size and weight of the item/s. The total freight will be
                calculated at checkout for your order.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                Delivery time will vary depending on the location and size of the product, ranging
                from 1-2 days to 1-2 weeks. In stock items will be dispatched within two working
                days. For made to order or import products, we will contact you near completion or
                arrival to arrange delivery.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                For items with our Fragile Freight carriers, Christchurch deliveries include
                placement inside your home and outside of Christchurch is a door to door service.
              </p>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                For rural locations or difficult access we reserve the right to charge extra for
                freight. Please contact us if you would like a quote or have any questions.
              </p>
            </Fragment>
          }
        />
        <Accordion
          title="Returns"
          body={
            <Fragment>
              <p className="mt-3 leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
                In stock product can be returned within 14 days, for a credit or exchange. Please
                choose carefully as we do not refund for change of mind. Products must be returned
                unused, with all original packaging and we reserve the right to refuse a return if
                the product does not meet our requirements. Return shipping costs are the
                responsibility of the purchaser, unless the products received were damaged/faulty.
              </p>
            </Fragment>
          }
        />
      </div>
    </motion.section>
  );
}
