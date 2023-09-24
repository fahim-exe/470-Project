import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StoreIcon from '@mui/icons-material/Store';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';



function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL}
                title={user.displayName}
            />


            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Updates"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title='Gamer Poster' />
            <SidebarRow Icon={PeopleIcon} title='Your Party' />
            <SidebarRow Icon={ChatIcon} title='Chat' />
            <SidebarRow Icon={StoreIcon} title='Find Deal' />
            <SidebarRow Icon={LoyaltyIcon} title='Montage' />
            <SidebarRow Icon={ExpandMoreIcon} title="" Find Deal />

        </div>
    )
}

export default Sidebar;