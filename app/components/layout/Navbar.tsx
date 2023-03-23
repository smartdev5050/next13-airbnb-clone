'use client';

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Categories from "./Categories";
import Container from "./Container";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Image
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer" 
            src="/images/logo.png" 
            height="100" 
            width="100" 
            alt="Logo" 
          />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
    {isMainPage && <Categories />}
  </div>
  );
}


export default Navbar;