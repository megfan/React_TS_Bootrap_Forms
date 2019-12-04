import React, { useState, useContext } from 'react';
import './App.css';
import UserContext from './UserContexr'

import Page1 from './Page1'
import Page4 from './Page4'
import Page2 from './Page2'
import Page3 from './Page3'

const App: React.FC = () => {

  const [page, setPage] = useState<number>(2);
  const pages = [<Page1 page={nextPage}/>, <Page2 page={nextPage}/>, <Page3/>, <Page4 onSubmit={() => console.log('Page4')}/>]

  function nextPage(){    
    setPage(page + 1);
  }
  function prevPage(){
    if(page > 0){
    setPage(page - 1);
    }
  }

  return (
    <UserContext.Provider value={page}>
      <div className="App">      
        {/* <Page1 onSubmit={({firstName, lastName, email}) => {
            console.log(firstName, lastName, email)
          }} /> */}
          {pages[page]}
        <footer>
          <button onClick={prevPage}>prev</button>
          <button onClick={nextPage}>next</button>        
        </footer>
      </div>
    </UserContext.Provider>
  );
};

export default App;

