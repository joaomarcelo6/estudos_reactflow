export function buscarNo(nodes, id) {
  return nodes.find((no) => no.id === id);
}

export function filhosDe(nodes, edges, id) {
  return edges.filter((e) => e.source === id).map((e) => e.target);
}

export default function resumo(nodes, edges) {
  return `${nodes.length} nós, ${edges.length} conexões`;
}
