import React from 'react';
import './SidebarTab.scss';


function SidebarTab({ Icon, text, active }) { //Passing icon as props
    return (
        <div className={`sidebarTab ${active && 'sidebarTab--active'}`}>
            <Icon className='icon'/>
            <h2>{text}</h2>
        </div>
    )
}


export default SidebarTab; 