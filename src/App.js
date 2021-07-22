import { useState } from 'react';
import data from './data';
import List from './components/List';
import Button from './components/Button';

function App() {
  const [people, setPeople] = useState(data);

  const clickHandler = () => {
    console.log(people);
  };

  return (
    <>
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <Button onClick={clickHandler} type='button'>
            Clear All
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
