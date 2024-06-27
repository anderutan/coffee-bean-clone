import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    visible && (
      <button
        className='fixed bottom-10 right-5 h-12 w-12 bg-primary flex justify-center items-center rounded-lg'
        onClick={scrollToTop}
      >
        <ChevronUp className='h-8 w-8 text-white' />
      </button>
    )
  );
};

export default ScrollToTopButton;
