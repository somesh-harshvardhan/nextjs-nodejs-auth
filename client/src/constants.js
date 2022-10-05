export const BASE_URL = "http://localhost:8000";

const http = (path)=>`/${path}`;

export const signInUrl = ()=>http('user/signin');
export const validateProfile = (id)=>http('profile/validate/'+id)