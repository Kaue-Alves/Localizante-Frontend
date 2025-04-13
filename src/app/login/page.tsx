"use client"

import { useState } from "react";
import styles from "./page.module.css"
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { handleLogin } from "./login.service";
import Link from "next/link";

export default function page() {

    const [visivel, setVisivel] = useState(false)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const user = {
            email: email,
            senha: senha
        };

        await handleLogin(user);
    }

    return (
      <main className={styles.page}>
          <form className={styles.formLogin} onSubmit={handleSubmit}>
                <h1>Entrar na Conta</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="seuemail@email.com" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type={visivel ? "text" : "password"} id="senha" placeholder="teste" value={senha} required minLength={8} onChange={(e) => setSenha(e.target.value)}/>
                    <div onClick={() => setVisivel(!visivel)}>
                        {visivel ? <FaEye className={styles.FaEye} /> : <FaEyeSlash className={styles.FaEyeSlash} />}
                    </div>
                </div>
                <button type="submit">
                    Entrar
                </button>
                <p>Não tem uma conta? <Link href="/cadastrar">Cadastre-se</Link></p>
            </form>  
      </main>
    
  )
}