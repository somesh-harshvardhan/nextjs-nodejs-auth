export const BASE_URL = "http://localhost:8000";

const http = (path)=>`${BASE_URL}/${path}`;

export const signInUrl = ()=>http('user/signin');