import emily from "../assets/images/image-emily.jpg";
import thomas from "../assets/images/image-thomas.jpg";
import jennie from "../assets/images/image-jennie.jpg";
import { TestimonialCard } from "./TestimonialCard";
import "../index.css";

export interface Testimonial {
  id: number;
  avatarSrc: string;
  alt: string;
  description: string;
  emphasizedText?: string;
  name: string;
  title: string;
}

const Testimonials: Testimonial[] = [
  {
    id: 1,
    avatarSrc: emily,
    alt: "Emily R's avatar",
    description:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    title: "Marketing Director",
  },
  {
    id: 2,
    avatarSrc: thomas,
    alt: "Thomas S's avatar",
    description:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    title: "Chief Operating Officer",
  },
  {
    id: 3,
    avatarSrc: jennie,
    alt: "Jennie F's avatar",
    description:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside.",
    emphasizedText: "Highly recommended",
    name: "Jennie F.",
    title: "Marketing Director",
  },
];

export default function TestimonialListing() {
  return (
    <section className="testimonial_container">
      <h3>Client testimonials</h3>
      <div>
        {Testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
