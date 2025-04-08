"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { FaEye, FaEyeSlash  } from "react-icons/fa";

export default function page() {

    const [visivel, setVisivel] = useState(false)

    return (
      <main className={styles.page}>
          <form className={styles.formLogin}>
                <h1>Entrar na Conta</h1>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="nome" id="nome" placeholder="Seu Nome" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="seuemail@email.com" required/>
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type={visivel ? "text" : "password"} id="senha" placeholder="teste" required minLength={8} />
                    <div onClick={() => setVisivel(!visivel)}>
                        {visivel ? <FaEye className={styles.FaEye} /> : <FaEyeSlash className={styles.FaEyeSlash} />}
                    </div>
                </div>
                <button type="submit">
                    Entrar
                </button>
                <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </form>  
      </main>
    
  )
}