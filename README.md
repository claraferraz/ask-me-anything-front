# ask-me-anything-front

utilizamos o react 19 com typescript, tailwind, react-router-dom
lucide-react para ícones

instalações:

começar o projeto com vite:
npm vite@latest
escolher react e typescript

para o react 19:
npm install --save-exact react@rc react-dom@rc

no package.json:

"devDependencies": {
"@types/react": "npm:types-react@rc",
"@types/react-dom": "npm:types-react-dom@rc"
},
"overrides": {
"@types/react": "npm:types-react@rc",
"@types/react-dom": "npm:types-react-dom@rc"
}
documentação:
https://react.dev/blog/2024/04/25/react-19-upgrade-guide

instalar npm: -f para forçar a instalação com react 19
npm i -f

react router dom:
npm react-router-dom -f

tailwind:
npm i tailwindcss postcss autoprefixer -D -f

lucide icons:
npm i lucide-react -f

em caso de erro de importação no código, basta reiniciar o vscode

react-query:
npm i @tanstack/react-query -f
