
import lis from '../lib/img/lis.png'
import adri from '../lib/img/adri.png'
import stephano from '../lib/img/stephano.png'
import clem from '../lib/img/clem.png'
import '../styles/conocenos.css'
import Title from  '../components/title'
const Conocenos = () => {
    return (

      <div className="contenedor">
        <Title text="Conócenos"/> 
        <div data-aos="fade-up" className="target">
          <img src={adri} alt="" />
          <div className="info">
            <p className="nombre">Adriana Salgado</p>
            <p>Directora del Centro del Vinculación y Desarrollo Profesional<br/>asalgadf@tec.mx<br/>+52 1 442 319 4233</p>
          </div>
        </div>
        <div data-aos="fade-up" className="target">
          <img src={stephano} alt="" />
          <div className="info"> 
            <p className='nombre'>Stephano Loza</p>
              <p>Coordinador de empleabilidad <br/>-Asesoría, atención a alumnos para empleo y atención a empresas.<br/>s.lozae@tec.mx<br/>+52 1 442 2317249</p>
          </div>
        </div>
        <div data-aos="fade-up" className="target">
          <img src= {lis} alt="" />
          <div className="info">
            <p className='nombre'>Lisbeth Sevilla</p>
            <p>Coordinadora de Experiencia Profesional<br/>-Asesoría, atención a alumnos para prácticas voluntarias y estanciasprofesionales<br/>lisbeth.sevilla.serrano@tec.mx</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Conocenos;