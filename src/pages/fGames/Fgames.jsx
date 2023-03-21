// import Share from '../../components/share/Share';
import './fgames.scss';
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';
import Post from '../../components/post/Post';

//page facc akan menyimpan tampilan pada file post
const Fgames = () => {
  const { isLoading, error, data } = useQuery(['posts'], () =>
    //melakukan request http
    makeRequest.get('/forumcategories/fgames').then((res) => {
      return res.data;
    })
  );
  return (
    <div className="fgames">
      {/* <Posts /> */}
      {error
        ? 'Something went wrong!'
        : isLoading
        ? 'loading'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Fgames;
