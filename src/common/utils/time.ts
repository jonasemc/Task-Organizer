export function tempoParaSegundos(tempo: string) {
  //split: quebra uma string em um array de varias strings;
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horasEmSegundos = Number(horas) * 3600;
  const minutosEmSegundos = Number(minutos) * 60;
  return horasEmSegundos + minutosEmSegundos + Number(segundos);
}
