import{BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Login from "./Components/Login";
import Register from "./Components/Register";
const App = () => {
  const[data,setData]=useState();
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>} >
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;