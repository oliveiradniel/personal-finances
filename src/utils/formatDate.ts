export function formatDate(date: number) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}
