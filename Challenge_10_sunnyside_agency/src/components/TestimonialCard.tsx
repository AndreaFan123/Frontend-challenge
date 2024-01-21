import { Testimonial } from "./TestimonialListing";

export const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="testimonial_card">
      <div>
        <img src={item.avatarSrc} alt={item.alt} />
      </div>
      <p>{item.description}</p>
      <div>
        <span>{item.name}</span>
        <span>{item.title}</span>
      </div>
    </div>
  );
};
