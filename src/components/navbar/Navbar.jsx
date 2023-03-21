import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import Rules from '../rules/Rules';
import { io } from 'socket.io-client';

const Navbar = () => {
  const [openRules, setOpenRules] = useState(false);
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  //penggunaan socket io dari sisi client
  useEffect(() => {
    const socket = io('http://localhost:8800');
    console.log(
      socket.on('firstEvent', (msg) => {
        console.log(msg);
      })
    );
  }, []);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>GamesTiva.</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <NotificationsOutlinedIcon />
        <div className="right">
          <WarningIcon onClick={() => setOpenRules(true)} />
        </div>
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
      {openRules && <Rules setOpenRules={setOpenRules} />}
    </div>
  );
};

export default Navbar;
