import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import Login from './component/Auth/Login';
import SignUp from './component/Auth/Signup';
import { QueryClient } from "@tanstack/react-query";
import Index from './component/Admin/Index/Index';
import Tracking from './component/Admin/Trackings/Tracking';
import Register from './component/Admin/RegisterAdmin/Register';
import Analytics from './component/Admin/Analytics/Analytics';


const queryClient = new QueryClient();

function App() {
  return (

  
   <div className="">


        <Router>
          <Routes>
            
            {/* Add other routes here */}
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* dashboard */}
            <Route path="/index" element={<Index />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/register" element={<Register />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Router>
   </div>
  
  );
}

export default App;
