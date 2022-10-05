import { getCookie } from "cookies-next";
import { USER_COOKIE_NAME } from "../constants";

export const noop = ()=>{};
export const getUserProfile = ()=>getCookie(USER_COOKIE_NAME) ? JSON.parse(getCookie(USER_COOKIE_NAME)) : null;