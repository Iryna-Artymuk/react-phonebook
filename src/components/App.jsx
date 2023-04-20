import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import HomePage from './pages/Home';
import ContactsPage from './pages/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
