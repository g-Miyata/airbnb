import Image from 'next/image';

type Photo = {
  id: string;
  source: string;
  description: string;
};

interface GalleryProps {
  photos: Photo[];
}

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {photos.slice(0, 9).map((photo, index) => {
        const isLargeImage = index === 0 ? 'col-span-2 row-span-2' : '';
        return (
          <div key={index} className={`${isLargeImage}`}>
            <Image src={photo.source} alt={photo.description} width={1280} height={720} className="w-full aspect-square object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
