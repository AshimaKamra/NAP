import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://netaporter-f154b.firebaseio.com/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;