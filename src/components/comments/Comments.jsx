import { useContext, useState } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';

const Comments = ({ postId }) => {
  //digunakan untuk menyimpan data user yang sedang login
  const [desc, setDesc] = useState('');
  //mendefinisikan children dari class authContext
  const { currentUser } = useContext(AuthContext);

  //fungsi hook dengan useQuery
  //digunakan untuk melakukan query pada post berdasarkan postId
  //akan mengembalikan data yang didapat dari request
  const { isLoading, error, data } = useQuery(['comments'], () =>
    makeRequest.get('/comments?postId=' + postId).then((res) => {
      return res.data;
    })
  );

  //inisialisasi useQueryClient
  const queryClient = useQueryClient();

  //fungsi untuk membuat komentar baru
  //fungsi akan membuat permintaan post pada /comment
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post('/comments', newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['comments']);
      },
    }
  );

  //fungsi handleclick untuk menangani setiap klik pada elemen html
  //tujuannya untuk mencegah perilaku default dari elemen html
  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    //untuk mengubah setiap desc menjadi string kosong
    setDesc('');
  };

  //ELEMEN HTML
  return (
    <div className="comments">
      <div className="write">
        <img src={'/upload/' + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? 'Something went wrong'
        : isLoading
        ? 'loading'
        : data.map((comment) => (
            <div className="comment">
              <img src={'/upload/' + comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
              <span className="icon">
                <MoreHorizIcon />
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
