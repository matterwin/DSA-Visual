import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function createAuthCookie(cookie) {
    cookies.set('auth-token', cookie, { path: '/', secure: true});
}

export function createNameCookie(cookie) {
    cookies.set('name', cookie, { path: '/', secure: true});
}

export function createProfilePicCookie(cookie) {
    cookies.set('pp', cookie, { path: '/', secure: true});
}

export function createChatCookie(cookie) {
    cookies.set('showChat', cookie, { path: '/', secure: true});
}

export function createColorCookie(cookie) {
    cookies.set('color', cookie, { path: '/', secure: true});
}

