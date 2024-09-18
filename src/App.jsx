import './App.css'
import GeometryCard from './components/geometryCard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className='w-full h-screen overflow-y-hidden bg-gradient-to-b from-gray-800 to-gray-900'>
      <header className='w-full h-24 bg-black bg-opacity-35 flex items-center justify-center'>
        <h1 className='font-bold text-3xl text-white'>Escolha a forma e o cálculo desejado</h1>
      </header>
      <main className='w-full h-full flex flex-row justify-around items-center pb-28'>
        <GeometryCard title='Quadrado' button1='Quadrado 1' button2='Quadrado 2'></GeometryCard>
        <GeometryCard title='Triângulo' button1='Triângulo 1' button2='Triângulo 2'></GeometryCard>
        <GeometryCard title='Círculo' button1='Círculo 1' button2='Círculo 2'></GeometryCard>
      </main>
      <footer className='text-white fixed w-full bottom-0 left-0 text-center font-bold bg-gray-950'>Aqui vai o rodapé</footer>
    </div>
  )
}

export default App
