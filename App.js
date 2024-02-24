// import logo from './logo.svg';
import './App.css';
import { ExpenseTrackerApp } from './component/ExpenseTrackerApp';

import'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
    {
      <ExpenseTrackerApp></ExpenseTrackerApp>
    }
    
    </div>
    

  );
}

export default App;
