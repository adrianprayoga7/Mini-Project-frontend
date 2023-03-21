import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import axios from 'axios';
import * as yup from 'yup';

//set setiap input text pada tampilan register
const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    terms: false,
  });
  //set error
  const [err, setErr] = useState(null);

  //set validasi menggunakan yup
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    name: yup.string().required('Name is required'),
    terms: yup.boolean().oneOf([true], 'Terms must be accepted'),
  });

  //fungsi untuk mengubah nilai dari state dengan memanggil perintah onChange
  //pada setiap kolom inputan
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  //fungsi untuk menangkap setiap value yang diset
  //salah satunya mengenai message error yang akan ditampilkan di halaman register
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(inputs);
      await axios.post('http://localhost:8800/api/auth/register', inputs);
    } catch (err) {
      setErr(err.errors ? err.errors[0] : err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Games Tiva.</h1>
          <p>Online Gaming Forum.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          {err && err.includes('Username') && <p className="alert">{err}</p>}
          {err && err.includes('Email') && <p className="alert">{err}</p>}
          {err && err.includes('Password') && <p className="alert">{err}</p>}
          {err && err.includes('Name') && <p className="alert">{err}</p>}
          {err && err.includes('Terms') && <p className="alert">{err}</p>}
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={inputs.username}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
            />
            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                onChange={handleChange}
                checked={inputs.terms}
              />
              <label htmlFor="terms"> I accept terms and conditions</label>
            </div>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
