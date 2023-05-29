import UserLogin from "./Components/User/UserLogin";
import AdminLogin from "./Components/Admin/AdminLogin";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import QuestionForm from "./Components/Admin/QuestionForm";
import QuestionList from "./Components/Admin/QuestionList";
import QuestionEditForm from "./Components/Admin/QuestionEditForm";
import ViewQuestion from "./Components/Admin/ViewQuestion";


function App() {
return (
  <div>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/create-question" element={<QuestionForm />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/edit-question/:id" element={<QuestionEditForm />} />
        <Route path="/view-questions" element={<ViewQuestion />} />
 </Routes>
      </Router>
      </div>
  );
}

function Home() {
  return (
    <div>
    <h1>Welcome to the Home Page</h1>
    <p>
      <Link to="/user"> User Login</Link>
      <Link to="/admin">Admin Login</Link>
      <Link to="/create-question">Create Question</Link>
      <Link to="/questions">Question List</Link>
      <Link to="/view-questions">View Questions</Link>
    </p>
    </div>
  );
}

export default App;
