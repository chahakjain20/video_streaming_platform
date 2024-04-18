import Body from "./components/Body";
import { Toaster } from 'react-hot-toast';
import movieDialog from "./components/movieDialog";

function App() {
  return (
    <div>
     <Body/>
     <Toaster/>
     <movieDialog/>
    </div>
  );
}

export default App;
