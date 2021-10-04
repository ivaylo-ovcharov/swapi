import axios from 'axios';

class Axios {
    constructor(baseUrl, bearerToken) {

        return axios.create({
            baseURL: baseUrl,
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
    }
}

export default Axios;
