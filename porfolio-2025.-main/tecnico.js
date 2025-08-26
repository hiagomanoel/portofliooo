// const toggle = document.getElementById('modeToggle');
// const body = document.body;
// const menuBtn = document.getElementById('menuBtn');
// const navList = document.getElementById('navList');

// if (localStorage.getItem("darkMode") === "true") {
//   body.classList.add("dark");
//   toggle.textContent = "☀️";
// } else {
//   toggle.textContent = "🌙";
// }

// toggle.addEventListener("click", () => {
//   body.classList.toggle("dark");
//   const darkModeEnabled = body.classList.contains("dark");
//   localStorage.setItem("darkMode", darkModeEnabled);
//   toggle.textContent = darkModeEnabled ? "☀️" : "🌙";
// });

// menuBtn.addEventListener('click', () => {
//   navList.classList.toggle('hidden');
// });

// const materias = document.querySelectorAll('.materia');

// materias.forEach(materia => {
//   materia.addEventListener('click', () => {
//     const nomeMateria = materia.dataset.materia;
//     const trimestres = document.getElementById(`${nomeMateria}-trimestres`);
//     trimestres.classList.toggle('hidden');
//   });
// });

// const trimestres = document.querySelectorAll('.trimestre');
// const conteudoTrabalho = document.getElementById('conteudoTrabalho');

// trimestres.forEach(tri => {
//   tri.addEventListener('click', () => {
//     const materiaBox = tri.closest('.materia-box');
//     const nomeMateria = materiaBox.querySelector('.materia').dataset.materia;
//     const trimestre = tri.textContent.trim();

//     const trabalhos = {
//       Modelagem: {
//         '1º Trimestre': 'fazer', 
//         '2º Trimestre': 'Conteúdo ainda não disponível.',
//         '3º Trimestre': 'Conteúdo ainda não disponível.'
//       },
//       IoT: {
//         '1º Trimestre': 'fazer',
//         '2º Trimestre': 'Conteúdo ainda não disponível.',
//         '3º Trimestre': 'Conteúdo ainda não disponível.'

//       }
//     };

//     const conteudo = trabalhos[nomeMateria]?.[trimestre] || 'Nenhum conteúdo disponível ainda.';
//     conteudoTrabalho.textContent = `Trabalho de ${nomeMateria.toUpperCase()} - ${trimestre}: ${conteudo}`;
//   });
// });

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
    conteudoTrabalho.innerHTML = "";

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
      Modelagem: {
        '1º Trimestre': [
          {
            titulo: 'Documentar os requisitos não funcionais do sistema "Burger’s House" para garantir qualidade, desempenho, segurança e usabilidade, seguindo um formato padronizado. Habilidades trabalhadas: H4, H7 e H8.',
            imagem: '/imgs/burger.png',
            link: 'https://docs.google.com/document/d/1ObO92YEVqcY_u8__T1WgRoQ4vbwcsGTGf0ORMPLVXHc/edit?tab=t.0'
          },
          {
            titulo: 'O SensorLink é um sistema com sensores que controlam eletrônicos com base em movimento, monitorando o consumo de energia. O aplicativo permite personalizar funções e gerar relatórios semanais, enquanto o site oferece cadastro e informações sobre a empresa. Habilidades trabalhadas: H1, H2, H3, H4, H6 e H7',
            imagem: '/imgs/sensor.png',
            link: 'https://www.canva.com/design/DAGhnnxjuKQ/S451KU1xFrN3WySnznLM8Q/edit'
          }
        ],
        '2º Trimestre': [{
            titulo: 'Protótipo no Figma: Este é o design desenvolvido para o site e o aplicativo da S.A., reunindo as principais telas, fluxos de navegação e elementos visuais do projeto. Habilidades: H1 e H7.',
            imagem: '/imgs/sensorlink.png',
            link: 'https://www.canva.com/design/DAGhnnxjuKQ/30uIJWbF2GKWReMaFQplPA/view?utm_content=DAGhnnxjuKQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h21e019a525'
          },
         ],
        '3º Trimestre': []
      },
      IoT: {
        '1º Trimestre': [
          {
            titulo: 'A atividade visa pesquisar e apresentar a aplicação da IoT em áreas específicas, analisando benefícios, desafios e impactos. O foco é desenvolver habilidades de pesquisa, comunicação e trabalho em equipe.',
            imagem: '/imgs/iot.png',
            link: 'https://docs.google.com/document/d/1XCPHk9Dk84VwoWppyOGkO3MWvcj6LQqTl4LxQIsRz_c/edit?usp=sharing'
          },
        ],
        '2º Trimestre': [],


        '3º Trimestre': []
      },
      'Banco de Dados': {
        '1º Trimestre': [],
        '2º Trimestre': [{
            titulo: 'Trata-se de uma lista de exercícios com questões de raciocínio lógico aplicadas à Modelagem Conceitual. Habilidades: H1, H2, H3 e H4.',
            imagem: '/imgs/exercicio.png',
            link: ''
          }],
        '3º Trimestre': []
      }
    };

    const conteudo = trabalhos[nomeMateria]?.[trimestre];

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
