import './navbar.scss';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = ({ post }) => {
  //fungsi dark mode
  const { toggle, darkMode } = useContext(DarkModeContext);

  //mengambil children dari class authcontext
  const { currentUser } = useContext(AuthContext);

  //ELEMENT HTML
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>GameTiva.</span>
        </Link>
        {/* <HomeOutlinedIcon /> */}
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        {/* <GridViewOutlinedIcon /> */}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        {/* <PersonOutlinedIcon /> */}
        {/* <EmailOutlinedIcon /> */}
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={'/upload/' + currentUser.profilePic} alt="" />
          <Link
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
