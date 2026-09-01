export function buscarNo(nodes, id) {
  return nodes.find((no) => no.id === id);
}

export function filhosDe(nodes, edges, id) {
  return edges.filter((e) => e.source === id).map((e) => e.target);
}

export default function resumo(nodes, edges) {
  return `${nodes.length} nós, ${edges.length} conexões`;
}

export function condicaoDaAresta(edge) {
  return edge.data?.condicao ?? "sem condição";
}

/* 
export function condicaoDaAresta(edge) {
   if (edge.data) {
     if (edge.data.condicao) {
       return edge.data.condicao;
     }
   }
   return "sem condição";
} 
*/

export function operadorDoNo(no) {
  return no.data.regra?.operador ?? null;
}

export function primeiraOpcao(no, argumento) {
  return no.data.opcoes?.[0];
}

export function comDefaults(no) {
  const padrao = { texto: "", opcoes: [], delay: 0 };
  return { ...no, data: { ...padrao, ...no.data } };
}

export function adicionarNo(nodes, novo) {
  return [...nodes, novo];
}

export function removerNo(nodes, id) {
  return nodes.filter((no) => no.id !== id);
}

export function criarNo(type, ...alvos) {
  const id = "novo";
}
