import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

//library untuk request data dari http
import axios from 'axios';

//set setiap input text pada tampilan register
const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });

  //set error
  const [err, setErr] = useState('');

  //fungsi untuk mengubah nilai dari state dengan memanggil perintah onChange
  //pada setiap kolom inputan
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //fungsi untuk menangkap setiap value yang diset
  //salah satunya mengenai message error yang akan ditampilkan di halaman register
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>GAME TIVA.</h1>
          <p>Gaming Forum Discussion.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              // set onChange untuk menangkap setiap inputan yang dimasukan user
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              // set onChange untuk menangkap setiap inputan yang dimasukan user
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              // set onChange untuk menangkap setiap inputan yang dimasukan user
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              // set onChange untuk menangkap setiap inputan yang dimasukan user
              onChange={handleChange}
            />

            {/* untuk set message error yang akan ditampilkan*/}
            {err && err}

            {/* memanggil fungsi handleclick untuk trigger message error dan action success dari halaman register */}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
