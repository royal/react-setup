import type { Organisation, Repository } from './types'

const apiUrl = "https://api.github.com";

const buildRequest = (url: string) => {
  const request = new Request(url);
  request.headers.append('Accept', 'application/vnd.github.v3+json');

  return request;
}

export const getOrganisation = async (organisation: string): Promise<Organisation> => {
  const response = await fetch(buildRequest(`${apiUrl}/orgs/${organisation}`));
  return await response.json() as Organisation;
}

export const getRepositoriesForOrganisation = async (organisation: string): Promise<Repository[]> => {
  const response = await fetch(buildRequest(`${apiUrl}/orgs/${organisation}/repos`));
  return await response.json() as Repository[];
}
