import logo from './logo.svg';
import './App.css';
import UserCard from './Features/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <UserCard width= "100px" height="100px" name="noy" age={22} phone="0546265575" photo ="https://instaface.co.il/wp-content/uploads/2020/03/%D7%9C%D7%94%D7%A4%D7%95%D7%9A-%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9C%D7%A6%D7%99%D7%95%D7%A8-7-1.png"/>
      <UserCard width= "50px" height="50px"  name="noy" age={22} phone="0546265575" photo ="https://instaface.co.il/wp-content/uploads/2020/03/%D7%9C%D7%94%D7%A4%D7%95%D7%9A-%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9C%D7%A6%D7%99%D7%95%D7%A8-7-1.png"/>
      <UserCard width= "120px" height="120px"  name="noy" age={22} phone="0546265575" photo ="https://instaface.co.il/wp-content/uploads/2020/03/%D7%9C%D7%94%D7%A4%D7%95%D7%9A-%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9C%D7%A6%D7%99%D7%95%D7%A8-7-1.png"/>
      <UserCard name="noy" age={22} phone="0546265575" photo ="https://instaface.co.il/wp-content/uploads/2020/03/%D7%9C%D7%94%D7%A4%D7%95%D7%9A-%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9C%D7%A6%D7%99%D7%95%D7%A8-7-1.png"/>

    </div>
  );
}

export default App;
