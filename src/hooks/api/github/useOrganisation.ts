import { useQuery } from 'react-query';
import { useOrganisationRepositories } from './useOrganisationRepositories';
import { getOrganisation } from 'api/github';
import { Organisation } from 'api/github/types';

export const useOrganisation = (org: string) => {

  const organisation = useQuery<Organisation, unknown>(['github/organisation', org], async () => await getOrganisation(org));
  const repositories = useOrganisationRepositories(org);

  return {
    organisation,
    repositories,
  };
}
