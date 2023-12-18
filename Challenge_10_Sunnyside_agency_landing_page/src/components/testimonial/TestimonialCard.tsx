interface TestimonialCardProps {
  imageSrc: string;
  alt: string;
  content: string;
  title: string;
  jobTitle: string;
}

const TestimonialCard = ({
  imageSrc,
  alt,
  content,
  title,
  jobTitle,
}: TestimonialCardProps) => {
  return (
    <section>
      <div>
        <img src={imageSrc} alt={alt} />
      </div>
      <p>{content}</p>
      <div>
        <h4>{title}</h4>
        <span>{jobTitle}</span>
      </div>
    </section>
  );
};

export default TestimonialCard;
