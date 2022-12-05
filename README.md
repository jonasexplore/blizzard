<h1 align="center">
  <img src=".github/logo.png" height="60px" />
</h1>

<p align="center">
  <img src=".github/preview.png" width="100%" />
</p>

## 💻 Projeto

Esse projeto é uma landing page da empresa **Blizzard**, ela é composta por um menu de navegação, um banner hero com as informações dos principais jogos da empresa(Diablo, HearthStone e World of Warcraft), a listagem dos jogos exclusivos e um rodapé com informações do download do app battle.net.

Para facilitar a codificação do projeto foi usado um protótipo do figma como base, o autor do layout é o design [**Gilberto Prado**](https://www.linkedin.com/in/gilberto-insanydesign/), [clique aqui](https://www.brchallenges.com/desafio/blizzard) para saber mais detalhes do desafio.

## 🚀 Tecnologias

- [Vitejs](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindui.com/)

## 📝 Requisitos do desafio

### Nível Fácil

- [x] Criar as seções: **Menu**, **Banner hero**, **Footer**.

- [x] O texto e o ícone do botão “Baixar jogo” devem ser alterados conforme o sistema operacional do usuário que estiver acessando a página. ( [material de apoio](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent))

- [x] Aplicar efeito de _hover_ nas opções do menu de navegação.

- [x] Aplicar responsividade para as seguintes resoluções: 1920px, 1440px, 768px e 375px.

### Nível Médio

###

- [x] Todos os requisitos do nivel fácil.

- [x] Criar as seções: **Menu**, **Banner hero**, **Jogos Exclusivo**, **Footer**.

- [x] Buscar a lista de jogos via api. ([acessar endpoint](https://api-brchallenges.vercel.app/api/blizzard/games))

- [x] Aplicar efeito de hover nas imagens dos jogos da seção **Jogos Exclusivos**.

- [x] Alterar as informações da seção **Banner Hero** ao selecionar uma opção no menu lateral. Os jogos disponíveis são **Diablo**, **HearthStone** e **World of Warcraft**.

### Nível Difícil

- [x] Todos os requisitos do nivel fácil e médio.

- [ ] Ao clicar no botão **Logar** do menu de navegação, deverá ser exibido o modal de login.

- [x] Criar componente de _dropdown_ para as opções **Jogos** e **Esportes** do menu de navegação.

- [ ] Deverá ser executado um _gif_ do jogo quando ocorrer o evento de _hover_ na capa do trailer
