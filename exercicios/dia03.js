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
} from "./lib/grafo.js";

const config = { largura: 800, altura: 600, cor: "azul" };

const { largura, altura } = config;
const { cor: corDeFundo } = config; // renomeia
const { profundidade = 0 } = config; // valor padrão se não existir

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
