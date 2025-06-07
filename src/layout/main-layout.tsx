import { ReactNode, useState } from "react";
import PanelLayout from "./panel-layout";
import CentreLayout from "./centre-layout";
import Title from "@/components/title/title";

interface MainLayoutProps {
  left: ReactNode;
  centre: ReactNode;
  right: ReactNode;
}

const INITIAL_SELECTED_VIEW = "SHOP";
const INITIAL_SELECTED_CATEGORY = "TYPE";
const INITIAL_SELECTED_SUBCATEGORY = "ALL";

export default function MainLayout({ left, centre, right }: MainLayoutProps) {
  const [expandCart, updateExpandCart] = useState(false);
  const [showMobileSubCategories, updateShowMobileSubCategories] = useState(false);
  const [selectedSubCategory, updateSelectedSubCategory] = useState(INITIAL_SELECTED_SUBCATEGORY);

  return (
    <div
      className={`pb-0 ${
        showMobileSubCategories || expandCart ? "max-h-screen w-full fixed" : "h-full"
      }`}>
      <Title
        showCart={false} //checkout && checkout.lineItems?.length > 0 ? true : false
        updateExpandCart={updateExpandCart}
        selectedSubCategory={selectedSubCategory}
        updateShowMobileSubCategories={updateShowMobileSubCategories}
      />
      <div className="min-h-screen h-full w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-full mx-auto xl:mx-0 grid xl:grid-cols-10">
        <PanelLayout>{left}</PanelLayout>
        <CentreLayout>{centre}</CentreLayout>
        <PanelLayout>{right}</PanelLayout>
      </div>
    </div>
  );
}
