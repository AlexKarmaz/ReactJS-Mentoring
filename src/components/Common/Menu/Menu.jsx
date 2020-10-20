import React from 'react';
import CloseButton from '../CloseButton';
import './Menu.css'

const Menu = ({ menuItems, onClose }) => {
    return (
        <>
            {onClose && <CloseButton onClick={onClose} size='small' />}
            <ul className='menu'>
                {menuItems.map((item) => (
                    <li tabIndex="0" className='menu-item' onClick={item.onClick} key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Menu;
