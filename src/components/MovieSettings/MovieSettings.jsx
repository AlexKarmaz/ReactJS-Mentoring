import React, { useState, useEffect } from 'react';
import Menu from '../Common/Menu';
import IconButton from '../Common/IconButton';
import './MovieSettings.css';
import threeDotsIcon from '../../../public/images/icon-threeDots-white.png';

const MovieSettings = ({setingsMenuItems, onEdit, onDelete, isHovered}) => {
    const [isOpened, setIsOpened] = useState(false);
    
    useEffect (() => {
        if(!isHovered) {
            setIsOpened(false);
        }
    }, [isHovered]);

    let menuItems = [
        {
            id: '001',
            title: 'Edit',
            onClick: onEdit,
        },
        {
            id: '002',
            title: 'Delete',
            onClick: onDelete,
        },
    ];

    return (
        <div className={`movieSettings ${isHovered ? 'visible' : ''}`}>
            {!isOpened && (
                <IconButton
                    size={'medium'}
                    onClick={() => setIsOpened(true)}
                    imgSrc={threeDotsIcon}
                />
            )}
            {isOpened && (
                <Menu
                    menuItems={menuItems}
                    onClose={() => setIsOpened(false)}
                />
            )}
        </div>
    );
};

export default MovieSettings;
