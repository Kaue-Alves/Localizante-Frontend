import { ReactNode } from "react";
import styles from "./containerInputs.module.css"

export default function ContainerInputs({children} : {children: ReactNode}) {

    return (
        <div className={styles.containerInputs}>

            {children}
        </div>
    )
    
}