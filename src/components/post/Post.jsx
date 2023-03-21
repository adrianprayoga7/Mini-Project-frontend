import './post.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';
import moment from 'moment';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const endpoint = {
  Games: 'fGames',
  Competition: 'fComp',
  Accesorries: 'fAcc',
  Event: 'fEvent',
  Hardware: 'fHardware',
};

const Post = ({ post }) => {
  //deklarasi usestate dengan nilai awal false
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //mengambil children dari authcontext
  const { currentUser } = useContext(AuthContext);

  //fungsi hook dengan useQuery
  //digunakan untuk melakukan query pada post berdasarkan postId
  //akan mengembalikan data yang didapat dari request
  const { isLoading, error, data } = useQuery(['likes', post.id], () =>
    makeRequest.get('/likes?postId=' + post.id).then((res) => {
      return res.data;
    })
  );

  //deklarasi fungsi useQueryClient
  const queryClient = useQueryClient();

  //fungsi untuk membuat komentar baru
  //fungsi akan membuat permintaan post pada /likes?postId=
  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete('/likes?postId=' + post.id);
      return makeRequest.post('/likes', { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['likes']);
      },
    }
  );

  //fungsi untuk menghapus komentar
  //fungsi akan membuat permintaan post pada /posts
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete('/posts/' + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['posts']);
      },
    }
  );

  //fungsi handlelike untuk menangani setiap klik like pada elemen html
  const handleLike = () => {
    //fungsi untuk melakukan mutasi data yang berisi id dari user
    //tujuannya untuk mengubah data yang menyimpan data id user saat ini
    mutation.mutate(data.includes(currentUser.id));
  };

  //fungsi handledelete untuk menangani setiap klik delete pada postingan
  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  //ELEMEN HTML
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={'/upload/' + post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{post.name} / </span>
                <Link
                  to={`/${endpoint[post.subforum]}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span className="subforum"> {post.subforum}</span>
                </Link>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={'/upload/' + post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLoading ? (
              'loading'
            ) : data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: 'red' }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            See Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
