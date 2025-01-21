import React, { useEffect, useState } from 'react'
import './Portfolio.scss';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';
import workData from '../../index';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [portfolios, setPortfolios] = useState([]);
  const [filterPortfolio, setFilterPortfolio] = useState([]);
  useEffect(() => {
      setPortfolios(workData)
      setFilterPortfolio(workData);
    }, []);
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    
    setTimeout(() => {
      if (item === 'All') {
        setFilterPortfolio(portfolios)
      } else {
        setFilterPortfolio(portfolios.filter((portfolio) => portfolio.tags.includes(item)))
      }
    }, 500);
  }
  return (
    <>
      <h2 className='head-text'>
      Our <span> services </span> Section 
     </h2>
     <div className='app__works-filter'>
      {['labels & packaging','Posters & flyers','Billboards & roll-up','vehicle branding','promo booths','Shelves','logo','T-shirt','video animation', 'All'].map((item, index) => (
        <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__works-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >{item}</div>
      ))}
     </div>
     <motion.div 
     className='app__work-portfolio'>
      {filterPortfolio.map((portfolio, index) => (
        <div className='app__work-item app__flex'
        key={index}>
          <div className='app__work-img app__flex'>
          {portfolio.type === "image" ? (
              <img src={portfolio.imgUrl} alt={portfolio.title} />
            ) : (
              <video controls>
                <source src={portfolio.imgUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className='app__work-content app__flex'>
          <h4 className='bold-text'>{portfolio.title}</h4>
          <div className='app__work-tag app__flex'>
            <p className='p-text'>{portfolio.tags[0]}</p>
            </div>
         </div>
        </div>
      ))}
     </motion.div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(Portfolio, 'app__works'),
  'portfolio', "app__whitebg");


