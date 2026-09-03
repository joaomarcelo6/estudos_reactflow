import { nodes, edges } from "../dados/fluxo.js";

export function salvaFluxo(fluxo) {
  return new Promise(function (resolve, reject) {
    setTimeout(
      () => resolve({ ok: true, salvoEm: new Date().toISOString() }),
      300,
    );
  });
}

export function carregaFluxo(id) {
  return new Promise(function (resolve, reject) {
    if (id === "fluxo-1") {
      resolve({ nodes, edges });
    } else {
      reject(new Error("Falha ao carregar fluxo"));
    }
  });
}
