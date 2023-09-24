import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TourIcon from '@mui/icons-material/Tour';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StoreIcon from '@mui/icons-material/Store';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
//import { Avatar } from '@mui/material';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Forum from '@mui/icons-material/Forum';
import { useStateValue } from './StateProvider';


function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>

            <div className='header__left'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Gamebook_transparent.png"
                />
            </div>

            <div className='header__input'>
                <SearchIcon />
                <input placeholder='Search Gamers/Games' type="text" />
            </div>

            <div className='header__center'>
                <div className='header__option
                header__option--active'>
                    <HomeIcon fontSize="large" />
                </div>

                <div className='header__option'>
                    <TourIcon fontSize="large" />
                </div>

                <div className='header__option'>
                    <OndemandVideo fontSize="large" />
                </div>



                <div className='header__option'>
                    <StoreIcon fontSize="large" />
                </div>



                <div className='header__option'>
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>

                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>


            </div>
        </div>
    );
}

export default Header; 