import React, { useState } from 'react';

import Panel from './panel';
import faqs from '../constants/faq';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log('Active index', activeIndex);

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold ">FAQ</h1>
      {faqs.map((faq, index) => (
        <Panel
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isActive={activeIndex === index}
          onShow={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
