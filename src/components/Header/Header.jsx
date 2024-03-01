import React, { useEffect, useState } from 'react';
import './Header.css'
import Button from '../Button/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header({onButtonClick}) {
    const [buttonsData, setButtonsData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { default: data } = await import('../../data/buttons.json');
          setButtonsData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className='header'>
          <img className='logo' src="src/img/logo_tim.svg" alt="Логотип"/>
          <ul className='navMenu'>
              {buttonsData.map((button) => (<li key={button.key} className='navItem'><Button key={button.key} id={button.id} onClick={onButtonClick} className="navButton">{button.label}</Button></li>))}
          </ul>
      </div>
    );
  }
  
  export default Header;