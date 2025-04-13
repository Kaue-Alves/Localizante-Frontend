"use client";

import Header from "@/components/Header/header";
import styles from "./page.module.css";
import { useState } from "react";

export default function Page() {
    const [tarefas, setTarefas] = useState([]); // Gerenciar tarefas com useState
    const [texto, setTexto] = useState("");

    function handleAdicionar() {
        if (texto.trim() === "") return; // Evitar adicionar tarefas vazias

        const novaTarefa = {
            tarefa: texto,
        };

        setTarefas([...tarefas, novaTarefa]); // Atualizar o estado com a nova tarefa
        setTexto(""); // Limpar o campo de texto
    }

    return (
        <main className={styles.page}>
            <Header />
            <div>
                <input
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Digite uma tarefa"
                />
                <button onClick={handleAdicionar}>Adicionar</button>
            </div>
            <br />

            <div>
                {tarefas.map((t, index) => (
                    <div key={index}>
                        <p>{t.tarefa}</p>
                        <div>
                            <button>Editar</button>
                            <button>Excluir</button>
                            <button>Marcar Concluído</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
