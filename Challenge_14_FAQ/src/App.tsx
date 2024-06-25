import FaqListing from './components/faq-listing';
import box from '../images/illustration-box-desktop.svg';
import womanDesktop from '../images/illustration-woman-online-desktop.svg';
import womanMobile from '../images/illustration-woman-online-mobile.svg';
import patternDesktop from '../images/bg-pattern-desktop.svg';
import patternMobile from '../images/bg-pattern-mobile.svg';

function App() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between mx-auto h-auto bg-white relative rounded-md shadow-lg">
      <div className="absolute top-[-145px] left-[25px] w-[250px] h-auto">
        <img src={womanDesktop} alt="pattern" className="w-full h-full block self-center" />
      </div>
      <FaqListing />
    </div>
  );
}

export default App;
