import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import SearchBar from '@/widgets/SearchBar';

export default async function AccommodationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>

      <main className="container mx-auto">
        <h1 className="text-3xl pt-6">Rancho da Lua, tranquilo e rodeado por montanhas</h1>
      </main>

      <footer className="bg-gray-300">
        <Footer />
      </footer>
    </div>
  );
}
