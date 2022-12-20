import React from 'react';
import { Header } from './components/Header/Header';
import { AppRouter } from './components/General/AppRouter';
import { getAuth } from './modules/auth';
import {shallowEqual, useSelector } from 'react-redux';

function App() {
  const auth = useSelector(getAuth, shallowEqual);

  return (
      <div className="App">
        {(auth && auth.success && JSON.parse(auth.success) === true) ?
          <Header id={'header'}/> : null
        }
        <section className="App__content">
          <AppRouter/>
        </section>
      </div>
  );
}

export default App;
