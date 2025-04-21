'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import IconButton from '@/components/IconButton';
import { IconAdjustmentsHorizontal } from '@/assets/icons/icon';
import Link from 'next/link';
import Image from 'next/image';
import { Photo } from '@/types/AirbnbData';

interface HorizontalNavigationProps {
  icons: Photo[];
}

const HorizontalNavigation = ({ icons }: HorizontalNavigationProps) => {
  return (
    <div className="flex items-center gap-2">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          764: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
      >
        {icons.map((icons, index) => (
          <SwiperSlide key={index}>
            <Link href={icons.url} className="flex flex-col items-center hover:text-red-500">
              <Image src={icons.source} alt={icons.description} width={24} height={24} />
              <span className="text-sm">{icons.description}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton icon={<IconAdjustmentsHorizontal size={20} aria-label="User Icon" />}>Filter</IconButton>
    </div>
  );
};

export default HorizontalNavigation;
