import { BASE_URL } from "./Env";

export const post = (request) => {
    return new Promise(async (resolve, reject) => {
        request.method = "POST";
        request.redirect = "follow";

        await makeRequest(request)
            .then((e) => resolve(e))
            .catch(reject);
    });
};

export const put = (request) => {
    return new Promise(async (resolve, reject) => {
        request.method = "PUT";
        request.redirect = "follow";
        await makeRequest(request)
            .then((e) => resolve(e))
            .catch(reject);
    });
};

export const get = (request) => {
    return new Promise(async (resolve, reject) => {
        request.method = "GET";
        request.redirect = "follow";
        await makeRequest(request)
            .then((e) => resolve(e))
            .catch(reject);
    });
};

export const remove = (request) => {
    return new Promise(async (resolve, reject) => {
        request.method = "DELETE";
        await makeRequest(request).then(resolve).catch(reject);
    });
};

export const getUserInfo = (request, slug) => {
    return new Promise(async (resolve, reject) => {
        request.method = "GET";
        await makeRequest(request).then(resolve).catch(reject);
    });
};

var makeRequest = function (request) {
    // request.redirect = 'follow';

    if (!request.headers) {
        request.headers = {};
    }
    if (
        request.method !== "GET" &&
        //request.method !== "DELETE" &&
        !request.headers.hasOwnProperty("Content-Type") &&
        !request.skip
    ) {
        request.headers["Content-Type"] = "application/json";
        if (request.body) {
            // request.body = encodeParameters(request.body);
            request.body = JSON.stringify(request.body);
        }
    }

    var accessToken = localStorage.getItem("access_token");
    console.log('token', accessToken);
    if (accessToken) {
        request.headers["Authorization"] = "Bearer " + accessToken;
    }

    return new Promise(async function (resolve, reject) {
        await fetch(new Request(BASE_URL + request.url, request))
            .then(function (response) {
                response.traceId = response.headers.get("x-trace-id");
                var finalize = function () {
                    if (response.status < 400) {
                        return resolve(response);
                    } else if (response.status === 403) {
                        localStorage.removeItem("access_token", { path: "/" });
                    }
                    return reject(response);
                };
                if (response.json) {
                    return response
                        .json()
                        .then(function (entity) {
                            response.entity = entity;
                            return finalize();
                        })
                        .catch(finalize);
                }
                return finalize();
            })
            .catch(function (response) {
                return reject(response);
            });
    });
};
