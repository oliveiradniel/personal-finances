import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';

import Auth from '../pages/Auth';

export default function Router() {
  return (
    <Routes>
      <Route path="/signin" element={<Auth type="signin" />} />
      <Route path="/signup" element={<Auth type="signup" />} />

      <Route element={<Layout />}>
        <Route
          index
          element={
            <div>
              <h1>Essa é a página inicial</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
