import './leftBar.scss';
// import Friends from '../../assets/1.png';
// import Groups from '../../assets/2.png';
// import Market from '../../assets/3.png';
// import Watch from '../../assets/4.png';
// import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Logout from '../../assets/14.png';
import Fund from '../../assets/13.png';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { Link } from '@mui/material';

const LeftBar = () => {
  //mengambil children dari class authContext
  const { currentUser, logout } = useContext(AuthContext);

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
          {/* <div className="item">
            <img src={Friends} alt="" />
            <span>Logout</span>
          </div> */}
          {/* <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div> */}
        </div>
        <hr />
        <div className="menu">
          <span>Forum</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Games</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Accesorries</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Competition</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Event</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Hardware</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>What's New</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>New</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Trending</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            <img src={Logout} alt="" />
            <span onClick={logout}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
