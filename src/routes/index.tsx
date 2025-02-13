import { Route, Routes } from 'react-router-dom';

import Auth from '../pages/Auth';

export default function Router() {
  return (
    <Routes>
      <Route path="/signin" element={<Auth type="signin" />} />
      <Route path="/signup" element={<Auth type="signup" />} />
    </Routes>
  );
}
