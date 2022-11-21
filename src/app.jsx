import React, { Component, Suspense } from 'react';
import { Link, Route, Routes, } from 'react-router-dom';

import Pizza from './containers/Pizza/';
import Users from './containers/Users';

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
          <Layout>
            <Routes>
              <Route path='/' element={<Users />} />
              <Route  path='/pizza' element={<LazyPizza />} />
              <Route path='*' element={shouldRedirect ? <Navigate replace to='/' /> : null } />
            </Routes>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;