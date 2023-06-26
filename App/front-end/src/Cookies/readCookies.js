import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function readCookies() {
    console.log(cookies.get('userId'));
    return cookies.get('userId');
}