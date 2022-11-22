import React, { Component, Suspense, lazy } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';


import Users from './containers/Users';

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
        <div>
          <Link to='/'> Users </Link>
          <Link to='/pizza'> Pizza </Link>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route  path='/pizza' element={<LazyPizza />} />
            <Route path='*' element={shouldRedirect ? <Navigate replace to='/' /> : null } />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;