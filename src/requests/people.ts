const URL = 'https://mate-academy.github.io/react_people-table/api/people.json';

export const getPeople = async (): Promise<Person[]> => {
  try {
    const request = await fetch(URL);
    const response = await request.json();

    return response;
  } catch {
    throw new Error('Failed to fetch');
  }
};
