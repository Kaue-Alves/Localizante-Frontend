import axios from "axios";

export async function handleCadastrar(user: any) {

    axios.post('http://localhost:3000/auth/register', {
        id: "1",
        name: user.nome,
        email: user.email,
        password: user.password
    })
}