
import a1 from './img/a1.jpg';
import a2 from './img/a2.jpg';
import a3 from './img/foto 1.jpg';
import a4 from './img/insta.png';
import a5 from './img/face.png';
import a6 from './img/red.png';
import './App.css';

function App() {

  return (
    <div className="App">

    <div className='contenedor'>
      <img className='imagen' src={a1} alt="" />
      <div className='banner'>
        <h2>BIENVENIDOS A MI PÁGINA WEB</h2>
      </div>
    </div>


      <header className="App-header">
      <img className='imagen1' src={a2} alt="" />
      <img className='imagen2' src={a3} alt="" />
        <div className='inicio'>
          <div>
          <h1>ADRIAN ZULUAGA</h1>
          19 Años
          <br></br>
          Colombiano
          <br></br>
          Estudiante de la UDI</div>
          <div className='ok'>
          <a
          href="https://www.instagram.com/andreszuluaga_19/"
          target="_blank"
          rel="noopener noreferrer"
        ><img className='toychquitoi'  src={a4} alt="" /></a>
        <a
          href="https://www.facebook.com/adrian.zuluaga.104/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='toychquitoi' src={a5} alt="" /></a>
          </div>
        </div>


        <img className="patata" src={a6} alt="" />

<div className='descrip'>
<h3>Descripcion..</h3>
<p>Apasionado por el baloncesto y también me gusta ver películas y series, especialmente aquellas con impactantes efectos visuales.</p>

        
          <button><a
          href="https://www.canva.com/design/DAF8aJKyQwM/R2UAmcoorW-ZDSwLXLxPcw/edit"
          target="_blank"
          rel="noopener noreferrer"
        >Mas info</a></button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
