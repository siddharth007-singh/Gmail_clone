import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Logo2} from "../asset";
import {Avatar,IconButton} from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className="w-full h-full flex items-center justify-between border shadow-md py-3 gap-3 px-5">
        {/*Herder Left */}
      <div className="flex flex-row items-center justify-center cursor-pointer">
          <IconButton>
              <MenuIcon className="font-bold"/>
          </IconButton>
          <img
              src={Logo2}
              alt=""
              className="h-auto w-24 object-cover"
          />
      </div>

        {/*Herder Middle */}
      <div className="flex flex-auto items-center border rounded-full px-5 border-gray-500">
          <SearchIcon/>
          <input
              type="text"
              placeholder="Search Mails"
              name="search"
              className="w-full bg-opacity-0 border-none text-base  "
          />
          <ArrowDropDown/>
      </div>

        {/*Herder Right */}
      <div className="flex">
          <IconButton>
              <SettingsIcon/>
          </IconButton>
          <IconButton>
              <NotificationsIcon/>
          </IconButton>

          {/* User Section */}
          <Avatar className="cursor-pointer"/>
          <div></div>
      </div>
    </div>
  )
}

export default Header