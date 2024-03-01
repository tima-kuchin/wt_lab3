import React, {useState, useEffect} from 'react';
import './Sidebar.css'

import Button from '../Button/Button';

function Sidebar({ onButtonClick }) {
  const [buttonsData, setButtonsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { default: data } = await import('../../data/menuElements.json');
        setButtonsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='sidebar'>
        <ul className='navSidebarMenu'>
            {buttonsData.map((button) => (<li key={button.key} className='navSidebarItem'><Button key={button.key} id={button.id} onClick={onButtonClick} className="navSidebarButton">{button.label}</Button></li>))}
        </ul>
    </div>
  );
  }
  
  export default Sidebar;