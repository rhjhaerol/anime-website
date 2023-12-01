import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex flex-col items-center p-4">
      <h3 className="py-4 text-xl">Welcome, {user?.name} </h3>
      <Image src={user?.image} width={250} height={250} />
      <div className="py-4 flex flex-wrap gap-4 font-semibold">
        <Link
          href={"/users/dashboard/collection"}
          className="bg-color-accent text-color-dark px-4 py-2"
        >
          My Collection
        </Link>
        <Link
          href={"/users/dashboard/comment"}
          className="bg-color-accent text-color-dark px-4 py-2"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
