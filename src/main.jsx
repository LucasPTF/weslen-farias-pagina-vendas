import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const heroMessages = {
  a1: {
    eyebrow: "Aula ao vivo para donos de empresa",
    title: "Coloque o WhatsApp da sua empresa no canal oficial em até 72 horas.",
    support:
      "Em 3 horas ao vivo, entenda o caminho para reduzir o risco da operação e parar de perder os leads que você já paga. Sem virar técnico e sem contratar programador.",
    button: "QUERO GARANTIR MINHA VAGA",
  },
  a2: {
    eyebrow: "Do clique até a agenda",
    title: "Descubra os 4 números que revelam onde seus leads param no WhatsApp.",
    support:
      "Em 3 horas ao vivo, você aprende a medir a operação, corrigir o caminho do atendimento e iniciar o credenciamento no canal oficial. Sem aumentar um real de verba.",
    button: "QUERO VER OS 4 NÚMEROS",
  },
  a3: {
    eyebrow: "O mercado já mudou de canal",
    title: "Leve sua empresa para o caminho que operações mais maduras já usam no WhatsApp.",
    support:
      "Conheça o processo para entrar no canal oficial em até 72 horas, organizar o atendimento e acompanhar a operação sem vigiar cada conversa.",
    button: "QUERO ENTRAR NA TURMA",
  },
};

const transformations = [
  ["Do risco ao canal certo", "Saia de um número que pode parar sem aviso e entenda como operar no canal criado para empresas."],
  ["Do escuro aos números", "Troque a dúvida sobre o dia anterior por quatro indicadores que mostram o que aconteceu no atendimento."],
  ["Da vigilância ao comando", "Acompanhe a operação sem carregar o celular da empresa para casa nem ler cada conversa."],
  ["Da opinião ao registro", "Conduza a equipe com fatos visíveis, não com discussões sobre o que talvez tenha acontecido."],
];

const discoveries = [
  "Por que hábitos comuns podem fazer a plataforma interpretar um número comercial como risco.",
  "O passo a passo do credenciamento no canal oficial, com os pré-requisitos abertos na tela.",
  "Onde o lead pago costuma sumir entre o clique no anúncio e a agenda.",
  "Como organizar recepção, qualificação e entrega do lead para a pessoa certa.",
  "Quais são os quatro números que todo dono deveria acompanhar no próprio WhatsApp.",
];

const deepDiscoveries = [
  ["A anatomia do banimento", "Entenda por que promoções para a base, vários computadores conectados e picos de leads podem ser lidos como sinais de risco."],
  ["O credenciamento na prática", "Veja os pré-requisitos, a ordem das etapas, o tempo esperado e os pontos que costumam travar a verificação."],
  ["O ponto cego do vazamento", "Acompanhe o caminho que o lead percorre e reconheça onde ele esfria antes de chegar à agenda."],
  ["O circuito de atendimento", "Aprenda como receber, qualificar e direcionar o lead, inclusive o limite correto de um agente de inteligência artificial."],
  ["Os números do gestor", "Levante primeira resposta, volume de conversas, conversas iniciadas e origem por campanha para decidir com clareza."],
];

const truths = [
  ["Banimento não é azar", "Quando um número cai, hábitos repetidos costumam estar por trás do problema, mesmo que parecessem inofensivos no dia a dia."],
  ["Automação não precisa afastar clientes", "O que afasta é o silêncio. Um caminho bem montado acolhe rápido e entrega a conversa para uma pessoa concluir."],
  ["O canal oficial não exige código", "O processo é uma sequência de etapas administrativas. O que falta para muitos donos é ver a ordem certa."],
  ["Mais gente não corrige um processo ruim", "Adicionar pessoas sem um fluxo definido só acelera a bagunça. A operação precisa de direção."],
];

