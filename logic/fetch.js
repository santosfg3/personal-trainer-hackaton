export async function fecthAllHoursAvailable() {
  const option = {
    method: "GET",
    headers: { "Content-Type": "aplication/json" },
  };
  const res = await fetch("/api/calendario/horasDisponiveis", option);
  const resultado = res.status === 200 ? res.json() : [];
  return resultado;
}
