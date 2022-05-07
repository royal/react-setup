import { useQuery } from 'react-query';
import { getOrganisation } from 'api/github';
import { Organisation } from 'api/github/types';

export const useOrganisation = (org: string) => useQuery<Organisation, unknown>(
  ['github/organisation', org],
  async () => await getOrganisation(org));
