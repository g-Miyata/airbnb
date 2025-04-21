import SearchBar from '@/widgets/SearchBar';
import Header from '../widgets/Header';
import HorizontalNavigation from '@/widgets/HorizontalNavigation';
import Accommodations from '@/widgets/Accommodations';

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>

      <hr className="my-3" />

      <main className="container mx-auto">
        <HorizontalNavigation />
        <Accommodations />
      </main>
      <footer className="container mx-auto">Rodapé</footer>
    </>
  );
}
