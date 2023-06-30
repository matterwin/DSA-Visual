import React, { useState, useEffect, useRef } from 'react';

import './menuTemplate.css';

function MenuTemplate() {
    const [isOpen, setIsOpen] = useState(false);
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

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className='menu-parent'
                ref={menuRef}
            >
                <div>
                    <p>Insert your icon here</p>
                </div>
            </div>
            {isOpen &&
                <div className='menu-div-contain'>

                    <div>Insert menu item here</div>
                    
                </div>
            }
        </div>
    );
}

export default MenuTemplate;
