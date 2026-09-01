export const nodes = [
  {
    id: "1",
    type: "mensagem",
    position: { x: 0, y: 0 },
    data: { label: "Boas-vindas", texto: "Olá!" },
  },
  {
    id: "2",
    type: "pergunta",
    position: { x: 200, y: 0 },
    data: { label: "Menu", opcoes: ["Comprar", "Suporte"] },
  },
  {
    id: "3",
    type: "condicional",
    position: { x: 400, y: -80 },
    data: {
      label: "Tem cadastro?",
      regra: { campo: "cliente_id", operador: "existe" },
    },
  },
  {
    id: "4",
    type: "llm",
    position: { x: 400, y: 80 },
    data: { label: "Resposta livre", prompt: "Responda como atendente" },
  },
  {
    id: "5",
    type: "fim",
    position: { x: 600, y: 0 },
    data: { label: "Encerrar" },
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", data: { condicao: "Comprar" } },
  { id: "e2-4", source: "2", target: "4", data: { condicao: "Suporte" } },
  { id: "e3-5", source: "3", target: "5" },
];
