import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <section className = "bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
          <div className ="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
           <div className ="flex flex-col justify-center gap-8"> 
            <h1 className ="h1-bold">
              Host, connect , celebrate: Your Events, Our Platform!
            </h1>
            <p className = "p-regular-20 md:p-10">
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community
            </p>
            <Button size = "lg" asChild className = "button w-full sm:w-fit">
              <Link href = "#events">Explore Now</Link>
            </Button>
           </div>
           <Image src = "/assets/images/hero.png" alt = "Hero" width = {1000} height = {1000}/>
          </div>
        </section>
    </>
  );
}
