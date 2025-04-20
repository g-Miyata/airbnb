import SearchBar from '@/widgets/SearchBar';
import Header from '../widgets/Header';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <SearchBar />
      </div>

      <hr className="mt-5" />

      <div className="border-green-600 mt-10 border-2">Área conteúdos</div>
      <div className="border-purple-600 border-2">Rodapé</div>
    </>
  );
}
