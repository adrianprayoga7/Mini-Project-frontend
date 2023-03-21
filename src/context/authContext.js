import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

//inisialisasi createContext
export const AuthContext = createContext();

//fungsi untuk menyimpan data pengguna didalam state
//dan mengambil data yang tersimpan di localStorage
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  //fungsi untuk melakukan login dengan melakukan request ke server
  //data akan dikembalikan oleh server dan disimpan di variable CurrentUser
  const login = async (inputs) => {
    const res = await axios.post(
      'http://localhost:8800/api/auth/login',
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);
  };

  //fungsi untuk melakukan logout
  //dan mengubah variable di CurrentUser menjadi null
  //dan remove localstorage
  const logout = async () => {
    const res = await axios.post(
      'http://localhost:8800/api/auth/logout',
      null,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  //fungsi untuk menyimpan data user saat ini ke dalam localstorage
  //memastikan data user tetap tersimpan meskipun halaman dimuat ulang
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
