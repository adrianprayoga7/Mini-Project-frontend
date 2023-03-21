import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';
import GoogleIcon from '@mui/icons-material/Google';
import * as yup from 'yup';

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
  //fungsi handlechange untuk menangani setiap klik pada elemen html
  //melakukan set perubahan berdasarkan name
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //mengambil children dari class AuthContext
  const { login } = useContext(AuthContext);

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  //fungsi akan dipanggil ketika user klik button login
  //mencegah perilaku default klik
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(inputs);
      //jika input sesuai maka akan di teruskan ke halaman dashboard
      await login(inputs);
      navigate('/');
    } catch (err) {
      setErr(err.errors ? err.errors[0] : err.response.data);
    }
  };

  //ELEMEN HTML
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Games Tiva.</h1>
          <p>Online Gaming Forum.</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>LOGIN</h1>
          <button className="logo">
            <span className="logo2">
              <GoogleIcon />
            </span>{' '}
            <span className="text">Login with Google</span>
          </button>
          <p className="alert">{err && err}</p>
          <span className="text3">OR</span>
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
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
