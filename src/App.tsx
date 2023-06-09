import './App.css';
import NavBar from './components/NavBar';

import CardPage from './Pages/CardPage';
import HomePage from './Pages/HomePage';
import CredsPage from './Pages/CredsPage';


export default function App(){
  
  let Component;
  switch (window.location.pathname) {
    case ("/" || "/flashai"):
      Component = <HomePage/>
      break
    case ("/card"):
      Component = <CardPage/>
      break
    case ("/login"):
      Component = <CredsPage/>
      break
  }
  return (
    <div className='body'>
      <NavBar/>
      {Component}
    </div>
  )
}