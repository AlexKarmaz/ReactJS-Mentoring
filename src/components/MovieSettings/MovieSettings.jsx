import React, { useState } from 'react';
import Menu from '../Common/Menu';
import IconButton from '../Common/IconButton';
import './MovieSettings.css';
import threeDotsIcon from '../../../public/images/icon-threeDots-white.png';

let menuItems = [
    {
        id: '001',
        title: 'Edit',
        onClick: () => console.log('Edit'),
    },
    {
        id: '002',
        title: 'Delete',
        onClick: () => console.log('Delete'),
    },
];

const MovieSettings = (setingsMenuItems) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className='movieSettings'>
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
