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
} from "./lib/grafo.js";
import { salvaFluxo, carregaFluxo } from "./lib/persistencia.js";
import { podeConectar } from "./lib/valida.js";

console.log(resumo(nodes, edges));
console.log(buscarNo(nodes, "3"));
console.log("\n");

console.log(condicaoDaAresta(edges[0]));
console.log(condicaoDaAresta(edges[1]));
console.log(condicaoDaAresta(edges[2]));
console.log(condicaoDaAresta(edges[3]));
console.log("\n");

console.log(operadorDoNo(nodes[0]));
console.log(operadorDoNo(nodes[1]));
console.log(operadorDoNo(nodes[2]));
console.log(nodes.map(operadorDoNo));
console.log("\n");

console.log(primeiraOpcao(nodes[0]));
console.log(primeiraOpcao(nodes[1]));
console.log(primeiraOpcao(nodes[1]));
console.log(nodes.map(primeiraOpcao));
console.log("\n");

console.log(comDefaults(nodes[0]));
console.log(comDefaults(nodes[4]));
console.log("\n");

console.log(
  adicionarNo(nodes, {
    id: "6",
    type: "",
    position: { x: 0, y: 0 },
    data: { label: "", prompt: "" },
  }),
);
console.log("\n");

console.log(removerNo(nodes, "2"));

console.log(criarNo("mensagem", "2", "5"));
console.log(criarNo("fim", "3"));
console.log(criarNo("llm"));
console.log("\n");

async function teste() {
  try {
    const retornoCerto = await carregaFluxo("fluxo-1");
    console.log(retornoCerto);
    const retornoErrado = await carregaFluxo("fluxo-9");
    console.log(retornoErrado);
  } catch (erro) {
    new Error("Falha ao carregar fluxo");
    console.log(erro.message);
  }
}

console.log("\n");
console.log(podeConectar(nodes, edges, "5", "3"));
console.log(podeConectar(nodes, edges, "3", "3"));
console.log(podeConectar(nodes, edges, "2", "4"));
console.log(podeConectar(nodes, edges, "1", "5"));
