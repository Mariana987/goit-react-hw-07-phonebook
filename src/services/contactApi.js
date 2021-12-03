
import axios from 'axios';

// axios.defaults.baseURL = '61a78099387ab200171d2d46.mockapi.io/api/v1';

export async function fetchContactsAPI() {
    const { data } = await axios.get(`/contacts`);
    return data;
}

export async function addContactAPI(item) {
    const { data } = await axios.post(`/contacts`, item);
    return data;
}
export async function deleteContactsAPI(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}





