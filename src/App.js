import { createContext, useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import CreateButton from './components/CreateButton';
import Tasks from './components/Tasks';
import TitleNav from './components/Title_Nav';
import TrackBox from './components/TrackBox';

const DBContext = createContext();

export { DBContext };

function App() {
  const [DBUpdate, SetDBUpdate] = useState(true);
  const [Specific_Category, SetSpecific_Category] = useState("All")
  return (
    <div className="App">
    <DBContext.Provider value={{DBUpdate, SetDBUpdate}}>
      <TitleNav/>
      <TrackBox/>
      <Categories SetSpecific_Category={SetSpecific_Category}/>
      <CreateButton/>
      <Tasks Specific_Category={Specific_Category} SetSpecific_Category={SetSpecific_Category}/>
    </DBContext.Provider>
    </div>
  );
}

export default App;
