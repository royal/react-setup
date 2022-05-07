import { useQuery } from 'hooks/api/useQuery';
import { getRepositoriesForOrganisation } from 'api/github';
import { Repository } from 'api/github/types';

export const useOrganisationRepositories = (org: string) => useQuery<Repository[], unknown>(
  ['github/organisation/repos', org],
  async () => await getRepositoriesForOrganisation(org));
