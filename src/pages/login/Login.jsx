import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

const Login = () => {
  //menetapkan state berdasarkan username dan password
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  //menetapkan state err dengan nilai null
  const [err, setErr] = useState(null);

  //deklarasi useNavigate
  const navigate = useNavigate();

  //mengambil children dari class AuthContext
  const { login } = useContext(AuthContext);

  //fungsi handlechange untuk menangani setiap klik pada elemen html
  //melakukan set perubahan berdasarkan name
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //fungsi akan dipanggil ketika user klik button login
  //mencegah perilaku default klik
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //jika input sesuai maka akan di teruskan ke halaman dashboard
      await login(inputs);
      navigate('/');
    } catch (err) {
      setErr(err.response.data);
    }
  };

  //ELEMEN HTML
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Games Tiva.</h1>
          <p>Gaming forum discussion.</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
