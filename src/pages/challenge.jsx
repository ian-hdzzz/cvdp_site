import Title from  '../components/title'
import '../styles/challenge.css'
import que from '../lib/img/que.png'
import temas from '../lib/img/temas.png'
import teus2 from '../lib/img/teus2.png'
import teus3 from '../lib/img/teus3.png'
import teus4 from '../lib/img/teus4.png'

const Challenge = () => {
    return (
      <div className="contenedor-challenge">
        <Title text="CVDP Challenge" />
        <div className="target-challenge uno">
          <div className="info">
            <h1>¿En qué consiste?</h1>
            <p>Es un programa autodirigido donde recibirás un boletín semanal (cada ​martes) con contenido, herramientas, retos (no hay calificación, son ​personales) para que vayas preparándote a para la transición de ​estudiante a profesionista.</p>
          </div>
            <div className="imagenes">
              {/* <img className="img-descriptiva" src={que}alt="" /> */}
              <img className="teus4" src={teus4} alt="" />
            </div>
        </div>
        <div className="target-challenge dos ">
          <div className="info">
              <h1>¿Cuánto tiempo dura?</h1>
              <p>Son 10 semanas, tú gestionas los tiempos y decides en qué momento ​leerlo y realizar las actividades (no hay entregables, lo que trabajes será ​para ti).</p>
          </div>
            <div className="imagenes">
              <img className="teus3" src={teus3} alt="" />
            </div>
        </div>
        <div className="target-challenge tres">
          <div className="info">
            <h1>¿Qué temas revisaremos a lo largo del reto?</h1>
            <p>Autoconocimiento, definición de objetivos profesionales, prueba psicométrica, estrategias ​para hacer networking, situación actual del mercado laboral, CV de alto impacto, entrevista, ​toma de decisiones, búsqueda de trabajo, mercado oculto laboral, entre otros. ¿Estas listo para ser parte del reto? Empezamos el martes 1 de marzo.</p>
            <a href='https://bit.ly/3aSY5aO'>Regístrate aquí: https://bit.ly/3aSY5aO</a>
          </div>
            <div className="imagenes">
              {/* <img className="img-descriptiva" src={temas} alt="" /> */}
              <img className="teus2" src={teus2} alt="" />
            </div>
        </div>
      </div>
    )
  };
  
  export default Challenge;