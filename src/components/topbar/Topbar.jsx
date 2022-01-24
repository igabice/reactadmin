import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

import img from '../../img/img.png'


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">react admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>

                    <img src={img} className='user-img' alt="" />
                
                </div>

            </div>
        </div>
    )
}
