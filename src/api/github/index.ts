import { Organisation, Repository } from './types'

const apiUrl = "https://api.github.com";

export const getOrganisation = async (organisation: string): Promise<Organisation> => {
  const response = await fetch(`${apiUrl}/orgs/${organisation}`);
  return await response.json() as Organisation;
}

export const getRepositoriesForOrganisation = async (organisation: string): Promise<Repository[]> => {
  const response = await fetch(`${apiUrl}/orgs/${organisation}/repos`);
  return await response.json() as Repository[];
}
