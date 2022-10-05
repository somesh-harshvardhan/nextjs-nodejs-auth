export const BASE_URL = "http://localhost:8000";

const http = (path)=>`/${path}`;

export const signInUrl = ()=>http('user/signin');
export const validateProfile = (id)=>http('profile/validate/'+id);




export const USER_COOKIE_NAME = "user_login_auth_sl"



// object
export const status = {
    0 : "User not found",
    1 : "Succesfully login",
    2 : "Registered user",
    3 : "Wrong user info",
    4 : "User already exists"
}