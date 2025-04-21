import { IconStarFilled } from '@/assets/icons/icon';
import { Testimonials } from '@/types/AirbnbData';
import Image from 'next/image';

interface AccommodationsTestimonialsProps {
  testimonials: Testimonials[];
}
const AccommodationTestimonials = ({ testimonials }: AccommodationsTestimonialsProps) => {
  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">Depoimentos</h2>
      <div className="flex gap-2 items-center">
        <IconStarFilled className="size-4" />
        <span>4.9 (400+ avaliações)</span>
      </div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex gap-2 py-4 items-start">
          <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="aspect-square object-cover rounded-full" />
          <div>
            <span className="text-md font-semibold">{testimonial.name}</span>
            <p>{testimonial.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccommodationTestimonials;
