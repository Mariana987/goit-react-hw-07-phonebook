
import axios from 'axios';

axios.defaults.baseURL = '61a78099387ab200171d2d46.mockapi.io/api/v1';

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







// export let data = [
//     {
//         "createdAt": "2021-11-30T18:46:33.961Z",
//         "name": "Ryan Brekke",
//         "number": "528-908-8297",
//         "id": "1"
//     },
//     {
//         "createdAt": "2021-12-01T00:57:53.415Z",
//         "name": "Luther Flatley",
//         "number": "367-394-3454",
//         "id": "2"
//     },
//     {
//         "createdAt": "2021-12-01T04:46:19.468Z",
//         "name": "Henrietta Lubowitz",
//         "number": "236-843-5764",
//         "id": "3"
//     },
//     {
//         "createdAt": "2021-11-30T19:31:26.478Z",
//         "name": "Mattie Hermiston PhD",
//         "number": "749-943-9347",
//         "id": "4"
//     },
//     {
//         "createdAt": "2021-12-01T11:32:20.942Z",
//         "name": "Levi Thiel",
//         "number": "871-813-5266",
//         "id": "5"
//     },
//     {
//         "createdAt": "2021-12-01T01:14:26.285Z",
//         "name": "Rochelle Stamm",
//         "number": "884-457-6682",
//         "id": "6"
//     },
//     {
//         "createdAt": "2021-12-01T04:26:55.945Z",
//         "name": "Justin Legros",
//         "number": "431-584-5570",
//         "id": "7"
//     },
//     {
//         "createdAt": "2021-11-30T21:19:49.050Z",
//         "name": "Javier Bergnaum",
//         "number": "490-824-8756",
//         "id": "8"
//     },
//     {
//         "createdAt": "2021-11-30T17:18:19.140Z",
//         "name": "Henry Kuhic",
//         "number": "340-501-0872",
//         "id": "9"
//     },
//     {
//         "createdAt": "2021-12-01T10:38:39.080Z",
//         "name": "Jake Johns",
//         "number": "373-544-9953",
//         "id": "10"
//     },
//     {
//         "createdAt": "2021-12-01T04:20:21.741Z",
//         "name": "Irving Bruen",
//         "number": "879-809-0038",
//         "id": "11"
//     },
//     {
//         "createdAt": "2021-12-01T07:35:44.537Z",
//         "name": "Camille Hoppe DDS",
//         "number": "991-992-4703",
//         "id": "12"
//     },
//     {
//         "createdAt": "2021-12-01T11:46:23.688Z",
//         "name": "Miss Ben Cole",
//         "number": "937-470-4042",
//         "id": "13"
//     },
//     {
//         "createdAt": "2021-12-01T03:47:58.614Z",
//         "name": "Miss Elaine Kirlin",
//         "number": "419-517-7874",
//         "id": "14"
//     },
//     {
//         "createdAt": "2021-12-01T10:24:36.760Z",
//         "name": "Ignacio Gusikowski III",
//         "number": "680-272-6641",
//         "id": "15"
//     },
//     {
//         "createdAt": "2021-12-01T04:55:41.957Z",
//         "name": "Guillermo Stamm",
//         "number": "406-973-2078",
//         "id": "16"
//     },
//     {
//         "createdAt": "2021-12-01T06:22:27.073Z",
//         "name": "Sharon MacGyver",
//         "number": "677-740-4700",
//         "id": "17"
//     },
//     {
//         "createdAt": "2021-11-30T18:22:47.691Z",
//         "name": "Jerome Rohan",
//         "number": "626-869-9478",
//         "id": "18"
//     },
//     {
//         "createdAt": "2021-11-30T16:35:58.236Z",
//         "name": "Terrence Gusikowski",
//         "number": "621-608-0700",
//         "id": "19"
//     },
//     {
//         "createdAt": "2021-12-01T05:12:51.312Z",
//         "name": "Edwin O'Hara",
//         "number": "742-674-4344",
//         "id": "20"
//     }
// ]