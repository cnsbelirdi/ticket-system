import { post } from "./Ajax";

export function Services() {
    var that = this;

    this.login = (identity, password) => {
        return new Promise(async (resolve, reject) => {
            return await post({
                url: 'authentication/sign-in',
                body: { identity, password }
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.register = (userForm) => {
        return new Promise(async (resolve, reject) => {
            return await post({
                url: 'authentication/sign-up',
                body: userForm
            })
                .then(resolve)
                .catch(reject);
        });
    }
}