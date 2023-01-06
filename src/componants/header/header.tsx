import React, {  useEffect , useState} from 'react';
import './style.css' ;


const Header = () => {

    const [hamburgerisActive, setHamburgerisActive] = useState(false);

  const menuClick = ()=>{
  setHamburgerisActive(!hamburgerisActive);
 
   }
 
  return (
    <header className='header'>

        <nav className="container">
        <div className='logo'>
          <a href='#' className="logo-text">squadra</a>
        </div>
        

        <div className="items" id={hamburgerisActive ? `navActive` : ` `}>
        <ul>
            <li><a href="#home" className='item' onClick={menuClick}>Home</a></li>
            <li><a href="#latest" className='item' onClick={menuClick}>Latest</a></li>
            <li><a href="#team" className='item' onClick={menuClick}>Team</a></li>
            <li><a href="#contactus" className='item' onClick={menuClick}>Contact Us</a></li>
        </ul>
        </div>

      <div className="hamburger " id={hamburgerisActive ? `hamActive` : ` `}  onClick={menuClick}> 
      <span className="bar" ></span>
      <span className="bar"></span>
      <span className="bar"></span>
    
    </div>
        </nav>
       
      </header>
  )
}

export default Header