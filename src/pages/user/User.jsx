import { CalendarToday, Email, LocationSearching, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {userRows} from '../../dummyData';
import img from '../../img/img.png';
import './user.css';

export default function User({userId}) {

    const id = 6;

    console.log(`userId: `+id);

   const [user, setUser] = useState({})

    useEffect( ()=>{
        
        const tempUser = userRows.find(item=>item.id === id);
        setUser(tempUser);
        console.log(`user: `+user.userName);
        }, [userId]
    );

    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link  to='/newUser'>
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            {/* {user} */}
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                    <img alt='' src={img} className='userShowImg' />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Amanda Smith</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon'/>
                            <span className="userShowInfoTitle">amanda11</span>
                        </div>
                    <div className="userShowInfo">
                            <CalendarToday className='userShowIcon'/>
                            <span className="userShowInfoTitle">11.12.1990</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="userShowInfoTitle">+325700</span>
                        </div>
                    <div className="userShowInfo">
                            <Email className='userShowIcon'/>
                            <span className="userShowInfoTitle">amanda@gmail.com</span>
                        </div>
                    <div className="userShowInfo">
                            <LocationSearching className='userShowIcon'/>
                            <span className="userShowInfoTitle">Telliskivi, Tallinn, 11</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="amanda11"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full name</label>
                                <input type="text" placeholder="Amanda Smith"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="amanda@gmail.com"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="325700"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="Telliskivi, Tallinn, 11"
                                className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                            <img alt='' src={img} className='userUpdateImg' />
                            <label htmlFor='file' style={{cursor: 'pointer'}}><Publish /></label>
                            <input type='file' id='file' style={{display: 'none'}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
