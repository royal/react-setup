import { useQuery } from 'hooks/api/useQuery';
import { getRepository } from 'api/github';
import { Repository } from 'api/github/types';

export const useRepository = (org: string, repo: string) => useQuery<Repository, unknown>(
  ['github/repository', org, repo],
  async () => await getRepository(org, repo));
