import { get, post } from "./Ajax";

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

    this.addEvent = (eventForm) => {
        return new Promise(async (resolve, reject) => {
            return await post({
                url: 'event',
                body: eventForm
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.addImageToEvent = (imageBody) => {
        return new Promise(async (resolve, reject) => {
            return await post({
                url: `event/image`,
                body: imageBody
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.getEvent = (eventId) => {
        return new Promise(async (resolve, reject) => {
            return await get({
                url: 'event/' + eventId,
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.getEvents = () => {
        return new Promise(async (resolve, reject) => {
            return await get({
                url: 'event/all',
            })
                .then(resolve)
                .catch(reject);
        });
    }
}