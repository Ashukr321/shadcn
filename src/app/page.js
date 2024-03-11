import AlertDialog from "@/components/AlertDialog1";
import BtnCompoents from "@/components/BtnCompoents";

export default function Home() {
  return (
   <div>
      <main className="px-4 pt-14 sm:px-10 h-screen zIndex: 1000">
       <section className="p-4 rounded-sm bg-red-300">
         <BtnCompoents/>
       </section>
       <section className="mt-4 flex justify-center bg-orange-300 p-4 rounded-sm">
         <AlertDialog/>
       </section>

       
      </main>
   </div>
  );
}