const schedule = [
  ["40 min", "A anatomia do banimento", "Os hábitos de rotina que a plataforma lê como risco e o que muda dentro do canal oficial."],
  ["50 min", "Credencial: o caminho de 72 horas", "Site, Gerenciador de Negócios, meio de pagamento e o checklist para preparar a verificação."],
  ["50 min", "Circuito: onde o lead some", "Demonstração do caminho do lead, da recepção à qualificação e ao atendimento humano."],
  ["40 min", "Comando: os números do gestor", "Primeira resposta, origem do lead e leitura da operação sem precisar abrir cada conversa."],
  ["20 min", "Sessão de perguntas", "Um espaço ao vivo para levar o cenário da sua empresa e olhar o caso junto com Weslen."],
];

const audience = [
  "Donos de negócios com duas ou mais pessoas atendendo pelo WhatsApp.",
  "Empresas que investem em tráfego pago e desconfiam que o retorno some depois do clique.",
  "Quem já perdeu um número ou quer evitar passar por essa situação.",
  "Quem leva o celular da empresa para casa e sabe que isso não é sustentável.",
  "Gestores e sócios responsáveis pela operação comercial.",
];

const faq = [
  ["Isso é um curso de atendimento no WhatsApp?", "Não. É uma aula ao vivo de 3 horas com a operação aberta na tela e o passo a passo do credenciamento. Você sai sabendo o que fazer."],
  ["Meu número já foi banido. E se eu fizer tudo e não funcionar?", "Nenhum caminho elimina o risco por completo. O canal oficial coloca a empresa dentro das regras adequadas à operação. Na aula, Weslen mostra também o que continua dependendo da empresa."],
  ["Eu não entendo de tecnologia. Vou acompanhar?", "Sim. O processo não exige código. O segundo bloco apresenta as etapas administrativas uma a uma, com os pré-requisitos na tela."],
  ["Preciso parar a empresa por 72 horas?", "Não. As 72 horas são o tempo médio apresentado no material para a conclusão do credenciamento pela Meta. Boa parte desse período é de espera."],
  ["Minha equipe vai boicotar outra ferramenta?", "A aula aborda justamente o problema de sistemas que ficam fora da conversa. O foco é organizar o caminho do atendimento, não criar mais trabalho manual."],
  ["A aula inteira será um pitch?", "Não. O programa está descrito bloco a bloco nesta página. Se o conteúdo não fizer sentido para a operação, a garantia permite pedir reembolso dentro de 7 dias."],
  ["E se eu não puder assistir ao vivo?", "O replay fica disponível por 72 horas. A sessão de perguntas acontece ao vivo e é a parte indicada para olhar o caso específico da sua empresa."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CTA({ children, className = "" }) {
  return (
    <a className={`cta ${className}`} href="#inscricao">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionHeading({ label, title, text, inverse = false }) {
  return (
    <div className={`section-heading ${inverse ? "section-heading-inverse" : ""}`}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function GuaranteeSeal() {
  return (
    <div className="guarantee-seal" aria-label="Garantia de 7 dias">
      <span className="guarantee-seal__label">Garantia</span>
      <strong className="guarantee-seal__number">7</strong>
      <span className="guarantee-seal__unit">dias</span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Selo Verde em 72h, início">
        <span className="brand-mark"><span /></span>
        <span><strong>SELO VERDE</strong><small>EM 72H</small></span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="#programa">Programa</a>
        <a href="#weslen">Quem ensina</a>
        <a href="#duvidas">Dúvidas</a>
      </nav>
      <CTA className="header-cta">GARANTIR VAGA</CTA>
    </header>
  );
}

function SalesPage({ variant }) {
  const hero = heroMessages[variant] || heroMessages.a1;

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow"><span />{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="hero-support">{hero.support}</p>
              <CTA>{hero.button}</CTA>
              <p className="cta-note">Aula ao vivo. 3 horas. Primeiro lote por R$ 29,90. Garantia de 7 dias.</p>
            </div>
            <div className="hero-portrait">
              <div className="portrait-frame">
                <img src="/images/weslen-hero.png" alt="Weslen Farias em retrato profissional" width="1120" height="1400" fetchPriority="high" />
                <div className="portrait-caption"><span>Com</span><strong>Weslen Farias</strong><small>9 anos de mercado</small></div>
              </div>
              <div className="signal-card signal-card-top" aria-hidden="true"><span>OPERAÇÃO</span><strong>Visível</strong></div>
              <div className="signal-card signal-card-bottom" aria-hidden="true"><i /><span>CANAL OFICIAL</span></div>
            </div>
          </div>
          <div className="proof-strip">
            <div className="shell proof-strip-inner">
              <div><strong>+200</strong><span>empresas atendidas</span></div>
              <div><strong>+R$ 5 mi</strong><span>em mídia gerida</span></div>
              <div><strong>9 anos</strong><span>de mercado</span></div>
              <div><strong>3 horas</strong><span>de aula ao vivo</span></div>
            </div>
          </div>
        </section>

        <section className="section transformation">
          <div className="shell">
            <SectionHeading label="O que muda" title="Você não precisa continuar operando no escuro." text="O Método Selo Verde organiza a mudança em três fases: Credencial, Circuito e Comando." />
            <div className="transformation-grid">
              {transformations.map(([title, text], index) => (
                <article className="transformation-card" key={title}>
                  <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section discovery dark-section">
          <div className="shell discovery-grid">
            <SectionHeading inverse label="Na aula" title="Cinco respostas que devolvem o controle ao dono." text="Conteúdo direto, com o processo aberto na tela e aplicação na operação real." />
            <div className="check-list">
              {discoveries.map((item) => <div className="check-item" key={item}><span><CheckIcon /></span><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section pricing" id="inscricao">
          <div className="shell pricing-grid">
            <div>
              <SectionHeading label="Inscrição" title="A mesma aula. Um valor menor para quem entra antes." text="O lote muda quando as vagas da turma são preenchidas." />
              <div className="lots" aria-label="Valores dos lotes">
                <div className="lot active"><span>Lote 1</span><strong>R$ 29,90</strong><small>Disponível agora</small></div>
                <div className="lot"><span>Lote 2</span><strong>R$ 89,70</strong><small>Próximo valor</small></div>
                <div className="lot"><span>Lote 3</span><strong>R$ 179,40</strong><small>Valor final</small></div>
              </div>
            </div>
            <aside className="checkout-card">
              <p className="checkout-kicker">AULA SELO VERDE EM 72H</p>
              <div className="price-line"><span>Primeiro lote</span><strong>R$ 29,90</strong></div>
              <ul>
                <li><CheckIcon />Aula ao vivo de 3 horas</li>
                <li><CheckIcon />Sessão de perguntas</li>
                <li><CheckIcon />Replay por 72 horas</li>
                <li><CheckIcon />Checklist do credenciamento</li>
              </ul>
              <button className="cta cta-disabled" type="button" disabled aria-describedby="checkout-pending"><span>CHECKOUT EM CONFIGURAÇÃO</span></button>
              <p id="checkout-pending" className="checkout-pending">O link de pagamento será conectado assim que for fornecido.</p>
            </aside>
          </div>
          <div className="shell guarantee-panel">
            <GuaranteeSeal />
            <div><p className="section-label">Decida com tranquilidade</p><h3>Você tem 7 dias para avaliar.</h3><p>Entre na aula, assista e veja se o conteúdo faz sentido para a sua operação. Se não fizer, peça o reembolso dentro de 7 dias, sem precisar justificar.</p></div>
          </div>
        </section>

        <section className="section authority" id="weslen">
          <div className="shell authority-grid">
            <div className="authority-photo"><img src="/images/weslen-autoridade.png" alt="Weslen Farias em ambiente profissional" width="1120" height="1400" loading="lazy" /><div className="photo-tag"><strong>+200</strong><span>empresas atendidas</span></div></div>
            <div className="authority-copy">
              <SectionHeading label="Quem conduz a aula" title="Weslen conhece o caminho porque viveu o problema dentro da operação." />
              <p>Weslen Farias passou 9 anos dentro da operação comercial de empresas. Começou com agência, foi parceiro Google e Meta e geriu mais de R$ 5 milhões em anúncios para clientes com diferentes níveis de investimento.</p>
              <p>Depois do MBA em Marketing, Estratégia e Inovação, percebeu que o gargalo se repetia. A campanha trazia o lead, mas a operação perdia a conversa dentro do WhatsApp.</p>
              <p>Ele aprofundou o processo de credenciamento da Meta e passou a implantar canais oficiais de atendimento. Hoje, são mais de 200 empresas atendidas em segmentos como saúde, mercado imobiliário, concessionárias e educação.</p>
              <div className="credential-row"><div><strong>MBA</strong><span>Marketing, Estratégia e Inovação</span></div><div><strong>Operação real</strong><span>Da mídia ao atendimento</span></div></div>
            </div>
          </div>
        </section>

        <section className="section story">
          <div className="shell story-grid">
            <div className="story-lead"><p className="section-label">O ativo que fica exposto</p><h2>Seu número não é apenas um contato.</h2></div>
            <div className="story-body"><p>Ele está na fachada, no cartão, no carro, no uniforme e no anúncio pago. Também está salvo no celular do cliente que indica a empresa há anos.</p><p>Quando esse número para, a conversa, o histórico e o contato construído pela empresa ficam ameaçados. E, enquanto isso, todo mês a empresa continua pagando para levar novas pessoas até um caminho que quase ninguém mede.</p><blockquote>O canal oficial resolve duas frentes ao mesmo tempo: posiciona a operação dentro das regras adequadas e cria uma camada de informação sobre quem atendeu, em quanto tempo, de onde o lead veio e onde a conversa parou.</blockquote></div>
          </div>
        </section>

        <section className="section details">
          <div className="shell">
            <SectionHeading label="O que você vai descobrir" title="Da causa do bloqueio à leitura dos números." text="Cada parte da aula foi desenhada para responder uma pergunta prática da operação." />
            <div className="details-list">
              {deepDiscoveries.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section truths dark-section">
          <div className="shell">
            <SectionHeading inverse label="Antes de qualquer ferramenta" title="Quatro verdades que mudam a forma de olhar para o WhatsApp." />
            <div className="truths-grid">{truths.map(([title, text]) => <article key={title}><span className="truth-dot" /><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="section class-format">
          <div className="shell format-grid">
            <div><SectionHeading label="Como funciona" title="Uma aula. Três horas. Operação aberta na tela." /><p className="format-copy">A aula acontece ao vivo pelo Google Meet, com data marcada. Antes do encontro, os participantes entram em um grupo no WhatsApp para organização do material e dúvidas. Depois, o replay fica disponível por 72 horas.</p></div>
            <aside className="format-card"><p>Você sai com</p><strong>O checklist do credenciamento e clareza para iniciar o processo por conta própria.</strong><span>Sem teoria solta. Sem código.</span></aside>
          </div>
        </section>

        <section className="section program" id="programa">
          <div className="shell program-grid">
            <div className="program-sticky"><SectionHeading label="Programa da aula" title="Bloco a bloco, com tempo e objetivo claros." /><p>Traga o cenário da sua empresa para aproveitar a sessão final de perguntas.</p></div>
            <div className="timeline">{schedule.map(([time, title, text], index) => <article key={title}><div className="timeline-index">{index + 1}</div><div><span>{time}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section essential">
          <div className="shell essential-card"><p className="section-label">Faça a conta</p><h2>Quanto vale o número que conecta sua empresa aos clientes todos os dias?</h2><div className="essential-grid"><p>Você já pagou para divulgar esse número. Já treinou clientes a chamar por ele. Já colocou nele anos de conversas e indicações.</p><p>Agora existe uma segunda pergunta: quantos leads pagos pararam ontem entre o anúncio e a agenda sem que ninguém percebesse?</p></div><CTA>QUERO ENTRAR NA PRÓXIMA TURMA</CTA></div>
        </section>

        <section className="section audience">
          <div className="shell audience-grid">
            <SectionHeading label="Para quem é" title="Esta aula faz sentido se o WhatsApp já é parte da sua operação." />
            <div className="audience-list">{audience.map((item) => <div key={item}><CheckIcon /><p>{item}</p></div>)}</div>
          </div>
          <div className="shell not-for"><strong>Esta aula ainda não é para você se:</strong><p>você atende sozinho, não usa o WhatsApp no negócio ou atua em segmentos que a própria Meta não aceita no canal oficial, como apostas, moeda virtual e marketing multinível.</p></div>
        </section>

        <section className="section difference dark-section">
          <div className="shell difference-grid"><div><p className="section-label">O diferencial</p><h2>Ferramenta sem implantação deixa você sozinho. Teoria sem operação também.</h2></div><div><p>A experiência de Weslen une o que normalmente aparece separado: mídia, operação comercial e implantação do canal oficial.</p><p>Você não recebe apenas uma explicação sobre como o WhatsApp funciona. Você vê o caminho do credenciamento, o fluxo do lead e os números de gestão dentro da mesma aula.</p></div></div>
        </section>

        <section className="section evidence">
          <div className="shell"><SectionHeading label="Experiência comprovável" title="Uma base construída em empresas de verdade." text="Os depoimentos identificados ainda estão em coleta. Até lá, a página apresenta somente os fatos já sustentados pelos materiais." /><div className="evidence-grid"><article><strong>+200</strong><h3>Empresas atendidas</h3><p>Operações em saúde, mercado imobiliário, concessionárias, educação e serviços.</p></article><article><strong>+R$ 5 mi</strong><h3>Em mídia gerida</h3><p>Experiência anterior acompanhando investimentos de diferentes portes e o caminho do lead.</p></article><article><strong>9 anos</strong><h3>Dentro da operação</h3><p>Trajetória conectando aquisição, atendimento e gestão comercial.</p></article></div></div>
        </section>

        <section className="section faq" id="duvidas">
          <div className="shell faq-grid"><div><SectionHeading label="Dúvidas frequentes" title="Respostas diretas antes de você decidir." /><p>Se a sua dúvida não estiver aqui, aguarde a disponibilização do canal oficial de suporte da turma.</p></div><div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="section final-cta">
          <div className="shell final-cta-card"><p className="section-label">Primeiro lote</p><h2>Três horas para entender o caminho que protege a operação e mostra onde o lead parou.</h2><p>Aula ao vivo por R$ 29,90, com replay por 72 horas e garantia de 7 dias.</p><button className="cta cta-disabled" type="button" disabled><span>CHECKOUT EM CONFIGURAÇÃO</span></button></div>
        </section>
      </main>
      <footer><div className="shell footer-inner"><div className="brand footer-brand"><span className="brand-mark"><span /></span><span><strong>SELO VERDE</strong><small>EM 72H</small></span></div><p>© 2026 Weslen Farias. Todos os direitos reservados.</p><p>Esta página não representa a Meta nem o WhatsApp.</p></div></footer>
    </>
  );
}

function ThankYouPage() {
  return (
    <main className="thank-you">
      <div className="thank-glow" aria-hidden="true" />
      <a className="brand thank-brand" href="/a1"><span className="brand-mark"><span /></span><span><strong>SELO VERDE</strong><small>EM 72H</small></span></a>
      <section className="thank-card">
        <p className="eyebrow"><span />Próximos passos</p>
        <h1>Sua inscrição foi encaminhada.</h1>
        <p className="thank-lead">Agora, acompanhe as instruções vinculadas à sua inscrição. O acesso ao grupo de participantes e ao Google Meet será organizado antes da aula.</p>
        <div className="thank-steps">
          <article><span>01</span><div><h2>Confira seus dados</h2><p>Garanta que as informações usadas na inscrição estão corretas para receber as orientações.</p></div></article>
          <article><span>02</span><div><h2>Aguarde o acesso</h2><p>O grupo no WhatsApp será usado para organizar o material e as dúvidas antes do encontro.</p></div></article>
          <article><span>03</span><div><h2>Prepare os pré-requisitos</h2><p>Tenha em mãos o site da empresa, o Gerenciador de Negócios e o meio de pagamento usado na operação.</p></div></article>
        </div>
        <div className="thank-notice"><strong>Importante</strong><p>A data da turma e o canal de suporte ainda serão adicionados quando a organização fornecer essas informações.</p></div>
        <a className="text-link" href="/a1">Voltar para a página da aula <ArrowIcon /></a>
      </section>
    </main>
  );
}

function App() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (path === "obrigado") return <ThankYouPage />;
  return <SalesPage variant={["a1", "a2", "a3"].includes(path) ? path : "a1"} />;
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
