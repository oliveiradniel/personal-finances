import { api } from '../api';

import {
  ApiDeleteTransaction,
  ApiGetTransaction,
  ApiGetTransactions,
  ApiNewTransaction,
  ApiUpdateTransaction,
  TransactionStatus,
} from '../../@types/Transaction';

export async function getTransactions(page: number) {
  return await api<ApiGetTransactions>({
    endpoint: '/transactions',
    data: { page },
  });
}

export async function getTransaction(id: number) {
  return await api<ApiGetTransaction>({
    endpoint: `/transaction/${id}`,
  });
}

export async function newTransaction(
  title: string,
  amount: number,
  status?: TransactionStatus
) {
  return await api<ApiNewTransaction>({
    endpoint: '/transactions',
    method: 'POST',
    data: { title, amount, status },
  });
}

export async function updateTransaction(
  id: string,
  title: string,
  amount: number,
  status: TransactionStatus
) {
  return await api<ApiUpdateTransaction>({
    endpoint: `/transactions/${id}`,
    method: 'POST',
    data: { title, amount, status },
  });
}

export async function deleteTransaction(id: number) {
  return await api<ApiDeleteTransaction>({
    endpoint: `/transactions/${id}`,
    method: 'DELETE',
  });
}
