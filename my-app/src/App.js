// U09226075
// App.js

import TaskGenerator from './taskGenerator.js';
import FancyText from './FancyText.js';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="app-title">
        <FancyText title={true} text="Task Motivator"/>
      </div>
      <TaskGenerator/>
    </div>
  );
}

export default App;
