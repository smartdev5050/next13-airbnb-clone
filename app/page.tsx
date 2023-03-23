import Container from "@/app/common/components/layout/Container";
import ListingCard from "@/app/common/components/listings/ListingCard";
import EmptyState from "@/app/common/components/layout/EmptyState";

import getListings, { IListingsParams } from "@/app/common/actions/getListings";
import getCurrentUser from "@/app/common/actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <Container>
      <div 
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}

export default Home;
