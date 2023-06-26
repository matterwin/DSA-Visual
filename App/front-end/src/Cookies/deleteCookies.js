import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function deleteCookies() {
    cookies.remove('userId', userId, { httpOnly: true, secure: true, path: '/' });
    console.warn("deleting cookie...     " + cookies.get('userId'));
}