import { get, post, put } from "./Ajax";

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

    this.getEventsType = (eventType) => {
        return new Promise(async (resolve, reject) => {
            return await get({
                url: 'event/event-type/' + eventType,
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.getEventsSubType = (eventSubType) => {
        return new Promise(async (resolve, reject) => {
            return await get({
                url: 'event/event-sub-type/' + eventSubType,
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.addTicket = (ticketForm) => {
        return new Promise(async (resolve, reject) => {
            return await post({
                url: 'ticket',
                body: ticketForm
            })
                .then(resolve)
                .catch(reject);
        });
    }

    this.addSeatsToEvent = (id, seats) => {
        return new Promise(async (resolve, reject) => {
            return await post({
                url: 'event/add-seats/' + id,
                body: { seats: seats }
            })
                .then(resolve)
                .catch(reject);
        });
    }
}