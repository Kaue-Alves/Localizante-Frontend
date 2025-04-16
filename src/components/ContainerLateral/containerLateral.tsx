import { ReactNode } from "react";
import styles from "./containerLateral.module.css"
import Image from "next/image";

export default function ContainerLateral() {
    return (
        <div className={styles.containerLateral}>
            <h1>Bem Vindo ao TaskLi</h1>

            <p>“Organize seu dia com praticidade.”</p>

            <p>“Dê check nas suas metas.”</p>

            <p>“Sua produtividade começa aqui.”</p>

            <div>
                {/* <Image
                    src={"/ilustracoes/ilustraçãoFundoLateral.png"}
                    fill
                    priority
                    alt="Ilustração TaskLy"
                /> */}
                <img src="/ilustracoes/ilustraçãoFundoLateral.png" alt="Ilustração TaskLy" />
            </div>
        </div>
    )
}