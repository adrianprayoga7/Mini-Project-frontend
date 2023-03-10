import './share.scss';
import Image from '../../assets/img.png';
import Map from '../../assets/map.png';
import Friend from '../../assets/friend.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
const Share = () => {
  //deklarasi usestate dengan nilai awal null dan kosong untuk desc
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState('');

  //fungsi untuk upload file ke server
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await makeRequest.post('/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //mengambil children dari class authcontext
  const { currentUser } = useContext(AuthContext);

  //deklarasi useQueryClient
  const queryClient = useQueryClient();

  //fungsi untuk membuat post baru
  //fungsi akan membuat permintaan post pada /posts
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post('/posts', newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['posts']);
      },
    }
  );

  //fungsi handleclick untuk menangani setiap klik pada elemen html
  //tujuannya untuk setiap user klik maka akan melakukan upload gambar
  //setelah itu akan mengatur nilai desc dan file menjadi null
  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = '';
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc('');
    setFile(null);
  };

  //ELEMEN HTML
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={'/upload/' + currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
