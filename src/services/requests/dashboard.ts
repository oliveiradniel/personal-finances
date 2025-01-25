import { api } from '../api';

import { formatDate } from '../../utils/formatDate';

import { ApiGetDashboard } from '../../@types/Transaction';

export async function getDashboard(month: string, year: string) {
  const response = await api<ApiGetDashboard>({
    endpoint: '/dashboard',
  });

  let balance = 0;
  const pending_transactions = response.data?.peding_transactions ?? 0;
  const completed_transactions = response.data?.completed_transactions ?? 0;

  if (response.data) {
    response.data.transactions.map((transaction) => {
      const date = formatDate(transaction.created_at).split('/');

      if (date[1] == month && date[2] === year) balance += transaction.amount;
    });
  }

  return { balance, pending_transactions, completed_transactions };
}
