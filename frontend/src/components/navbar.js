import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 bg-white shadow-md">
      <nav className="max-w-[1440px] flex justify-between items-center sm:px-4 px-6 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/header-logo.png" alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <Link href="/">
            <button className="text-black">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;