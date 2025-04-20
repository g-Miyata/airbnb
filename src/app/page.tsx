import SearchBar from '@/widgets/SearchBar';
import Header from '../widgets/Header';
import HorizontalNavigation from '@/widgets/HorizontalNavigation';

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
      </main>
      <footer className="container mx-auto">Rodapé</footer>
    </>
  );
}
