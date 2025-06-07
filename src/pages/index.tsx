import MainLayout from "@/layout/main-layout";

export default function Home() {
  return (
    <MainLayout
      left={
        <div className="flex flex-col font-suisse items-center w-full justify-center bg-red-200">
          1asdasd asd asd asd
        </div>
      }
      centre={
        <div className="flex flex-col font-suisse items-center w-full justify-center bg-blue-200">
          asdasdasd
        </div>
      }
      right={<div className="flex flex-col items-center w-full justify-center bg-green-200">3</div>}
    />
  );
}
