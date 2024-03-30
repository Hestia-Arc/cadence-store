import { CardValue } from "../../components/CardValue";

export const Values = () => {
  return (
    <section className="min-h-[316px] w-full flex xs:flex-col gap-5 items-center px-40 xs:px-8 py-12 bg-white">
     <div className="xs:w-full flex gap-5 xs:gap-2" >
     <CardValue />
      <CardValue />
     </div>
      
      <div className="xs:w-full flex gap-5 xs:gap-2">
      <CardValue />
      <CardValue />
      </div>
      
    </section>
  );
};
