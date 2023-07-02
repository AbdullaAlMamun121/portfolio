import React, { useState } from 'react';
import img1 from '../assets/portfolio/chef-1.png';
import img2 from '../assets/portfolio/chef-2.png';
import img3 from '../assets/portfolio/chef-3.png';
import img4 from '../assets/portfolio/school-1.png';
import img5 from '../assets/portfolio/school-2.png';
import img6 from '../assets/portfolio/school-3.png';
import img7 from '../assets/portfolio/school-4.png';
import img8 from '../assets/portfolio/school-5.png';
import img9 from '../assets/portfolio/toy-1.png';
import img10 from '../assets/portfolio/toy-2.png';
import img11 from '../assets/portfolio/toy-3.png';
import img12 from '../assets/portfolio/toy-4.png';
import img13 from '../assets/portfolio/toy-5.png';
import img14 from '../assets/portfolio/toy-6.png';

const ImageCarousel = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='relative'>
      <div className='carousel'>
        {images.map((image, index) => (
          <img
            key={index}
            className={`rounded-md duration-200 hover:scale-105 ${index === activeImageIndex ? '' : 'hidden'}`}
            src={image}
            alt='projects'
          />
        ))}
      </div>
      <div className='flex justify-center items-center absolute bottom-0 left-0 w-full'>
        <button
          className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-transparent border border-white text-black rounded-md'
          style={{ backgroundColor: 'transparent' }}
          onClick={handlePrevClick}
        >
          Previous
        </button>

        <button
          className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-transparent border border-white text-black rounded-md'
          style={{ backgroundColor: 'transparent' }}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: [img1, img2, img3],
      demo: 'https://chef-recipe-assignment.web.app/',
      code: 'https://github.com/AbdullaAlMamun121/chef-recipe-client',
      summary: 'Details of the projects'
    },
    {
      id: 2,
      src: [img4, img5, img6, img7, img8],
      demo: 'https://languagelearning-5d814.web.app/',
      code: 'https://github.com/AbdullaAlMamun121/foreign-language-learning-client',
      summary: 'Details of the projects'
    },
    {
      id: 3,
      src: [img9, img10, img11, img12, img13, img14],
      demo: 'https://toy-assignment-11.web.app/',
      code: 'https://github.com/AbdullaAlMamun121/toyWorld-client',
      summary: 'Details of the projects'
    },
  ];

  const [activeProjectSummary, setActiveProjectSummary] = useState(Array(portfolios.length).fill(false));

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, '_blank');
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, '_blank');
  };

  const handleSummaryClick = (index) => {
    setActiveProjectSummary((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <div name='portfolio' className='bg-gradient-to-b from-gray-900 to-gray-500 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8 mt-40 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>View a few of my most recent efforts here.</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({ id, src, demo, code, summary }, index) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <ImageCarousel images={src} />
                <div className='flex justify-center items-center'>
                  <button
                    className='w-1/2 px-2 py-3 mt-4 duration-200 hover:scale-105'
                    onClick={() => handleDemoClick(demo)}
                  >
                    Live site
                  </button>
                  <button
                    className='w-1/2 px-2 py-3 mt-4 duration-200 hover:scale-105'
                    onClick={() => handleCodeClick(code)}
                  >
                    Code
                  </button>
                  <button
                    className='w-1/2 px-2 py-3 mt-4 duration-200 hover:scale-105'
                    onClick={() => handleSummaryClick(index)}
                  >
                    Summary
                  </button>
                </div>
                {activeProjectSummary[index] && (
                  <div className='bg-white text-black p-4 mt-4'>
                    <p>{summary}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
