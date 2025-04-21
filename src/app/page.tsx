import SearchBar from '@/widgets/SearchBar';
import Header from '../widgets/Header';
import HorizontalNavigation from '@/widgets/HorizontalNavigation';
import Accommodations from '@/widgets/Accommodations';
import Footer from '@/widgets/Footer';
import { fetchData } from '@/utils/api';

export default async function Home() {
  const data = await fetchData();
  return (
    <>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>

      <hr className="my-6  border-1 border-gray-200" />

      <main className="container mx-auto">
        <HorizontalNavigation icons={data.icons} />
        <Accommodations accommodations={data.accommodation} />
      </main>
      <footer className="bg-gray-300">
        <Footer />
      </footer>
    </>
  );
}

