import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function deleteCookies(cookieName) {
    cookies.remove(cookieName);
}