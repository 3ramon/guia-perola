# Plano de Estudos - 8 Semanas

Esse plano foi feito pra voce seguir durante o periodo sem aulas.
Tente seguir a ordem, porque as semanas vao construindo em cima do que voce ja fez.

> Antes de comecar, rode o projeto com `npm run dev` e navegue por todas as paginas pra relembrar o estado atual.

---

# PARTE 1 - Guia Perola

---

## Semana 1 - Pagina Home e Pagina About

Hoje essas duas paginas so mostram um texto placeholder. Transforme elas em paginas de verdade.

### Home (`src/pages/Home/index.tsx`)

A Home e a primeira pagina que o usuario ve. Ela precisa:

1. Ter um **banner** com titulo, descricao do app e um botao que leva pra pagina de estabelecimentos
2. Mostrar as **categorias** disponiveis como cards clicaveis (voce ja tem o hook `useCategorias` — use ele)
3. Ter uma secao **"como funciona"** explicando o app em 3 passos

**Dica:** crie cada secao como um componente separado dentro da pasta `src/pages/Home/`. Crie tambem um `style.css` pra estilizar.

### About (`src/pages/About/index.tsx`)

Crie conteudo sobre o projeto e sobre voce:
- O que e o Guia Perola e qual problema resolve
- Tecnologias usadas (React, TypeScript, Supabase, React Router)
- Uma secao sobre voce como desenvolvedor

### Estude

- Componentizacao: quando faz sentido quebrar em componente separado?
- Props: olhe como `PlaceCard` recebe dados — o mesmo padrao serve pra qualquer componente
- CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

## Semana 2 - Melhorar a Pagina PlaceDetails

A pagina `src/pages/PlaceDetails/index.tsx` ta muito basica. Olhe o tipo `Estabelecimento` em `src/types/Estabelecimento.ts` — tem muito mais informacao disponivel do que voce esta mostrando.

### Tarefas

1. **Mostrar todas as informacoes** do estabelecimento: nome, categoria, subcategoria, avaliacao com estrelas, telefone, email, endereco completo e imagem grande no topo. Voce ja tem os icones em `src/assets/` (phone.png, mail.png, location.png, star.png)
2. **Criar um sistema visual de estrelas** baseado na nota de avaliacao (1 a 5)
3. **Adicionar botao de voltar** pra pagina de estabelecimentos (use o `useNavigation` que ja existe)
4. **Tratar o caso de acesso direto**: se o usuario entrar em `/PlaceDetails` sem ter selecionado nenhum lugar, o `selectedEstabelecimento` e `null`. Mostre uma mensagem util.
5. **Estilizar a pagina** — crie um `style.css` dentro da pasta PlaceDetails

### Estude

- Renderizacao condicional: `&&`, ternario, early return
- useContext: leia o `src/context/placeContext.tsx` e entenda o fluxo completo
- (Desafio extra) Pesquise `useParams` do React Router — como seria mudar a rota pra `/PlaceDetails/:id`?

---

## Semana 3 - Busca por nome e melhorias

### Tarefas

1. **Campo de busca por nome** na pagina Places (`src/pages/Places/index.tsx`):
   - Crie um state pra guardar o texto digitado
   - Filtre `estabelecimentosBanco` pelo nome (use `.filter()` e `.includes()` com `.toLowerCase()`)
   - Esse filtro deve funcionar junto com o filtro de categoria que ja existe
   - Mostre uma mensagem quando nao encontrar resultados

2. **Melhorar o PlaceCard** (`src/components/PlaceCard/index.tsx`):
   - Adicione `key={lugar.id}` no `.map()` (hoje nao tem key)
   - Coloque `alt` descritivo nas imagens
   - Mova os estilos inline dos `<hr>` pra o CSS

3. **(Extra)** Mostrar um contador de quantos estabelecimentos foram encontrados

### Estude

- Metodos de array: `.filter()`, `.map()`, `.find()`, `.includes()`
- Por que o React precisa de `key` no `.map()`? Qual a diferenca entre usar `index` vs `id`?
- Boas praticas: evitar estilos inline, usar classes CSS

---

## Semana 4 - Responsividade e polimento

### Tarefas

1. **Navbar responsiva** (`src/components/Navbar/index.tsx`):
   - Crie um menu hamburger pra telas pequenas
   - Use `useState` pra controlar aberto/fechado
   - Use `@media (max-width: 768px)` no CSS pra esconder/mostrar elementos

2. **Cards responsivos** na pagina Places:
   - Use CSS Grid com `auto-fill` e `minmax` pra os cards se ajustarem automaticamente

3. **Formulario responsivo** em Register:
   - `max-width`, `margin: 0 auto`, inputs com `width: 100%`
   - Fontes de no minimo 16px nos inputs (menor que isso o iOS da zoom)

4. **Testar tudo**:
   - Fluxo completo: cadastrar → listar → ver detalhes
   - Filtros de categoria + busca por nome
   - Responsividade: use o DevTools (F12 > icone de celular) pra testar em diferentes tamanhos

### Estude

- Media queries: `@media (max-width: 768px) { }`
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- Conceito de Mobile First
- DevTools do navegador: aba Elements, Console, Network

---
---

# PARTE 2 - Portfolio Pessoal

Agora voce vai criar um projeto novo do zero: seu portfolio de desenvolvedor. Crie um repositorio separado.

```bash
npm create vite@latest meu-portfolio -- --template react-ts
cd meu-portfolio
npm install react-router-dom
npm run dev
```

Limpe os arquivos padrao do Vite e comece do zero.

---

## Semana 5 - Estrutura e Pagina Inicial

### Tarefas

1. **Defina as paginas** do seu portfolio e configure o React Router. Sugestao de rotas: Home, Projetos, detalhe de um projeto, Habilidades, Contato.

