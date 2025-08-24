const toggle = document.getElementById('modeToggle');
const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
} else {
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const darkModeEnabled = body.classList.contains("dark");
  localStorage.setItem("darkMode", darkModeEnabled);
  toggle.textContent = darkModeEnabled ? "☀️" : "🌙";
});

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('hidden');
});

const materias = document.querySelectorAll('.materia');
const todasTrimestres = document.querySelectorAll('.trimestres');
const conteudoTrabalho = document.getElementById('conteudoTrabalho');

materias.forEach(materia => {
  materia.addEventListener('click', () => {
    const nomeMateria = materia.dataset.materia;
    const trimestres = document.getElementById(`${nomeMateria}-trimestres`);

    todasTrimestres.forEach(t => {
      t.classList.remove('show');
      t.classList.add('hidden');
    });
    conteudoTrabalho.textContent = "";

    trimestres.classList.remove('hidden');
    setTimeout(() => {
      trimestres.classList.add('show');
    }, 10);
  });
});

const trimestres = document.querySelectorAll('.trimestre');

trimestres.forEach(tri => {
  tri.addEventListener('click', () => {
    const materiaBox = tri.closest('.materia-box');
    const nomeMateria = materiaBox.querySelector('.materia').dataset.materia;
    const trimestre = tri.textContent.trim();

    const trabalhos = {
      matematica: {
        '1º Trimestre': [
          { titulo: 'Criando a Banca da Matemática – Habilidades Desenvolvidas: H30 e H31. Objetivo da Atividade: Elaborar um jogo original com base nos conceitos de análise combinatória e probabilidade, aplicando estratégias matemáticas para tomada de decisão e previsão de resultados. Assunto: Probabilidade e Análise Combinatória. Conclusão Pessoal: A criação do jogo nos desafiou a aplicar a matemática de forma prática e divertida. Pudemos entender como o princípio fundamental da contagem, arranjos e probabilidades se encaixam em situações do cotidiano e em jogos de estratégia. Além disso, a interação com outros grupos na fase de testes mostrou o quanto o pensamento lógico e probabilístico é essencial para prever e maximizar resultados.',
            imagem: '/imgs/MTMCOMB.png',
            link: 'https://www.canva.com/design/DAGknnluKgs/kGHaNUmISpZvAPsWWQEBZg/edit?utm_content=DAGknnluKgs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
          
            { titulo: 'Atividade: Filme "Quebrando a Banca" – Habilidades Desenvolvidas: H31 e H32. Objetivo da Atividade: Refletir sobre como o pensamento probabilístico e a estatística são utilizados em situações reais e representações cinematográficas. Assunto: Probabilidade e Estatística. Conclusão Pessoal: O filme mostrou de forma envolvente como o conhecimento em Matemática, especialmente em probabilidade, pode ser uma poderosa ferramenta quando usada com estratégia. Foi interessante ver como a contagem de cartas, as probabilidades e os sinais codificados funcionavam juntos para criar vantagem nos jogos. Além disso, ficou claro que o uso desse conhecimento traz responsabilidades e dilemas éticos. A proposta de criar um roteiro baseado em Matemática também ampliou minha percepção sobre as diversas formas de aplicar conteúdos matemáticos em narrativas criativas.', 
            imagem: '/imgs/filme.png', 
            link: 'https://docs.google.com/document/d/1-vfnfRR72TmZlut5Om32esVu66NobYiffqD-4xKQwws/edit?tab=t.0#heading=h.rwimg63y7kkl' },
        ],
        '2º Trimestre': [
          { titulo: 'Projeto que envolve a definição de um objetivo de pesquisa simples, coleta e organização de dados usando Google Forms e Planilhas. A partir disso, aplicam-se análises estatísticas básicas (média, mediana, moda e amplitude) e gráficos para interpretar resultados e tirar conclusões a partir de dados reais. Habilidades trabalhadas: C4, H27, H28, H29', 
          imagem: '/imgs/quehoras.png', 
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSfibm6dsoIAY500ML7HEZaYFHDqU6cFFw5WFsDdj6wCW0dYwQ/viewform' },
        { titulo: 'a fazer', 
          imagem: '/imgs/passe.png', 
          link: '' }],
        '3º Trimestre': []
      },
      natureza: {
        '1º Trimestre': [
          { titulo: 'Poluição Ambiental: Habilidades Desenvolvidas: C1 - H1, H2 e H4. Objetivo da Atividade: Compreender os tipos de poluição e suas consequências. Assunto: Poluição ambiental – tipos, causas e impactos no meio ambiente e na saúde humana. Crítica Pessoal: A atividade foi importante para entender os impactos da poluição e me fez refletir sobre como pequenas ações podem ajudar na preservação do meio ambiente.', imagem: '/imgs/image23.png', link: 'https://www.canva.com/design/DAGe5m6JEyw/2pLBEIHQDwKgDC9ovVxRFw/edit' },
          { titulo: 'Produção e Processos - Biodiesel: Habilidades Trabalhadas: C2 - H7, H9 e H10. Objetivo da Atividade: Compreender as etapas de produção do biodiesel e seus impactos. Assunto: Produção, reações químicas, sustentabilidade e diferenças entre biodiesel e diesel. Crítica Pessoal: A atividade foi completa e esclarecedora, permitindo entender não só o processo de produção, mas também a importância ambiental e econômica do biodiesel como alternativa renovável.', imagem: '/imgs/pesquisa.png', link: 'https://docs.google.com/document/d/1ZfxBBgFnxmR-NRHBsN0kmQav7mevh9wQkJa7Goys9oA/edit?tab=t.0' },
          { titulo: 'Evolucionismo - Meme: Habilidades Desenvolvidas: C3 - H15 e H18. Objetivo da Atividade: Representar de forma crítica e criativa o processo evolutivo humano. Assunto: Evolução das espécies e comportamento humano contemporâneo. Crítica Pessoal: Criar o meme foi divertido e ao mesmo tempo reflexivo, pois mostra como a evolução física contrasta com certas atitudes modernas, como o uso excessivo da tecnologia.', imagem: '/imgs/evolucao.png', link: 'https://docs.google.com/document/d/16AXkohoDod6VG6qmVbf0m5o4xDdFLa_id761aiczNYc/edit?tab=t.0' },
          { titulo: 'Campo Elétrico - Relatório Experimental: Habilidades Desenvolvidas: H29, H30 e H31. Objetivo da Atividade: Investigar, por meio de simulações e análises, como a intensidade do campo elétrico varia com a distância e com a carga elétrica. Assunto: Campo Elétrico e Linhas de Campo. Conclusão Pessoal: O experimento foi fundamental para compreender visualmente e numericamente a relação entre campo, carga e distância. Percebi que o campo elétrico se comporta de forma previsível e coerente com a teoria, reforçando o entendimento de conceitos como atração e repulsão entre cargas, além da importância das linhas de campo na representação dessas interações.', imagem: '/imgs/atividade.png', link: 'https://docs.google.com/document/d/1gm9lfAjhSyF8Sdr4qmVspLWWlZX96Fg-baloKX3UbE4/edit?tab=t.0' }
        ],
        '2º Trimestre': [
          {
            titulo: 'Campo magnético e Auroras: Estudo sobre o campo magnético terrestre e sua relação com o surgimento das auroras. A atividade destaca os fenômenos naturais causados pela interação entre o Sol e a Terra.',
              imagem: '/imgs/natureza2.png',
              link: 'https://sites.google.com/estudante.sesisenai.org.br/certo/in%C3%ADcio'
          },
          {
            titulo: 'Glossário de eletroquímica com definições claras e objetivas dos principais termos da área. Facilita a compreensão dos conceitos fundamentais relacionados a reações eletroquímicas e eletrólise. :  Habilidades Trabalhadas: H7 H9 H6 C2 ',
              imagem: '/imgs/natureza2t.png',
              link: 'https://docs.google.com/document/d/1WJs2Q0pTvXGTvhcL11xWfAeMCB9cMto53NlnL6wrZEE/edit?tab=t.0#heading=h.d2or31d1qfms'
          },
          {
          titulo: 'Imunológico e vacinas: Estudo sobre o sistema imunológico e o papel das vacinas na proteção contra doenças. A atividade destaca os mecanismos de defesa do corpo e a importância da imunização para a saúde pública. Habilidades Trabalhadas:C4 - H23',
            imagem: '/imgs/natureza2tri.png',
            link: 'https://www.canva.com/design/DAGqszEdTQw/-NN1ChcZtjHqdlesXfd84Q/edit'
        },
        
        ],
        '3º Trimestre': []
      },
      linguagens: {
        '1º Trimestre': [
          { 
            titulo: 'Redação Enem: Objetivo da Atividade: Produzir um texto dissertativo-argumentativo com base em temas atuais. Assunto: Desigualdade social no Brasil. Crítica Pessoal: A atividade foi desafiadora, mas importante para praticar a estrutura exigida no ENEM. Percebi que preciso melhorar na construção de argumentos mais coesos.',
            imagem: '/imgs/redacaonota.png',
            link: '#' 
          },
          { 
            titulo: 'Biografia: Habilidades Desenvolvidas: H22 Objetivo da Atividade: Produzir um texto narrativo sobre a trajetória de vida do aluno. Assunto: Biografia pessoal de Hiago Silva Santos Manoel. Crítica Pessoal: Gostei de relembrar minha história e organizar minhas ideias de forma clara. Foi uma oportunidade de refletir sobre minhas conquistas e sonhos, além de praticar a escrita de forma mais pessoal e expressiva.',
            imagem: '/imgs/biografia.png',
            link: 'https://docs.google.com/document/d/1xFJgY9NTIPTQIiewwILO6L24iP2ffetBpw5uxLvCzCQ/edit?tab=t.0'
          },
          {
            titulo: 'Site Informa Enem: Habilidades Desenvolvidas: H23. Objetivo da Atividade: Criar um site informativo voltado para alunos que estão se preparando para o ENEM. Assunto: Conteúdo sobre áreas do conhecimento, dicas de estudo e informações sobre a prova do ENEM. Crítica Pessoal: Trabalhar no site foi uma experiência muito enriquecedora, pois consegui aplicar conhecimentos de tecnologia e linguagem ao mesmo tempo. Me senti mais confiante em criar conteúdos úteis e relevantes para outros estudantes.',
            imagem: '/imgs/saberenem.png',
            link: 'https://sites.google.com/estudante.sesisenai.org.br/saberenem?usp=sharing'
          },
          {
            titulo: 'Pai contra Mãe: Habilidades Desenvolvidas: C2 - H9 e H11. Objetivo da Atividade: Interpretar e analisar criticamente um conto do realismo brasileiro. Assunto: Leitura e análise do conto “Pai contra Mãe” de Machado de Assis. Crítica Pessoal: A atividade me fez refletir sobre as desigualdades sociais e o racismo estrutural presentes no século XIX e como ainda impactam a sociedade atual. Achei a leitura densa, mas muito importante para desenvolver um olhar mais crítico e histórico sobre o Brasil.',
            imagem: '/imgs/paicontra.png',
            link: 'https://docs.google.com/document/d/1h-OMyi32WkrNGaRn7Q0YYzV7E36Zi8jv-I2SqnX-gmo/edit?usp=sharing'
          },
          
        ],
        '2º Trimestre': [{
            titulo: 'A atividade da Redação Online consistiu em produzir um texto seguindo regras de aplicação, usando caneta para a versão final e respeitando o tempo mínimo e máximo estipulado. Aprendi a organizar meu tempo, revisar meu texto antes da postagem e cumprir corretamente todas as normas da prova, garantindo uma produção adequada e educativa.',
            imagem: '/imgs/redacao.png',
            link: 'http://app.redacaonline.com.br/'
          },
        {
            titulo: 'O outro lado da bola: Habilidades: H3, H23. A atividade consistiu em produzir uma resenha crítica em vídeo sobre a HQ *O Outro Lado da Bola*, analisando a personagem sorteada e como a obra denuncia a homofobia no futebol. Aprendi a organizar um roteiro, dividir tarefas em grupo, usar recursos audiovisuais e refletir sobre representatividade e diversidade no esporte de forma educativa e criativa.',
            imagem: '/imgs/versolivro.png',
            link: 'https://sites.google.com/estudante.sesisenai.org.br/versolivro?usp=sharing '
          },
        {
            titulo: 'Que tipo de arte você consome? Habilidades: H11, H25. A atividade pediu para descrever em inglês meu artista, filme e música favoritos, contando história, obras e impacto pessoal. Aprendi a praticar o Simple Past, organizar informações e refletir sobre como a arte influencia meus sentimentos e pensamentos.',
            imagem: '/imgs/travis.png',
            link: 'https://docs.google.com/document/d/1mrRMoPeL_nwdQ7EqS1bJs5B2_2guXSx66Hg9nZnwE7o/edit?tab=t.0#heading=h.hh13idtmhvip'
          }],
        '3º Trimestre': []
      },
      humanas: {
        '1º Trimestre': [
          { titulo: 'Atividade: Quiz – Imperialismo dos EUA – Objetivo da Atividade: Desenvolver a compreensão sobre o processo de expansão dos Estados Unidos no século XIX, relacionando-o ao conceito de imperialismo e às suas consequências políticas e sociais nas Américas. Assunto: Imperialismo dos EUA, Marcha para o Oeste, Doutrina Monroe, Guerra Civil e Destino Manifesto. Conclusão Pessoal: A atividade ajudou a entender como os EUA se consolidaram como potência, por meio de políticas expansionistas como o Destino Manifesto e a Doutrina Monroe, que justificaram a ocupação territorial e o controle político nas Américas. Criar perguntas e discutir com os colegas foi essencial para fixar os conceitos. O quiz tornou a aprendizagem mais interativa, e a divisão por temas facilitou a compreensão dos acontecimentos históricos e sua importância no cenário atual.', imagem: '/imgs/imperialismo.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfQc4Z14y38MjYBzTaNEo9EDuzORHrl6_3OtErLen_s7Sm5CA/viewform' },
          { titulo: 'Estônia: Habilidades Desenvolvidas: C2 – H8, H10 e H12. Objetivo da Atividade: Compreender a geopolítica mundial por meio da análise de dados e características de um país. Assunto: Apresentação sobre a Estônia e sua relevância geopolítica e tecnológica. Crítica Pessoal: A atividade mostrou como a Estônia se destaca em inovação, mesmo sendo pequena, e ampliou minha visão sobre a importância estratégica de países pouco comentados.', imagem: '/imgs/estonia.png', link: 'https://docs.google.com/presentation/d/12rMhcVqNEygzKhHTmxQ96CylxtttcIBxjxHxGKBZ_Dc/edit#slide=id.p' },
        ],
        '2º Trimestre': [{
            titulo: 'Habilidades desenvolvidas: H30, H39, H40. A proposta da atividade foi pesquisar um país da África ou Ásia que se tornou independente entre 1940 e 1970, analisando sua participação na 2ª Guerra e o processo de independência. Aprendi a relacionar eventos históricos globais com as lutas internas pela independência e a compreender melhor os impactos da colonização.',
            imagem: '/imgs/serraleoa.png',
            link: 'https://docs.google.com/document/d/1tg3nlNhCwXduKKi2JpxPjWiJwxzKncWdDAs6myfymlw/edit?pli=1&tab=t.0'
          },
        {
            titulo: 'A atividade consistiu em criar um carrossel com imagens e textos para informar sobre o Holocausto. Aprendi a importância de transmitir fatos verdadeiros e combater a desinformação histórica.',
            imagem: '/imgs/instagram.png',
            link: 'https://www.canva.com/design/DAGwDDOmPJY/X5WM5WiC7b73FJ0ezJC9Vw/edit'
          },
        {
            titulo: 'Totalitarismo e Segunda Guerra Mundial: A atividade consistiu em estudar o totalitarismo e o nazifascismo por meio de aulas, filmes e exercícios na GeekieOne, analisando como essas ideologias se manifestam na história e na arte. Aprendi a identificar características totalitaristas em diferentes contextos, relacionando eventos históricos, cinema e arquitetura nazista.',
            imagem: '/imgs/aonda.png',
            link: 'https://www.canva.com/design/DAGsfKgC6So/uVAGpb19fSxTe5F2_Gw_TQ/edit'
          }
        ],
        '3º Trimestre': []
      }
    };

if (!trabalhos[nomeMateria]) {
  conteudoTrabalho.innerHTML = `<p>Trabalho de ${nomeMateria.toUpperCase()} - ${trimestre}: Conteúdo ainda não disponível.</p>`;
  return;
}

const conteudo = trabalhos[nomeMateria][trimestre];

    if (!conteudo || conteudo.length === 0) {
      conteudoTrabalho.innerHTML = `<p>Trabalho de ${nomeMateria.toUpperCase()} - ${trimestre}: Conteúdo ainda não disponível.</p>`;
      return;
    }

    let html = `<h2>Trabalho de ${nomeMateria.toUpperCase()} - ${trimestre}</h2>`;
    html += '<div class="trabalhos-grid">';
    conteudo.forEach(trabalho => {
      html += `
        <a href="${trabalho.link}" class="trabalho-item" target="_blank">
          <img src="${trabalho.imagem}" alt="${trabalho.titulo}">
          <p>${trabalho.titulo}</p>
        </a>
      `;
    });
    html += '</div>';

    conteudoTrabalho.innerHTML = html;
  });
});
