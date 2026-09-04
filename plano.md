### Dia 01 · 28/08

Só leitura (cap. 2 até loops). Sem código.
**Travei:** método errado — leitura passiva e transcrição no caderno.
**Commit:** nenhum.

### Dia 02 · 29/08 – 30/08

Seis funções em `exercicios/dia01.js`. Defesa oral das 12 perguntas.
**Travei:** `reduce`, callbacks aninhados, `return` vs `console.log`.
**Commit:** `a3f9c21`

### Dia 03 · 01/09 – 02/09

Conteúdo do dia 2 do plano: módulos, optional chaining, spread/rest, async/await.
Oito exercícios em `exercicios/dia02.js`, com `lib/grafo.js`, `lib/persistencia.js`
e `lib/valida.js`. `package.json` com `"type": "module"`. Defesa oral das 3 perguntas.
**Travei:** construir objetos dentro de `map` (`criarNo`) — o dia todo foi leitura de
objetos, e inverter a direção custou. Extensão `.js` obrigatória no import; parênteses
em arrow function retornando objeto literal.
**Commit:** `05b7c2f`..`bc3c519` (6 commits)

### Dia 04 · 03/09 – 04/09

Conteúdo do dia 3 do plano: destructuring (objeto, array, aninhado, em parâmetro),
`Object.keys`/`values`/`entries`, JSON e imutabilidade. Seis exercícios em
`exercicios/dia03.js`, com `resumirNo`, `rotulos`, `pares`, `estatisticas`,
`exportar`/`importar` e `clonar` em `lib/grafo.js`. Defesa oral das 12 perguntas.
**Travei:** onde o destructuring pode acontecer — tentei fazê-lo fora do lugar onde
o dado chega (importando `nodes` inexistente, destructurando o array em vez do nó,
`= label` referenciando a própria variável). No `reduce` do `maisComum`: o tipo do
que o callback devolve vira o acumulador da próxima iteração, então par tem que
devolver par. Também confundi cópia com referência — `===` entre objetos compara
endereço, não conteúdo.
**Commit:**
