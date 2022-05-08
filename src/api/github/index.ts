import type { Organisation, Repository, RepositoryTree } from './types'

const buildRequest = (endpoint: string) => {
  const request = new Request(`https://api.github.com/${endpoint}`);
  request.headers.append('Accept', 'application/vnd.github.v3+json');

  return request;
}

export const getOrganisation = async (organisation: string): Promise<Organisation> => {
  const response = await fetch(buildRequest(`orgs/${organisation}`));
  return await response.json() as Organisation;
}

export const getRepositoriesForOrganisation = async (organisation: string): Promise<Repository[]> => {
  const response = await fetch(buildRequest(`orgs/${organisation}/repos`));
  return await response.json() as Repository[];
}

export const getRepository = async (owner: string, repository: string): Promise<Repository> => {
  const response = await fetch(buildRequest(`repos/${owner}/${repository}`));
  return await response.json() as Repository;
}

export const getRepositoryFileTree = async (owner: string, repository: string, sha: string): Promise<RepositoryTree> => {
  const response = await fetch(buildRequest(`repos/${owner}/${repository}/git/trees/${sha}`));
  return await response.json() as RepositoryTree;
}
