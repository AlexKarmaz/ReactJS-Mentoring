import React, {useRef, useEffect} from 'react';
import CloseButton from '../CloseButton';
import './Menu.css'

const Menu = ({ menuItems, onClose, onBlur }) => {
    const menu = useRef(null);

    useEffect(() => menu.current.firstChild.focus(), [menu]);

    return (
        <>
            {onClose && <CloseButton onClick={onClose} size='small' />}
            <ul ref={menu} className='menu' onBlur={onBlur}>
                {menuItems.map((item) => (
                    <li tabindex="0" className='menu-item' onClick={item.onClick} key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Menu;
