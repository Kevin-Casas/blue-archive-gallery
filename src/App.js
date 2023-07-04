import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import Roster from './components/Roster';
import { useEffect, useState } from 'react';

function App() {

  //Iniciamos local storage para estudiantes
  let studentsInRoster = JSON.parse(localStorage.getItem('roster'));
  if(!studentsInRoster) {
    studentsInRoster = []
  };

  //Registro de estudiantes
  const [roster, editRoster] = useState(studentsInRoster);

  //Hook 
  useEffect(() => {
    localStorage.setItem('roster', JSON.stringify(roster))
  });


  //Nombre de estudiante
  const [studentName, editName] = useState('');

  //Link de busqueda por nombre
  const searchLink = "https://api-blue-archive.vercel.app/api/characters?name=" + studentName


  //Funcion para API con nombre
  const consultarAPI = async() => {
    try{
      const api = await fetch(searchLink)
      const resultado = await api.json();
      editRoster(resultado.data)
    } catch (error) {
      console.log(error);
    }
  };

  //Funcion para API random
  const randomAPI = async() => {
    try{
      const api = await fetch("https://api-blue-archive.vercel.app/api/character/random")
      const resultado = await api.json();
      editRoster(resultado.data)
    } catch (error) {
      console.log(error);
    }
  };

  //Funcion para API random X 6
  const randomAPIX6 = async() => {
    try{
      const api = await fetch("https://api-blue-archive.vercel.app/api/character/random?count=6")
      const resultado = await api.json();
      editRoster(resultado.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="App">

      <Header/>

      <Searchbar 
      editName={editName}
      consultarAPI={consultarAPI}
      randomAPI={randomAPI}
      randomAPIX6={randomAPIX6}
      />

      <Roster roster = {roster}/>

      <Footer/>
      
    </div>
  );
}

export default App;
