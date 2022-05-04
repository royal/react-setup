const apiUrl = "https://api.github.com";

export const getRepositoryForOrganisation(organisation: string): Promise<any> => {

  const response = await fetch(`${apiUrl}/orgs/${organisation}/repos`);

  const data = await response.json();

}
