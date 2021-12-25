import axios from 'axios';

const api = 'http://localhost:8080/';

const register = (username, password, email, firstName, lastName, address) => {
    return axios.post(api + "users", {
        username,
        password,
        email,
        firstName,
        lastName,
        address
    });
};

const login = async (username, password) => {
    return await axios
        .post(api + 'auth', {
            username,
            password
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout
}