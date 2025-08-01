Lets-Sign
Este é um projeto React criado com Vite, que utiliza React Router para navegação e React Bootstrap para estilização. O objetivo principal é demonstrar uma aplicação simples com rotas e componentes básicos.

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

Principais Arquivos e Diretórios
App.jsx: Componente principal da aplicação que define as rotas e a estrutura básica.
main.jsx: Ponto de entrada da aplicação, onde o React é renderizado no DOM.
components/: Contém os componentes Home e About, que são renderizados nas rotas correspondentes.
assets/: Contém arquivos estáticos, como o ícone react.svg.
Funcionalidades
Navegação com React Router:

Rota /: Renderiza o componente Home.
Rota /about: Renderiza o componente About.
Estilização com React Bootstrap:

Um botão estilizado com a classe primary do Bootstrap.
Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina.

Instalação
Clone o repositório:
git clone <url-do-repositorio>
cd lets-sign


2. Instale as dependências:

 ```bash
 npm install
Como Usar
Inicie o servidor de desenvolvimento:

npm run dev
Acesse a aplicação no navegador em http://localhost:3000.

Navegue entre as páginas:

Página inicial: Home.
Página "About": About.
Acesso e Autenticação
Você pode utilizar as credenciais abaixo para realizar o login na aplicação durante os testes:

Email:    user@email.com
Senha:    qwert
Autenticador: 123456
Essas informações representam um usuário fictício usado como mock durante o desenvolvimento.

Contribuição
Faça um fork do repositório.

Crie uma branch para sua feature:

git checkout -b minha-feature
Faça commit das suas alterações:

git commit -m "Minha nova feature"
Envie para o repositório remoto:

git push origin minha-feature
