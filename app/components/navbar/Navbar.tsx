import getCurrentUser from "@/app/actions/getCurrentUser";

import Categories from "./Categories";
import ClientOnly from "../ClientOnly";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

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
          <Logo />
          <ClientOnly>
            <Search />
            <UserMenu currentUser={currentUser} />
          </ClientOnly>
        </div>
      </Container>
    </div>
    <ClientOnly>
      <Categories />
    </ClientOnly>
  </div>
  );
}


export default Navbar;