2. **Navbar e Footer**: dessa vez, coloque eles FORA do `<Routes>` no App.tsx — assim aparecem em todas as paginas sem precisar importar em cada uma. Use `<Link>` do React Router ao inves de `useNavigation`.

3. **Pagina Home**: crie uma hero section de impacto. O recrutador gasta menos de 10 segundos nessa pagina — seja direto. Mostre quem voce e, o que faz, e botoes pra projetos e contato.

4. **Footer simples**: seu nome, ano, links pro GitHub e LinkedIn.

### Estude

- `<Link>` do React Router vs `useNavigate`: quando usar cada um?
- Unidade CSS `vh`: `100vh` = tela inteira
- Diferenca entre colocar Navbar dentro vs fora do Routes

---

## Semana 6 - Pagina de Projetos

Essa e a pagina mais importante do portfolio.

### Tarefas

1. **Crie um tipo** `Projeto` com as informacoes que fazem sentido (titulo, descricao, tecnologias, imagem, link do GitHub, etc). Pense em que campos um recrutador quer ver.

2. **Crie um arquivo de dados** em `src/data/projetos.ts` com seus projetos. O Guia Perola vai ser um deles! Diferente do Guia Perola onde os dados vem do Supabase, aqui os dados ficam no codigo — nem todo projeto precisa de banco.

3. **Crie um componente ProjetoCard**. Diferente do PlaceCard que recebe um array inteiro, faca esse receber UM projeto por vez — a pagina pai faz o `.map()`. Pense em por que isso e melhor.

4. **Pagina de listagem** com todos os projetos em grid.

5. **Pagina de detalhe** de um projeto usando rota dinamica (`/projeto/:id`). Use `useParams()` pra pegar o id da URL e `.find()` pra buscar no array. Trate o caso de projeto nao encontrado.

6. **Volte na Home** e mostre 2-3 projetos em destaque (filtre do mesmo array de dados).

**Dica das imagens:** tire screenshots dos seus projetos e coloque em `public/imagens/`. Pesquise a diferenca entre `public/` e `src/assets/`.

### Estude

- `useParams` do React Router
- `.find()` vs `.filter()` — quando usar cada um
- Dados estaticos vs dados de banco: quando cada abordagem faz sentido
- `target="_blank"` com `rel="noopener noreferrer"` — por que precisa?

---

## Semana 7 - Habilidades e Contato

### Tarefas

1. **Pagina de Habilidades**:
   - Crie um tipo `Habilidade` com nome, nivel (1 a 5) e categoria (frontend, ferramentas, etc)
   - Crie os dados em `src/data/habilidades.ts`
   - Agrupe por categoria usando `.filter()`
   - Crie uma **barra de progresso visual** pra cada habilidade. Use CSS: um div de fundo, um div interno com `width` em porcentagem. Adicione `transition` pra animar.

2. **Pagina de Contato**:
   - Formulario com nome, email e mensagem (use `<textarea>` pra mensagem — pesquise como funciona)
   - Mesma logica de formulario do Register: `useState`, `handleChange`, `handleSubmit`, renderizacao condicional pos-envio
   - Adicione links diretos: email (`mailto:`), GitHub, LinkedIn, WhatsApp (`https://wa.me/`)
   - Use atributos `required` e `type="email"` nos inputs — pesquise o que eles fazem

### Estude

- `<textarea>` no React
- Validacao nativa do HTML: `required`, `type="email"`, `minLength`
- CSS `transition` pra animacoes suaves
- Layout de 2 colunas com CSS Grid (info + formulario lado a lado)

---

## Semana 8 - GitHub e Deploy

Portfolio que so roda no localhost nao serve pra nada em entrevista. Hora de colocar no ar.

### Tarefas

1. **README profissional** nos dois projetos (Guia Perola e Portfolio):
   - O que e, screenshot, tecnologias, como rodar localmente
   - O README e a vitrine do repositorio — recrutadores olham ele ANTES do codigo

2. **Subir o Portfolio no GitHub**: `git remote add origin`, `git push`

3. **Deploy na Vercel** (gratis):
   - Crie conta em https://vercel.com (pode logar com GitHub)
   - Conecte o repositorio do portfolio
   - Faca o deploy
   - Depois disso, todo `git push` atualiza automaticamente

4. **Atualize seus links**:
   - URL do portfolio no perfil do GitHub
   - URL no LinkedIn
   - `linkDemo` nos dados do portfolio

### Estude

- Revisao de Git: `add`, `commit`, `push`, `status`, `log`
- O que e deploy e o que a Vercel faz por tras (build + hospedagem)
- Conceito basico de CI/CD (Continuous Deployment)

---

## Resumo

| Semana | Foco | Projeto |
|--------|------|---------|
| 1 | Home + About | Guia Perola |
| 2 | PlaceDetails completo | Guia Perola |
| 3 | Busca + melhorias | Guia Perola |
| 4 | Responsividade | Guia Perola |
| 5 | Estrutura + Home | Portfolio (novo) |
| 6 | Projetos + useParams | Portfolio |
| 7 | Habilidades + Contato | Portfolio |
| 8 | GitHub + Deploy | Ambos |

## Dicas gerais

- **Commit a cada tarefa concluida** — nao espere acumular. Ex: `git commit -m "home: hero banner e categorias"`
- **Errou? Desfaz**: `git checkout .` desfaz alteracoes nao commitadas
- **Console aberto sempre**: F12 > Console pra ver erros
- **Olhe o codigo existente antes de criar**: o projeto e sua melhor referencia
- **Portfolio e um projeto vivo**: continue adicionando projetos e melhorando mesmo depois das 8 semanas

Bons estudos!
