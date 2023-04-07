import API from '../../config';

const passwordRecovery = (email) => {
    return API.post('auth/reset-password', { email }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error.response)
        return error.response;
    });
}

export default {
    passwordRecovery,
}