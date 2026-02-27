import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CardFunc({ emoji, titulo, descricao }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="card-func-container" data-aos="fade-up">
            <div className="card-func">
                <div className="card-func-header">
                    <h1>{emoji}</h1>
                    <h2>{titulo}</h2>
                </div>
                <div className="card-func-body">
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    );
}
