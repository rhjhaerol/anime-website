import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="max-w-2xl mx-auto mt-4">
      <Header title={'My Collection'}/>
      <div className="px-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Link href={""} className="relative border-2 border-color-accent">
          <Image
            src={""}
            alt="..."
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute flex items-center justify-center bottom-0 bg-color-accent w-full h-16">
            <h2 className="text-lg font-semibold">Judul anime</h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
