export function formatDate(date: number) {
  new Intl.DateTimeFormat('pt-BR').format(date);
}
