import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChairIcon from '@mui/icons-material/Chair';
import MapIcon from '@mui/icons-material/Map';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

export const SidebarData=[
    {
        title:"ホーム",
        icon:<HomeIcon />,
        link:"/home",
    },
    {
        title:"お部屋",
        icon:<ApartmentIcon />,
        link:"/apartment",
    },
    {
        title:"家具",
        icon:<ChairIcon />,
        link:"/furniture",
    },
    {
        title:"地図",
        icon:<MapIcon />,
        link:"/map",
    },
    {
        title:"tyatto",
        icon:<MarkUnreadChatAltIcon />,
        link:"/chat",
    },

]
