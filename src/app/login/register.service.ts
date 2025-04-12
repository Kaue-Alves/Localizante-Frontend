import axios from "axios";

export async function handleLogin(user: any) {

    axios.post('http://localhost:3000/auth/login', {
        email: user.email,
        password: user.password
    })
}