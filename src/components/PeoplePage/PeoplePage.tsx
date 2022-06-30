import React, { useEffect } from 'react';
import { PeopleTable } from '../PeopleTable';
import { Preloader } from '../Preloader';

import './PeoplePage.scss';

type Props = {
  getPeople: GetPeople;
  people: Person[] | null;
  usePeople(responseFromServer: Person[]): void;
};

export const PeoplePage:React.FC<Props> = ({
  getPeople, people, usePeople,
}) => {
  useEffect(() => {
    async function response() {
      const responseFromServer = await getPeople();

      // eslint-disable-next-line react-hooks/rules-of-hooks
      usePeople(responseFromServer);
    }

    response();
  }, [people]);

  return (
    <div className="people">
      <h2 className="people__title">People</h2>
      {
        people ? (
          <PeopleTable
            people={people}
          />
        ) : (
          <Preloader />
        )
      }
    </div>
  );
};
