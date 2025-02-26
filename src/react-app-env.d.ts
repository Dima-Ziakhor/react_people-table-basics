// eslint-disable-next-line
/// <reference types="react-scripts" />

interface Person {
  name: string,
  sex: string,
  born: number,
  died: number,
  fatherName: string,
  motherName: string,
  slug: string
}

type GetPeople = () => Promise<Person[]>;
