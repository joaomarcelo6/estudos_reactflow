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
  const idNoNovo = "6";
  const no = {
    id: idNoNovo,
    type: type,
    position: { x: 100, y: 200 },
    data: { label: "Label teste" },
  };
  const edges = alvos.map((t) => ({
    id: `e${idNoNovo}-${t}`,
    source: idNoNovo,
    target: t,
  }));
  return { no, edges };
}

//Funções do dia 3

export function resumirNo({ id, type, data: { label } }) {
  return `[${id}] ${type}: ${label}`;
}

export function rotulos(nodes) {
  return nodes.map(({ data: { label } = {} }) => label);
}

export function pares(objeto) {
  return Object.entries(objeto).map(([chave, valor]) => `${chave}=${valor}`);
}

export function estatisticas(nodes) {
  const contagem = nodes.reduce((acumulador, itens) => {
    acumulador[itens.type] = (acumulador[itens.type] ?? 0) + 1;
    return acumulador;
  }, {});
  const maisComum = Object.entries(contagem).reduce(
    ([melhorTipo, melhorContagem], [chave, valor]) =>
      melhorContagem > valor ? [melhorTipo, melhorContagem] : [chave, valor],
  )[0];
  return { contagem, maisComum };
}

export function exportar(fluxo) {
  return JSON.stringify(fluxo, null, 2);
}

export function importar(texto) {
  return JSON.parse(texto);
}

export function clonar(fluxo) {
  return JSON.parse(JSON.stringify(fluxo));
}
