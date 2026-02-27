import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CardPlano({ nome, descricao1, descricao2, descricao3, descricao4, descricao5, buttonText, className }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={`card-plano ${className || ''}`} data-aos="fade-up" >
            <div className="card-plano-header">
                <h1>{nome}</h1>
            </div>
            <div className="card-plano-body">
                <h2>{descricao1}</h2>
                <h2>{descricao2}</h2>
                <h2>{descricao3}</h2>
                <h2>{descricao4}</h2>
                <h2>{descricao5}</h2>
            </div>
            <button>{buttonText}</button>
        </div>
    )
}