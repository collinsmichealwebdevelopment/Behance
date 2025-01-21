import React, { useState, useEffect}from 'react'
import './Faq.scss';
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import workData from '../..';

const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => (
      setCurrentIndex(index)
    )

    useEffect(() => {
           setFaqs(workData)
          }, []);

         // const faq = faqs[currentIndex];
        
  return (
    <>
    {faqs.length && (
      <>
      <div className='app__faq-item app__flex'>
      <h2 className='head-text'>
      F<span>AQ</span>S 
     </h2>
        <div className='app__faq-content'></div>
        <p className='p-text'>{faqs[currentIndex].feedback}</p>
        <div>
        <h4 className="bold-text">{faqs[currentIndex].name}</h4>
        <h5 className="p-text">{faqs[currentIndex].company}</h5>
        </div>
      </div>

      <div className='app__faq-btns app__flex'>
        <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? faqs.length - 1 : currentIndex - 1)}>
          <HiChevronLeft />
        </div>
        <div className='app__flex' onClick={() => handleClick(currentIndex ===  faqs.length - 1 ?  0 : currentIndex + 1)}>
          <HiChevronRight />
        </div>
      </div>
      </>
    )}

    <div className='app__faq-brands app__flex'>
        <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.5, type: 'tween'}}
        >
          <img src="pet-dog-clothing-clothes-logo.jpg" alt="logo"/>
        </motion.div>

        <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.5, type: 'tween'}}
        >
          <img src="Logo_prikazi5.jpg" alt="logo"/>
        </motion.div>
        <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.5, type: 'tween'}}
        >
          <img src="cocktail-logo-cocktail-bar_1.jpg" alt="logo"/>
        </motion.div>
    </div>

    </>
  )
}

export default AppWrap( 
  MotionWrap(Faq, 'app__faq'),
  'faqs', "app__primarybg");

