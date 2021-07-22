import List from './components/List';
import Button from './components/Button';

function App() {
  const clickHandler = () => {
    console.log('You clicked me!!!');
  };

  return (
    <>
      <main>
        <section className='container'>
          <h3>0 birthdays today</h3>
          <List />
          <Button onClick={clickHandler} type='button'>
            Clear All
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
