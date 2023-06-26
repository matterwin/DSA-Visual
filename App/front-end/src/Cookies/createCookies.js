import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function createCookies(data) {
    console.log(data);
    const userId = data;
    cookies.set('userId', userId, { httpOnly: true, secure: true, path: '/' });
}