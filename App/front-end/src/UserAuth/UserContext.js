let userData = {
    username: '',
    color: '',
    first: '',
    last: '',
    pic: '',
    bio:''
};

export function setData(username, color, pic, first, last, bio) {
    userData.username = username;
    userData.color = color;
    userData.first = first;
    userData.last = last;
    userData.pic = pic;
    userData.bio = bio;
}

export function getData() {
    return userData;
}