import { IconHeartFilled, IconStarFilled } from '@/assets/icons/icon';

interface AccommodationProps {
  children: React.ReactNode;
  local: string;
  host: string;
  date: string;
  price: number;
  rating: number;
  favorite: boolean;
}

const Accommodation = ({ children, local, host, date, price, rating, favorite }: AccommodationProps) => {
  return (
    <figure className="relative">
      <div className="absolute w-full flex justify-between items-center p-2">
        <div>{favorite && <span className="bg-white rounded-full px-4 py-1 font-semibold">Preferido dos hóspedes</span>}</div>
        <IconHeartFilled aria-label="Favorites Icon" size={30} className={`stroke-white opacity-80 ${favorite ? 'fill-red-500' : ''}`} />
      </div>
      {children}
      <figcaption className="pt-2">
        <div className="flex justify-between">
          <span className="font-semibold">{local}</span>
          <div className="flex">
            <IconStarFilled aria-label="Star Rating" size={20} />
            <span className="font-semibold">{rating}</span>
          </div>
        </div>
        <div>Anfitrião: {host}</div>
        <div>{date}</div>
        <div className="font-semibold">R$ {price}</div>
      </figcaption>
    </figure>
  );
};

export default Accommodation;
