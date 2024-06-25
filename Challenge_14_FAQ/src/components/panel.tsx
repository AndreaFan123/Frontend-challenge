import arrow from '../../images/icon-arrow-down.svg';

type PanelTypes = {
  question: string;
  answer: string;
  isActive: boolean;
  onShow: () => void;
};

function Panel({ question, answer, isActive, onShow }: PanelTypes) {
  console.log(isActive);
  return (
    <div>
      <div role="button" className="flex items-center w-full justify-between" onClick={onShow}>
        <h3 className={`${isActive === true ? 'font-bold text-black' : ' text-gray-500'}`}>{question}</h3>
        <button>
          <img
            src={arrow}
            alt="Click to open or close faq"
            className={`${isActive === true ? ' -rotate-180 ' : ' rotate-0'} transform duration-75 ease-in-out`}
          />
        </button>
      </div>
      {isActive ? <p className="text-gray-500">{answer}</p> : null}
    </div>
  );
}

export default Panel;
