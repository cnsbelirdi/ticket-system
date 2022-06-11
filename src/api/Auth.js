import { Services } from "./Services";

const services = new Services();

export function Auth(){
    var _this = this;

	this.login = (username, password, grecaptcha) => {
        return new Promise(async (resolve, reject) => {
          await services.login(username, password)
                        .then((response) =>{
                            console.log("response",response)
                            _this.setAuthorizationCookie(response.entity.data.token);
                            //access token issue
                            //wait for token save

                            setTimeout(() => {
                                if (_this.hasAuthorizationCookie()) return resolve(response);
                                else return reject(response);
                            }, 500);

                            //resolve(response);
                        })
                        .catch((error) => {
                           reject(error);
                        })
       })
    }

    this.logout = () => {
        return new Promise(async (resolve, reject) => {
           return await services.logout()
                           .then(() => {
                               _this.removeAuthorizationCookie();
                               resolve();
                           })
                           .catch(() => {
                               _this.removeAuthorizationCookie();
                               resolve();
                           })
        })
    }

    this.isAuthenticated = () => {
        return _this.hasAuthorizationCookie();
    }

    this.hasAuthorizationCookie = () => {
        let hasToken = localStorage.getItem("access_token");
        return !!hasToken;
    }
    
    this.setAuthorizationCookie = (val) => {
        if (_this.hasAuthorizationCookie()) _this.removeAuthorizationCookie();
        localStorage.setItem("access_token", val, {path: "/"});
    }

    this.removeAuthorizationCookie = () => {
        localStorage.removeItem("access_token", {path: "/"});
    }

    this.getLoginToken = () =>{
        return localStorage.getItem("access_token");
    }
}