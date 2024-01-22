import { Testimonial } from "./TestimonialListing";

export const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="testimonial_card">
      <div className="testimonial_card-img">
        <img src={item.avatarSrc} alt={item.alt} />
      </div>
      <div>
        <p>{item.description}</p>
        <p>{item.emphasizedText}</p>
      </div>
      <div className="testimonial_card-titles">
        <span className="testimonial_card-name">{item.name}</span>
        <span className="testimonial_card-title">{item.title}</span>
      </div>
    </div>
  );
};
