import { useOrganisationRepositories } from './useOrganisationRepositories';
import { useOrganisation } from './useOrganisation';

export const useExtendedOrganisation = (org: string) => {

  const organisation = useOrganisation(org);
  const repositories = useOrganisationRepositories(org);

  return {
    organisation,
    repositories,
  };
}
