import { useQuery } from 'hooks/api/useQuery';
import { getRepository } from 'api/github';
import { Repository } from 'api/github/types';

export const useRepository = (owner: string, repo: string) => useQuery<Repository, unknown>(
  ['github/repository', owner, repo],
  async () => await getRepository(owner, repo));
