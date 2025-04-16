import styles from "./containerLateral.module.css"
import Link from "next/link";

export default function ContainerLateral() {

    return (
        <div className={styles.containerLateral}>
            
            <h1>Bem Vindo ao <Link href="/" className={styles.link}>TaskLi</Link></h1>

            <div className={styles.containerTextos}>
                <p>“Organize seu dia com praticidade.”</p>
                <p>“Dê check nas suas metas.”</p>
                <p>“Sua produtividade começa aqui.”</p>
            </div>

            <div className={styles.containerImagem}>
                <img src="/ilustracoes/ilustracaoFundoLateral.png" alt="Ilustração TaskLy" />
            </div>
        </div>
    )
}