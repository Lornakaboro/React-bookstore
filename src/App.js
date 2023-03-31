import './styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './Routes/Home';
import CategoriesPage from './Routes/Categories';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
