# Calculadora Gulp

Calculadora de soma simples com pipeline de build em Gulp. Projeto do curso B7Web, com depend?ncias atualizadas para eliminar vulnerabilidades conhecidas.

## Pr?-requisitos

- [Node.js](https://nodejs.org/) LTS

## Instala??o

```bash
npm install
```

## Build

Gera os arquivos otimizados em `public/`:

```bash
npm run build
```

Ou, de forma equivalente:

```bash
npx gulp
```

O build:

1. Copia os templates HTML de `src/templates/` para `public/`
2. Transpila o JavaScript com Babel, minifica e salva em `public/assets/js/`
3. Resolve imports de CSS, processa com Sass, minifica e salva em `public/assets/css/`

Depois do build, abra `public/index.html` no navegador para usar a calculadora.

## Estrutura do projeto

```
src/
  css/          # Estilos de origem
  js/           # Scripts de origem
  templates/    # P?ginas HTML
public/         # Sa?da do build (gerada, ignorada pelo Git)
gulpfile.js     # Tasks do Gulp
package.json
.gitignore
```

## Stack

- **Gulp 5** — orquestra??o do build
- **Babel** (`@babel/preset-env`) — transpila??o de JavaScript
- **Sass** (Dart Sass via `gulp-sass`) — processamento de CSS
- **gulp-uglify** / **gulp-uglifycss** — minifica??o
- **gulp-cssimport** — resolu??o de `@import` em CSS
- **gulp-rename** — renomea??o dos arquivos minificados

## Seguran?a

As depend?ncias foram modernizadas (incluindo a troca de `node-sass` por `sass` e a atualiza??o do Gulp e do Babel) para que `npm audit` reporte **0 vulnerabilidades**.
