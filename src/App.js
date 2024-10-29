import './App.css';
import Header from './components/header';
import Form from './components/form';
import Imageupload from './components/imageupload';
import Task_management from './components/task_management';
import User_profiles from './components/user_profiles';

function App() {
  return (
    <div>
      <Header/>
      <Form/>
      <Imageupload/>
      <User_profiles/>
      <Task_management/>
    </div>
  );
}

export default App;
