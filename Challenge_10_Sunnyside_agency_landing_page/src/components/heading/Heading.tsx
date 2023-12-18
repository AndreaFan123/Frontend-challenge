interface HeadingProps {
  title: string;
  subtitle: string;
  path?: string;
}

const Heading = ({ title, subtitle, path }: HeadingProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {path ? <a href={path}>Learn More</a> : null}
    </section>
  );
};

export default Heading;
