import React from 'react'

const NavigationsDots = ({active}) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'contact', 'work', 'skills', 's', 'contact'].map((item, index)=> (
            <a 
                href={`#${item}`} 
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { background: '#313BAC'} : {}}
           />
        )
        )}
    </div>
  )
}

export default NavigationsDots
