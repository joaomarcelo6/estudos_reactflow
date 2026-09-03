import { buscarNo } from "./grafo.js";

export function podeConectar(nodes, edges, source, target) {
  const noDeOrigem = buscarNo(nodes, source);

  const jaExiste = edges.some(
    (a) => a.source === source && a.target === target,
  );

  if (noDeOrigem.type === "fim") {
    return false;
  } else if (source === target) {
    return false;
  } else if (jaExiste) {
    return false;
  }
  return true;
}
