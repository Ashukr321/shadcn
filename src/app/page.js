import AlertDialog from "@/components/AlertDialog1";
import BtnCompoents from "@/components/BtnCompoents";

export default function Home() {
  return (
   <div>
      <main className="px-4 pt-14 sm:px-10 h-screen zIndex: 1000">
      <h1 className="scroll-m-20 mb-3 sm:mb-8 text-3xl text-center font-extrabold tracking-tight lg:text-5xl">
      Taxing Laughter: The Joke Tax Chronicles
        </h1>
      
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
