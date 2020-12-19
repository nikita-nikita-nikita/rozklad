import React, { useState } from "react";

import './NavbarDropDown.scss'

import profile from '../../../assets/images/profile.jpg'

const NavbarDropDown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id='header__navbar-dropdown' className={isOpen?'header__navbar-dropdown header__navbar-body-opened':'header__navbar-dropdown'}>
            <div className='header__navbar-dropdown__container'>
                <div className='header__navbar-body' onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                    <img src={profile} alt='profile'/>
                    <div className='header__navbar-body__name'>
                        <p>Julliee</p>
                        <p>@tg_nick</p>
                    </div>
                    <button className='icon' />
                </div>
                <div className='header__navbar-buttons'>
                    <button>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#5E89FE"/>
                            <path d="M4.50642 11.426C5.68101 10.7841 6.99217 10.2483 8.21725 9.70987C10.3249 8.82789 12.4408 7.96121 14.5782 7.15433C14.994 7.01686 15.7412 6.88243 15.8145 7.49381C15.7744 8.35925 15.6093 9.21963 15.4961 10.08C15.2088 11.972 14.8767 13.8576 14.5529 15.7434C14.4413 16.3716 13.6482 16.6967 13.1407 16.2948C11.921 15.4774 10.692 14.668 9.48795 13.8318C9.09353 13.4342 9.45928 12.8631 9.81153 12.5792C10.8161 11.597 11.8814 10.7626 12.8334 9.72968C13.0902 9.11444 12.3314 9.63294 12.0812 9.79183C10.7059 10.732 9.36439 11.7296 7.91449 12.556C7.17388 12.9604 6.31069 12.6148 5.57042 12.3891C4.90668 12.1164 3.93404 11.8417 4.50635 11.426L4.50642 11.426Z" fill="#5E89FE"/>
                        </svg>

                        change telegram
                    </button>

                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5H21V21H3V5Z" stroke="#FA742B" stroke-linejoin="round"/>
                            <path d="M21 9H3" stroke="#FA742B" stroke-linecap="round"/>
                            <path d="M7 5V3" stroke="#FA742B" stroke-linecap="round"/>
                            <path d="M17 5V3" stroke="#FA742B" stroke-linecap="round"/>
                        </svg>


                        calendar view
                    </button>

                    <button>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C12.3137 1 15 3.68624 15 6.99995C15 8.9131 15 10.8341 15 12C15 15 17 16 17 16L1 16C1 16 3 15 3 12C3 10.8341 3 8.9131 3 6.99995C3 3.68624 5.68629 1 9 1V1Z" stroke="#5E89FE" stroke-linejoin="round"/>
                        </svg>



                        disable notification
                    </button>

                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14C12 12 13.576 11.6653 14.1187 11.124C14.6631 10.5809 15 9.82977 15 9C15 7.34315 13.6569 6 12 6C11.1041 6 10.2999 6.39273 9.7502 7.01542C9.49603 7.30334 9.29626 7.64044 9.16699 8.01061" stroke="#F13C20" stroke-linecap="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" fill="#F13C20"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F13C20"/>
                        </svg>



                        found a mistake? write us
                    </button>

                    <div className='logout'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5003 4.66669V23.3334H4.66699L4.66699 4.66669L17.5003 4.66669Z" stroke="#5E89FE" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.583 14H25.083" stroke="#5E89FE" stroke-linecap="round"/>
                            <path d="M21.583 17.5L25.083 14L21.583 10.5" stroke="#5E89FE" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavbarDropDown;