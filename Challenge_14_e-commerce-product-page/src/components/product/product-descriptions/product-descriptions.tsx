type ProductDescriptionsProps = {
  sneakerCompany: string;
  title: string;
  description: string;
};

export default function ProductDescriptions({
  sneakerCompany,
  title,
  description,
}: ProductDescriptionsProps) {
  return (
    <>
      <span className="block tracking-[0.08em] text-dark-grayish-blue font-bold uppercase text-sm">
        {sneakerCompany}
      </span>
      <h1 className="heading">{title}</h1>
      <p className="text-dark-grayish-blue font-normal text-base mb-4">
        {description}
      </p>
    </>
  );
}
