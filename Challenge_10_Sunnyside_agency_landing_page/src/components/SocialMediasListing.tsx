interface SocialMediasListingProps {
  imageSrc: string;
  alt: string;
  path: string;
}

const SocialMediasListing = ({
  imageSrc,
  alt,
  path,
}: SocialMediasListingProps) => {
  return (
    <div>
      <a href={path}>
        <img src={imageSrc} alt={alt} />
      </a>
    </div>
  );
};

export default SocialMediasListing;
