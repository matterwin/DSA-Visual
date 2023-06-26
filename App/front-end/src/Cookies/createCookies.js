import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function createCookies(data) {
    cookies.set('userId', data, { path: '/', secure: true});
    console.log(cookies.get('userId'));
}