import { nodes, edges } from "./dados/fluxo.js";
import resumo, {
  buscarNo,
  filhosDe,
  condicaoDaAresta,
  operadorDoNo,
  primeiraOpcao,
  comDefaults,
  adicionarNo,
  removerNo,
  criarNo,
  resumirNo,
  rotulos,
  pares,
  estatisticas,
  exportar,
  importar,
  clonar,
} from "./lib/grafo.js";

const config = { largura: 800, altura: 600, cor: "azul" };

const { largura, altura } = config;
const { cor: corDeFundo } = config; // renomeia
const { profundidade = 0 } = config; // valor padrão se não existir

const fluxo = { nodes, edges };

console.log(config);
console.log(largura);
console.log(altura);
console.log(corDeFundo);
console.log(profundidade);

console.log(resumirNo(nodes[0]));
console.log("\n");

console.log(rotulos(nodes));
console.log("\n");

console.log(pares(buscarNo(nodes, "1")));
console.log(pares({ message: 3, question: 2 }));
console.log("\n");

const teste = [...nodes, ...nodes, nodes[0]];
console.log(estatisticas(teste));
console.log(estatisticas(nodes));
console.log("\n");

console.log(exportar({ nodes, edges }));
console.log("\n");

const volta = importar(exportar({ nodes, edges }));
console.log(volta);

console.log(volta.nodes[0] === fluxo.nodes[0]);
console.log("\n");

//Testes do clonar

const copia = clonar(fluxo);
copia.nodes[0].data.label = "MUDOU";

console.log(copia.nodes[0].data.label);
console.log(nodes[0].data.label);
console.log("\n");

console.log(
  JSON.parse(JSON.stringify({ f: () => 1, u: undefined, d: new Date() })),
);
