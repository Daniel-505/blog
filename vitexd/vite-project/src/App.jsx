import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Blog Personal</h1>
      </header>
      <div className='contacto'>
      <a href="https://www.instagram.com/dxt7788/" className='link'>Instagram</a>
      <a href="" className='link'>Fotos</a>
      </div>
      <div className='alinear'>
        <div className="square-background">
          <h2 className="description">En el lugar donde acampamos habia un perrito</h2>
          <img src="/public/IMG_9275.JPG" alt="Descripción" className="image" />
        </div>
        <div className="square-background">
          <h2 className="description">Aca estabamos en un YPF y compramos cositas para comer</h2>
          <img src="/public/1.jpg" alt="Descripción" className="image" />
        </div>
      </div>
      <div className='alinear'>
        <div className="square-background">
          <h2 className="description">Aca mi gordita agarro mi celu y se saco una foto cuando estabamos en el micro</h2>
          <img src="/public/2.jpg" alt="Descripción" className="image" />
        </div>
        <div className="square-background">
          <h2 className="description">Aca esatbamos en un arrollo muy lindo y nos sacamos fotitos lindas</h2>
          <img src="/public/3.jpg" alt="Descripción" className="image" />
        </div>
      </div>
      <div className='alinear'>
        <div className="square-background">
          <h2 className="description">Aca subimos una sierra y habia mucho viento</h2>
          <img src="/public/4.JPG" alt="Descripción" className="image" />
        </div>
        <div className="square-background">
          <h2 className="description">Aca nos sentamos en una roca para comer</h2>
          <img src="/public/5.jpg" alt="Descripción" className="image" />
        </div>
      </div>
      <div className='alinear'>
        <div className="square-background">
          <h2 className="description">Aca mi gorda me saco una foto en el centro</h2>
          <img src="/public/y.JPG" alt="Descripción" className="image" />
        </div>
        <div className="square-background">
          <h2 className="description">Hacia mucho frio a la noche y prendian fuego</h2>
          <img src="/public/f.jpg" alt="Descripción" className="image" />
        </div>
      </div>
      <div className='alinear'>
        <div className="square-background">
          <h2 className="description">Aca teniamos que desarmar la carpa y mi gorda no sabia que hacer</h2>
          <img src="/public/6.jpg" alt="Descripción" className="image" />
        </div>
        <div className="square-background">
          <h2 className="description">Fotito en el arrollo con mi gorda</h2>
          <img src="/public/7.JPG" alt="Descripción" className="image" />
        </div>
      </div>
    </>
  )
}

export default App
