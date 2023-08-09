import React, { useState, useEffect, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import './customSortButton.css'

const CustomSortButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sortType, setSortType] = useState('Newest'); // State to store the sort type
    const menuRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSortTypeChange = (newSortType) => {
        setSortType(newSortType);
        setIsOpen(false); // Close the dropdown after selecting a sort type
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className='menu-parent2'
                ref={menuRef}
            >
                <span className='sort-type'>
                    {sortType}
                    <ArrowDropDownIcon />
                </span>
            </div>
            {isOpen && (
                <div className='menu-div-contain2'>
                    <div className='dsa-contain-flex' onClick={() => handleSortTypeChange('Newest')}>
                        <p>Newest</p>
                    </div>
                    <div className='dsa-contain-flex' onClick={() => handleSortTypeChange('Oldest')}>
                        <p>Oldest</p>
                    </div>
                    <div className='dsa-contain-flex' onClick={() => handleSortTypeChange('Likes')}>
                        <p>Likes</p>
                    </div>
                    <div className='dsa-contain-flex' onClick={() => handleSortTypeChange('Dislikes')}>
                        <p>Dislikes</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomSortButton;
