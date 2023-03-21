// import Posts from '../../components/posts/Posts';
// import Share from '../../components/share/Share';
import './facc.scss';
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';
import Post from '../../components/post/Post';

//page facc akan menyimpan tampilan pada file post
const Facc = () => {
  const { isLoading, error, data } = useQuery(['posts'], () =>
    //melakukan request http
    makeRequest.get('/forumcategories/facc').then((res) => {
      return res.data;
    })
  );
  return (
    <div className="facc">
      {/* <Posts /> */}
      {error
        ? 'Something went wrong!'
        : isLoading
        ? 'loading'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Facc;
