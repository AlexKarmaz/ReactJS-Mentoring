import React from 'react';
import CloseButton from '../CloseButton';
import './Menu.css'

const Menu = ({ menuItems, onClose }) => (
    <>
        {onClose && <CloseButton onClick={onClose} size='small' />}
        <ul className='menu'>
            {menuItems.map((item) => (
                <li className='menu-item' onClick={item.onClick} key={item.id}>
                    {item.title}
                </li>
            ))}
        </ul>
    </>
);

export default Menu;
