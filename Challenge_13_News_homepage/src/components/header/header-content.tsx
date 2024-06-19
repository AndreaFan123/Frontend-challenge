type HeaderContentProps = {
  title?: string;
  description?: string;
  cta?: string;
};

export default function HeaderContent({
  title,
  description,
  cta,
}: HeaderContentProps) {
  return (
    <div className="headline_content-container">
      <h1>{title}</h1>
      <div className="headline_content-description">
        <p>{description}</p>
        <button>{cta}</button>
      </div>
    </div>
  );
}
