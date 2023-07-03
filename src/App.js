import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import Roster from './components/Roster';
import { useEffect, useState } from 'react';

function App() {

  //Iniciamos local storage
  let studentsInRoster = JSON.parse(localStorage.getItem('roster'));
  if(!studentsInRoster) {
    studentsInRoster = []
  }

  //Registro de estudiantes
  const [roster, editRoster] = useState(studentsInRoster)

  //Barra de busqueda
  const [searchName, editName] = useState([])

  

  //Hook 
  useEffect(() => {
    localStorage.setItem('roster', JSON.stringify(roster))
  })

  //Funcion para API con nombre
  const consultarAPI = async() => {
    try{
      const api = await fetch("https://api-blue-archive.vercel.app/api/characters?name=" + {searchName})
      const resultado = await api.json();
      editRoster(resultado)
    } catch (error) {
      console.log(error);
    }
  }

  //Funcion para API random
  const randomAPI = async() => {
    try{
      const api = await fetch("https://api-blue-archive.vercel.app/api/character/random")
      const resultado = await api.json();
      editRoster(resultado.data)
    } catch (error) {
      console.log(error)
    }
  }

  //Funcion para API random X 10
  const randomAPIX10 = async() => {
    try{
      const api = await fetch("https://api-blue-archive.vercel.app/api/character/random?count=10")
      const resultado = await api.json();
      editRoster(resultado.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">

      <Header/>

      <Searchbar 
      randomAPI={randomAPI}
      randomAPIX10={randomAPIX10}
      />

      <Roster roster = {roster}/>

      <Footer/>
      
    </div>
  );
}

export default App;
