import './App.css';
import { useState } from 'react';
import Header from "./assets/components/Header";
import MidTitle from "./assets/components/MidTitle";
import CardInicial from "./assets/components/CardInicial";
import CardFunc from "./assets/components/CardFunc";
import CardPlano from "./assets/components/CardPlano";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function App() {
  const [showCard, setShowCard] = useState(false);
  const [showPlans, setShowPlans] = useState(false);

  return (
    <div className="app">
      <div className="bg-decorations">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
      <Header  />
      <section className={`hero ${showCard ? 'show-card' : ''}`}>
        <div className="mid-title-container" >
          <MidTitle className="mid-title-hero" 
            title="Organize sua vida em minutos."
            subtitle="Gerencie tarefas, aumente seu foco e finalize mais atividades todos os dias."
            buttonText={!showCard ? "Veja Como Funciona" : "Recolher Painel"}
            onClick={() => setShowCard(!showCard)}
          />
        </div>
        <div className="card-inicial-container">
          <CardInicial />
        </div>
      </section>

      <section id="funcionalidades" className="funcionalidades">
        <MidTitle
          title="Funcionalidades"
          subtitle="Gerencie tarefas, aumente seu foco e finalize mais atividades todos os dias."
        />
        <div className="cards-func-wrapper">
          <CardFunc
            emoji="⚡"
            titulo="Adição Rápida"
            descricao="Crie tarefas em segundos com nossa interface intuitiva e focada na velocidade de digitação."
          />
          <CardFunc
            emoji="🎯"
            titulo="Organização Total"
            descricao="Defina prioridades, crie projetos e mantenha tudo sob controle com etiquetas personalizadas."
          />
          <CardFunc
            emoji="📈"
            titulo="Progresso Visual"
            descricao="Acompanhe suas tarefas concluídas com gráficos simples que mostram sua evolução diária."
          />
        </div>
      </section>

      <section id="hiw" className="hiw">
        <MidTitle
          title="Como Funciona"
          subtitle="Três passos simples para transformar sua rotina."
        />
        <div className="cards-func-wrapper">
          <CardFunc
            emoji="📝"
            titulo="1. Crie"
            descricao="Esvazie sua mente adicionando todas as suas tarefas e ideias no TaskFlow rapidamente."
          />
          <CardFunc
            emoji="🗂️"
            titulo="2. Organize"
            descricao="Separe o que é urgente do que é importante, estruturando seu dia por níveis de prioridade."
          />
          <CardFunc
            emoji="✅"
            titulo="3. Conclua"
            descricao="Marque suas tarefas como concluídas e sinta a satisfação de progredir rumo aos seus objetivos."
          />
        </div>
      </section>
      <section id="cta" className="cta">
        <MidTitle
          title="Planos"
          subtitle="Desbloqueie recursos avançados e leve sua produtividade para o próximo nível."
        />
        <div className="cards-func-wrapper">
          <CardPlano
            nome="Plano Básico (Grátis)"
            descricao1="✅ Até 20 tarefas"
            descricao2="✅ Organização simples"
            descricao3="✅ Marcar como concluída"
            descricao4="❌ Sem categorias personalizadas"
            descricao5="❌ Sem backup na nuvem"
            buttonText="Começar Grátis"
          />
          <CardPlano
            className="card-plano-pro"
            nome="Plano Pro"
            descricao1="✅ Tudo do Pro"
            descricao2="✅ Relatórios"
            descricao3="✅ Suporte prioritário"
            descricao4="✅ Integração com Google Calendar"
            descricao5="✅ Atualizações antecipadas"
            buttonText="29,99"
          />
          <CardPlano
            nome="Plano Equipe"
            descricao1="✅ Tarefas ilimitadas"
            descricao2="✅ Organização avançada"
            descricao3="✅ Backup na nuvem"
            descricao4="✅ Modo escuro"
            descricao5="✅ Estatísticas de produtividade"
            buttonText="14,99"
          />
        </div>
      </section>
    </div>
  );
}


