import {getCookie} from 'cookies-next'
import { validateProfile } from '../constants';
import api from './../api.js'
const WithAuth =async (ctx) => {
    const {req,res,params} = ctx;
    const authCookie = getCookie("user_login_auth_sl",{req,res});
    const {profile} = params;
    const token =authCookie ? JSON.parse(authCookie).token : null;

    if(!authCookie){
        return {
            redirect :{
                destination : '/signin',
                permanent : false
            }
        }
    }
    const response = await api.get(validateProfile(profile),{
        params : {
            token 
        }
    })
    const {isValidUser} = response.data;
    if(!isValidUser || response.status === 401){
        return {
           notFound : true
        }
    }
    
    return {
        props : {

        }
    }
}

export default WithAuth;