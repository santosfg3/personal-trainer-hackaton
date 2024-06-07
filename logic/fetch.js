export async function fecthAllHoursAvailable(weekDay) {
  const option = {
    method: "GET",
    headers: { "Content-Type": "aplication/json" },
  };
  const res = await fetch(`/api/calendario/${weekDay}`, option);
  const resultado = res.status === 200 ? res.json() : [];
  return resultado;
}
export async function fetchUserInfo(token) {
  const option = {
    method: "GET",
    headers: { "Content-Type": "aplication/json" },
  };
  const res = await fetch(`/api/${token}`, option);
  const resultado = res.status === 200 ? res.json() : [];
  return resultado;
}