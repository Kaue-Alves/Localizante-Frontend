"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { handleCadastrar } from "./register.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
    const [visivel, setVisivel] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const router = useRouter()

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const user = {
            nome: nome,
            email: email,
            senha: senha,
        };

        try {
            await handleCadastrar(user);
            router.push("/login")
        } catch (error) {
            console.log(error);
            
        }
        
    }

    return (
        <main className={styles.page}>
            <form className={styles.formLogin} onSubmit={handleSubmit}>
                <h1>Entrar na Conta</h1>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="nome"
                        id="nome"
                        placeholder="Seu Nome"
                        value={nome}
                        required
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seuemail@email.com"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type={visivel ? "text" : "password"}
                        id="senha"
                        placeholder="teste"
                        value={senha}
                        required
                        minLength={8}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <div onClick={() => setVisivel(!visivel)}>
                        {visivel ? (
                            <FaEye className={styles.FaEye} />
                        ) : (
                            <FaEyeSlash className={styles.FaEyeSlash} />
                        )}
                    </div>
                </div>
                <button type="submit">Cadastrar</button>
                <p>
                    Já tem uma conta? <Link href="/login">Entrar</Link>
                </p>
            </form>
        </main>
    );
}
