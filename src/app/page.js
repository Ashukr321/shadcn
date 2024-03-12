import AlertDialog from "@/components/AlertDialog1";
import AspectRat from "@/components/AspectRat";
import BadegDemo from "@/components/BadegDemo";
import BtnCompoents from "@/components/BtnCompoents";
import Progress1 from "@/components/Progress1";
import Typo from "@/components/Typo";

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
       
       <Typo/>

        {/* aspect ratio */}
        <h1 className="font-bold text-xl my-6">Aspect ratios in the shadcn 🧑‍💻</h1>
        <AspectRat/>
        <section className="p-4 mt-4 flex rounded-sm bg-purple-600">
        <BadegDemo/>
        </section>
        <section className="mt-4">
          <Progress1/>
        </section>
      </main>
   </div>
  );
}
