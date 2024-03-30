import { CardValue } from "../../components/CardValue";

export const Values = () => {
  return (
    <section className="min-h-[316px] w-full flex flex-col sm:flex-row gap-5 items-center px-8 sm:px-40 py-12 bg-white">
     <div className="w-full flex gap-2 sm:gap-5 " >
     <CardValue />
      <CardValue />
     </div>
      
      <div className="w-full flex gap-2 sm:gap-5">
      <CardValue />
      <CardValue />
      </div>
      
    </section>
  );
};
