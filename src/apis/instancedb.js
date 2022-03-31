import axios from 'axios';
export default axios.create(
    {
        baseURL: 'https://portal-pi-default-rtdb.firebaseio.com/'
    }
)