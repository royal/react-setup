import { useQuery } from 'hooks/api/useQuery';
import { getRepositoryFileTree } from 'api/github';
import { RepositoryTree } from 'api/github/types';

export const useRepositoryFileTree = (owner: string, repo: string, sha: string) => useQuery<RepositoryTree, unknown>(
  ['github/repository', owner, repo, sha],
  async () => await getRepositoryFileTree(owner, repo, sha));
