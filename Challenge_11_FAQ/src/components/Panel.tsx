import Arrow from "../images/icon-arrow-down.svg";

interface Props {
  title: string;
  isActive: boolean;
  onShow: () => void;
  children: React.ReactNode;
}

export default function Panel({ title, isActive, onShow, children }: Props) {
  return (
    <>
      <section>
        <div>
          <h3>{title}</h3>
          <button onClick={onShow}>
            <img src={Arrow} alt="click to expend question" />
          </button>
        </div>
        {isActive ? (
          <article>
            <p>{children}</p>
          </article>
        ) : null}
      </section>
    </>
  );
}
