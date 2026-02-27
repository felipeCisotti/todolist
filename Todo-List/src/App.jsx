import './App.css';
import { useState } from 'react';
import Header from "./assets/components/Header";
import MidTitle from "./assets/components/MidTitle";
import CardInicial from "./assets/components/CardInicial";


export default function App() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="app">
      <Header />
      <section className={`hero ${showCard ? 'show-card' : ''}`}>
        <div className="mid-title-container">
          <MidTitle
            title="Organize sua vida em minutos."
            subtitle="Gerencie tarefas, aumente seu foco e finalize mais atividades todos os dias."
            buttonText={!showCard ? "Veja Como Funciona" : "Recolher"}
            onClick={() => setShowCard(!showCard)}
          />
        </div>
        <div className="card-inicial-container">
          <CardInicial />
        </div>
      </section>
    </div>
  );
}