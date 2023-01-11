import { Route, Routes } from 'react-router-dom';
import { RouterPage } from './PageRouter';
import { Login } from '../pages/Login';

export const AppRouter = () => {
  return (
    <>
        <Routes> 
            <Route path="login" element={<Login />} />
            <Route path="/*" element={ <RouterPage />} />
        </Routes>
    </>
  )
}