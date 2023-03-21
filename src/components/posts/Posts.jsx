import Post from '../post/Post';
import './posts.scss';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

//fungsi hook dengan useQuery
//digunakan untuk melakukan query pada post berdasarkan userId
//akan mengembalikan data yang didapat dari request
const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(['posts', userId], () =>
    makeRequest.get('/posts?userId=' + userId).then((res) => {
      return res.data;
    })
  );

  //ELEMEN HTML
  return (
    <div className="posts">
      {error
        ? 'Something went wrong!'
        : isLoading
        ? 'loading'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
