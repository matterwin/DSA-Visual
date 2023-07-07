import { useParams } from 'react-router-dom';
import readCookies from '../../../Cookies/readCookies';
import NotFound from '../../NotFound/notfound';

function Profile() {
  const { username } = useParams();

  if(username !== readCookies('name')){
    return(<NotFound />);
  }

  return (
    <div className='container'>
        profile
    </div>
  );
}

export default Profile;