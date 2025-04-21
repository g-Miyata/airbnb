import { fetchDataBySlug } from '@/utils/api';
import AccommodationDetails from '@/widgets/AccommodationDetails';
import AccommodationTestimonials from '@/widgets/AccommodationTestimonials';
import Footer from '@/widgets/Footer';
import Gallery from '@/widgets/Gallery';
import Header from '@/widgets/Header';
import SearchBar from '@/widgets/SearchBar';

export default async function AccommodationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const accommodation = await fetchDataBySlug(slug);
  if (!accommodation) {
    return <div>Não encontrado ou indisponível</div>;
  }

  return (
    <div>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>

      <main className="container mx-auto">
        <h1 className="text-3xl font-semibold pt-6 pb-2">{accommodation.location.description}</h1>
        <Gallery photos={accommodation.photos} />
        <div className="flex flex-col md:flex-row">
          <AccommodationDetails accommodation={accommodation} />
          <AccommodationTestimonials testimonials={accommodation.testimonials} />
        </div>
      </main>

      <footer className="bg-gray-300">
        <Footer />
      </footer>
    </div>
  );
}
