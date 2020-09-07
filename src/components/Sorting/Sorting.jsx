import React, { useState } from 'react';
import Menu from '../Common/Menu';
import './Sorting.css';

const Sorting = ({ options }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState(options[0].title);

    const modifiedOptions = options.map((option) => {
        return {
            id: option.id,
            title: option.title,
            onClick: () => {
                option.onClick();
                setSelected(option.title);
                setIsOpened(false);
            },
        };
    });

    return (
        <div className='sorting'>
            <div className='sortingLabel'>Sort by</div>
            <div className='sortingMenu'>{selected}</div>
            <button className='caretButton' onClick={() => setIsOpened(!isOpened)}>
                <span className={isOpened ? 'caret-up' : 'caret-down'}></span>
            </button>
            {isOpened && <Menu menuItems={modifiedOptions} />}
        </div>
    );
};

export default Sorting;
