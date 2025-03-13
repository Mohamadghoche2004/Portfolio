import axios from 'axios';

function contactUsApi(name, phone, email, message) {
    return axios.post('http://localhost:3001/contactus', {
        name,
        phone,
        email,
        message
    });
}

export default contactUsApi;
