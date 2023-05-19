import './App.css';
import NavBar from './components/NavBar';

import CardPage from './Pages/CardPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import AboutPage from './Pages/AboutPage';


export default function App(){
  let Component;
  switch (window.location.pathname) {
    case ("/"):
      Component = <HomePage/>
      break
    case ("/about"):
      Component = <AboutPage/>
      break
    case ("/card"):
      Component = <CardPage/>
      break
    case ("/login"):
      Component = <LoginPage/>
      break
  }
  return (
    <div className='body'>
      <NavBar/>
      {Component}
    </div>
  )
}