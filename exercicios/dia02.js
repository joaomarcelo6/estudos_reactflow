import { nodes, edges } from "./dados/fluxo.js";
import resumo, { buscarNo, filhosDe } from "./lib/grafo.js";

console.log(resumo(nodes, edges));
console.log(buscarNo(nodes, "3"));
