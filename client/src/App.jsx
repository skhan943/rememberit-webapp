import React from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from './views/HomePage';
import CreatePage from './views/CreatePage';
import UpdatePage from './views/UpdatePage';
import SearchPage from './views/SearchPage';
import ViewSinglePage from './views/ViewSinglePage';
import DeleteConfirm from './views/DeleteConfirm';

const App = () => {
  return(
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/:id' element={<ViewSinglePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/:id/update' element={<UpdatePage />} />
      <Route path='/:id/delete' element={<DeleteConfirm />} />
    </Routes>
  )
}

export default App;
