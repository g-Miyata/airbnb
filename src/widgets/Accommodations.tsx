import Accommodation from '@/components/Accommodation';
import { Accommodation as AccommodationData } from '@/types/AirbnbData';
import Image from 'next/image';
import Link from 'next/link';

interface AccommodationsProps {
  accommodations: AccommodationData[];
}

const Accommodations = ({ accommodations }: AccommodationsProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 gap-4">
      {accommodations.map((accommodation, index) => (
        <div key={index}>
          <Link href={accommodation.slug}>
            <Accommodation local={accommodation.location.description} host={accommodation.host} date={accommodation.date} price={accommodation.price} rating={accommodation.rating} favorite={accommodation.hasBadge}>
              <Image src={accommodation.photos[0].source} alt={accommodation.photos[0].description} width={300} height={300} className="w-full aspect-square object-cover rounded-xl" />
            </Accommodation>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Accommodations;
