import React, { Component, Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


import Users from './containers/Users';
import NavBar from './components/NavBar/NavBar';

const Pizza = lazy(() => import('./containers/Pizza'));

const LazyPizza = () => (
  <div>
    <Suspense fallback = { <div> Please Wait... </div> } >
      <Pizza />
    </Suspense>
  </div>
);

class App extends Component {
  render () {
    const shouldRedirect = true;

    return (
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route  path='pizza' element={<LazyPizza />} />
            <Route path='*' element={shouldRedirect ? <Navigate replace to='/' /> : null } />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;