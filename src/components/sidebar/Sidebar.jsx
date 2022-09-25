import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import HotelIcon from '@mui/icons-material/Hotel';
import AdbIcon from '@mui/icons-material/Adb';
import StoreIcon from "@mui/icons-material/Store";
import ChurchIcon from '@mui/icons-material/Church';
import AtmIcon from '@mui/icons-material/Atm';
import SurfingIcon from '@mui/icons-material/Surfing';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CollectionsIcon from '@mui/icons-material/Collections';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FoundationIcon from '@mui/icons-material/Foundation';
import EventIcon from '@mui/icons-material/Event';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FestivalIcon from '@mui/icons-material/Festival';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Discover Talisay</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <li>
            <AdbIcon className="icon" />
            <span>Home</span>
          </li>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <HotelIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/restaurant" style={{ textDecoration: "none" }}>
            <li>
              <LocalDiningIcon className="icon" />
              <span>Restaurants</span>
            </li>
          </Link>
          <li>
            <ChurchIcon className="icon" />
            <span>Churches</span>
          </li>
          <li>
            <FoundationIcon className="icon" />
            <span>Barangays</span>
          </li>
          <li>
            <EventIcon className="icon" />
            <span>Events</span>
          </li>
          <li>
            <FestivalIcon className="icon" />
            <span>Festivals</span>
          </li>
          <li>
            <AtmIcon className="icon" />
            <span>ATM machines</span>
          </li>
          <li>
            <FastfoodIcon className="icon" />
            <span>Food Tourism</span>
          </li>
          <li>
            <SurfingIcon className="icon" />
            <span>Sports Tourism</span>
          </li>
          <li>
            <CollectionsIcon className="icon" />
            <span>Photo Galley</span>
          </li>
          <li>
            <SettingsPhoneIcon className="icon" />
            <span>Hotlines</span>
          </li>
          <li>
            <PhoneIphoneIcon className="icon" />
            <span>Contact Us</span>
          </li>
          <p className="title">USER</p>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
};

export default Sidebar;
