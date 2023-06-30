import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function readCookies(cookieName) {
    return cookies.get(cookieName);
}