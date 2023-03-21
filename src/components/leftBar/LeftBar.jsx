import './leftBar.scss';
import Accessories from '../../assets/2.png';
import Gaming from '../../assets/1.png';
import Event from '../../assets/3.png';
import Hardware from '../../assets/4.png';
import New from '../../assets/5.png';
import Trending from '../../assets/6.png';
import Logout from '../../assets/14.png';
import Log from '../../assets/7.png';
import Competition from '../../assets/15.png';
import Users from '../../assets/8.png';
import Posts from '../../assets/9.png';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // Function to handle logout
  const handleLogout = () => {
    logout();
  };

  //ELEMEN HTML
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
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
        <hr />
        <div className="menu">
          <span>Sub Forum</span>
          <Link
            to={`/fgames`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="item">
              <img src={Gaming} alt="" />
              <span>Games</span>
            </div>
          </Link>
          <Link
            to={`/facc`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="item">
              <img src={Accessories} alt="" />
              <span>Accesorries</span>
            </div>
          </Link>
          <Link
            to={`/fcomp`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="item">
              <img src={Competition} alt="" />
              <span>Competition</span>
            </div>
          </Link>
          <Link
            to={`/fevent`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="item">
              <img src={Event} alt="" />
              <span>Event</span>
            </div>
          </Link>
          <Link
            to={`/fhardware`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="item">
              <img src={Hardware} alt="" />
              <span>Hardware</span>
            </div>
          </Link>
        </div>
        <hr />
        <div className="menu">
          <span>What's New</span>
          <div className="item">
            <img src={New} alt="" />
            <span>New</span>
          </div>
          <div className="item">
            <img src={Trending} alt="" />
            <span>Trending</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Admin</span>
          <div className="item">
            <img src={Log} alt="" />
            <span>App Log</span>
          </div>
          <div className="item">
            <img src={Users} alt="" />
            <span>All Users</span>
          </div>
          <div className="item">
            <img src={Posts} alt="" />
            <span>All Posts</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item" onClick={handleLogout}>
            <img src={Logout} alt="" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
