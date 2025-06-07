import MainLayout from "@/layout/main-layout";

export default function Store() {
  return (
    <MainLayout
      left={<div className="flex flex-col items-center w-full justify-center bg-red-200">1123</div>}
      centre={<div className="flex flex-col items-center w-full justify-center bg-red-200">2</div>}
      right={<div className="flex flex-col items-center w-full justify-center bg-red-200">3</div>}
    />
  );
}
