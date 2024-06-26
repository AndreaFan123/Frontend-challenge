import FaqListing from './components/faq-listing';
import box from '../images/illustration-box-desktop.svg';
import womanDesktop from '../images/illustration-woman-online-desktop.svg';
import womanMobile from '../images/illustration-woman-online-mobile.svg';
import patternDesktop from '../images/bg-pattern-desktop.svg';
import patternMobile from '../images/bg-pattern-mobile.svg';

function App() {
  return (
    <div className="w-[95%] lg:w-full flex h-auto flex-col justify-between mx-auto bg-white relative rounded-3xl shadow-lg">
      <div className="absolute top-[-115px] left-1/2 -translate-x-1/2 w-[250px] h-auto">
        <picture>
          <source srcSet={womanDesktop} media="(min-width: 1024px)" />
          <img
            src={womanMobile}
            alt="woman stands in front of a screen"
            className="w-full h-full block self-center z-20"
          />
        </picture>
        <picture>
          <source srcSet={patternDesktop} media="(min-width: 1024px)" />
          <img src={patternMobile} alt="pattern" className="absolute top-[115px]" />
        </picture>
      </div>
      <FaqListing />
    </div>
  );
}

export default App;
