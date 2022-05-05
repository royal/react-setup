import { useQuery } from 'react-query';

import { getRepositoriesForOrganisation } from 'api/github';
import { Repository } from 'api/github/types';

export const useOrganisationRepositories = (org: string) => useQuery<Repository[], unknown>(
  ['github/organisation/repos', org],
  async () => await getRepositoriesForOrganisation(org));
