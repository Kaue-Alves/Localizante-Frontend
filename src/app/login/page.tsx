"use client"

import { useState } from "react";
import styles from "./page.module.css"
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { handleLogin } from "./login.service";
import Link from "next/link";
import ContainerInputs from "@/components/ContainerInputs/containerInputs";
import ContainerLateral from "@/components/ContainerLateral/containerLateral";

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
                <ContainerInputs>
                <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Digite seu Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="senha">Senha</label>
                            <a href="#">Esqueceu sua senha?</a>
                        </span>
                        <input type={visivel ? "text" : "password"} id="senha" placeholder="Digite sua senha" value={senha} required minLength={8} onChange={(e) => setSenha(e.target.value)}/>
                        <div onClick={() => setVisivel(!visivel)}>
                            {visivel ? <FaEye className={styles.FaEye} /> : <FaEyeSlash className={styles.FaEyeSlash} />}
                        </div>
                    </div>
                    <button type="submit">
                        Entrar
                    </button>
                </ContainerInputs>
                
                <p>Não tem uma conta? <Link href="/cadastrar">Cadastre-se</Link></p>
                <div className={styles.containerWaves}>
                </div>
            </form>  
            <ContainerLateral/>
      </main>
    
  )
}