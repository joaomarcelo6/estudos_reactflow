const nodes = [
  {
    id: "1",
    type: "mensagem",
    position: { x: 0, y: 0 },
    data: { label: "Olá! Sou o bot." },
  },
  {
    id: "2",
    type: "pergunta",
    position: { x: 0, y: 100 },
    data: { label: "O que deseja?", opcoes: ["Comprar", "Suporte"] },
  },
  {
    id: "3",
    type: "mensagem",
    position: { x: -150, y: 200 },
    data: { label: "Vou te levar à loja." },
  },
  {
    id: "4",
    type: "mensagem",
    position: { x: 150, y: 200 },
    data: { label: "Chamando um atendente." },
  },
  { id: "5", type: "fim", position: { x: 0, y: 300 }, data: { label: "Fim" } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", label: "Comprar" },
  { id: "e2-4", source: "2", target: "4", label: "Suporte" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-5", source: "4", target: "5" },
];

function buscarNo(nodes, id) {
  return nodes.find((no) => no.id === id);
}

console.log(buscarNo(nodes, "3"));

function nosOrfaos(nodes, edges) {
  return nodes.filter((no) => edges.some((e) => e.target === no.id) !== true);
}

console.log(nosOrfaos(nodes, edges));

function filhosDe(edges, id) {
  return edges.filter((e) => e.source === id).map((e) => e.target);
}

console.log(filhosDe(edges, "1"));

function paraTexto(nodes, edges) {
  return edges
    .map((e) => {
      const origem = buscarNo(nodes, e.source).type;
      const chegada = buscarNo(nodes, e.target).type;
      return `${e.source} (${origem}) --> ${e.target} (${chegada})`;
    })
    .join("\n");
}

console.log(paraTexto(nodes, edges));

function contaPorTipo(nodes) {
  return nodes.reduce((acumulador, itens) => {
    acumulador[itens.type] = (acumulador[itens.type] ?? 0) + 1;
    return acumulador;
  }, {});

  /* Loop executa a mesma coisa
  const acumulador = {};
  for (let i = 0; i < nodes.length; i++) {
    acumulador[nodes[i].type] = (acumulador[nodes[i].type] ?? 0) + 1;
  }
  return acumulador; 
  */
}

console.log(contaPorTipo(nodes));

function moverNo(nodes, id, dx, dy) {
  return nodes.map((no) => {
    if (no.id !== id) {
      return no;
    } else {
      const originalX = no.position.x;
      const originalY = no.position.y;
      const deslocamento = {
        ...no,
        position: { x: originalX + dx, y: originalY + dy },
      };
      return deslocamento;
    }
  });
}

console.log(moverNo(nodes, "1", 10, 10));

const novos = moverNo(nodes, "1", 10, 10);
console.log(novos[0] === nodes[0]);
console.log(novos[1] === nodes[1]);
console.log(nodes[0].position);
