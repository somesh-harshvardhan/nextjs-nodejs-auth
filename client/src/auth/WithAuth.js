import {getCookie} from 'cookies-next'
const WithAuth = (ctx) => {
    const {req,res} = ctx;
    const authCookie = getCookie("user_login_auth_sl",{req,res});
    if(!authCookie){
        return {
            redirect :{
                destination : '/signin',
                permanent : false
            }
        }
    }
    
    return {
        props : {

        }
    }
}

export default WithAuth;