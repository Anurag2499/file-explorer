import Folder from './components/Folder';
import explorer from './data/folderData';
import './style.css';
import { useState } from 'react';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  console.log(explorerData);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
