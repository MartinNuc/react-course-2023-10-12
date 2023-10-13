import { Table } from '../table';
import { CounterButton } from '../counter-button';
import { RandomNumbers } from '../random-numbers';
import { Hider } from '../hider';
import { AutomaticCounter } from '../automatic-counter';
import { Dropdown } from '../dropdown/dropdown';
import { Joke } from '../joke';
import { ToggleThemeButton } from '../toggle-theme';

export const Home = () => {
  const pole = [1, 2, 3, 4];

  return (
    <>
      <h1>Hello {pole}</h1>

      <Joke />

      <Dropdown title="show dropdown">
        Tohle je dropdown content:
        <ul>
          <li>google.com</li>
          <li>facebook.com</li>
          <li>seznam.cz</li>
        </ul>
      </Dropdown>

      <Hider>
        <AutomaticCounter />
      </Hider>
      <RandomNumbers pregeneratedCount={5} />
      <CounterButton />
      <ToggleThemeButton />
      <Table rows={3} columns={4} />
    </>
  );
};
