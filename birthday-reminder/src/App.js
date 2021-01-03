import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} {people.length === 1 ? 'birthday' : 'birthdays'} today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
