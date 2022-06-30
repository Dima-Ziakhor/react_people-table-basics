import React from 'react';

import './PeopleTable.scss';

type Props = {
  people: Person[] | null;
};

export const PeopleTable:React.FC<Props> = ({ people }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {
          people?.map(({
            name, sex, born, died, motherName, fatherName,
          }) => (
            <tr key={name} className="table__row">
              <td>{name}</td>
              <td>{sex}</td>
              <td>{born}</td>
              <td>{died}</td>
              <td>{motherName}</td>
              <td>{fatherName}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
