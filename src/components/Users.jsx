import React, { useState } from 'react'
import UsersList from './UsersList'
import close from './../assest/close.png'
import { MdEmail } from "react-icons/md";

import {
    Card,
    CardBody,
    Typography,
    Avatar
} from "@material-tailwind/react";
import './Users.css';

const Users = ({ user }) => {
    const [toggle, setToggle] = useState(null);
    const [contact, setContact] = useState(false);

    const handleClick = (data) => {
        setToggle(data);
    };

    const handleContact = () => {
        setContact(!contact)
    }

    return (
        <div className='main__user_card pl-2 relative border border-gray-300 rounded-xl '>
            <Typography variant="h6" color="blue-gray" className="m-4  mt-[40px]">
                Finding relevant information
            </Typography>
            <div className={`${!!toggle ? 'grid__toggle' : 'grid_element'} 'border border-gray-600 p-4 mr-4'`}>

                {user?.map((data, idx) => (
                    <UsersList key={idx} data={data} handleClick={handleClick} />
                ))}

            </div>
            {toggle && (
                <div className='user__details'>
                    <Card className="max-len__detail mt-[45px] relative">
                        <img
                            className="image__detaile w-full object-cover object-center overflow-auto rounded-tl-lg rounded-tr-lg"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <div className="avatar_detaile_dev">
                            <Avatar src={toggle.avatar} className="avatar_detaile_dev_avatar" />
                        </div>

                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="detaile_title">
                                {toggle?.profile?.firstName} {' '} {toggle?.profile?.lastName}
                            </Typography>
                            <Typography variant="p" color="blue-gray" className="mt-[-2px]">
                                {toggle.jobTitle}
                            </Typography>
                            <Typography variant="p" color="blue-gray" className="mt-[2px]">
                                {toggle.Bio}{' '} <span className='text-blue-500' onClick={handleContact}>Contact Info</span>
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            )}
            {contact && (
                <div className='create-post'>
                    <div className="create-post-modal">
                        <div role="button" tabIndex={0} onClick={(e) => handleContact(e)} onKeyDown={(e) => handleContact(e)}>
                            <span
                                src={close}
                                alt="close bar"
                                className="modal__close"
                            >X</span>
                        </div>
                        <div className="grid-modal">
                            <Typography variant="h4" color="blue-gray" className="p-2 pl-6 border-b-2">
                                {toggle.profile.username}
                            </Typography>

                            <Typography variant="h6" color="blue-gray" className="p-2 pl-6">
                                Contact Info
                            </Typography>

                            <Typography variant="p" color="blue-gray" className="p-2 pl-6 flex justify-start items-center mb-5">
                                <MdEmail className='text-2xl mr-2' /> {toggle.profile.email}
                            </Typography>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users