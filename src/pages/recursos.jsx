import '../styles/recursos.css';
import Title from  '../components/title'
import cv from '../lib/img/cv.png'
import linkedin from '../lib/img/linkedin.png'
import entrevista from '../lib/img/entrevista.png'
const Recursos = () => {
    return (
      <div className="contenedor">
        <Title text="Recursos" /> 
        <div className="targets">
          <img src={cv} alt="" />
          <div className="info">
          <h1>Currículum (CV)</h1>
          <p>Es un resumen breve de tus experiencias formativas y laborales y de tus
            habilidades profesionales. Su objetivo es demostrar la idoneidad de tu
            candidatura a un puesto de trabajo concreto y permitirte acceder al proceso
            de selección.
            <br/>1° Comienza a realizar tu CV basado en la siguiente <a href="https://www.canva.com/design/DAGQAT07-YE/PaV91Hg1HiAAw7GqFPPLxw/view?utm_content=DAGQAT07-YE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">Plantilla.</a>
            <br/>2° Asiste a los talleres impartidos por el departamento para mejorar tu CV. 
            <br/>3° Agenda tu asesoría </p>
          </div>
        </div>
        <div className="bolsaTrabajo">
          <h1>Bolsa de Trabajo TEC</h1>
          <p>Te invitamos a consultar la <a href="">Bolsa de Trabajo</a> para conocer todos los recursos disponibles que tenemos para ti, así como formatos
          de CV especializados para cada carrera.</p>
          <div className="plantillas">
            <div className="widget"><a href="">Plantilla CV en Inglés</a></div>
            <div className="widget"><a href="">Plantilla CV - Informática</a></div>
            <div className="widget"><a href="">Plantilla CV - Industrias Creativas</a></div>
            <div className="widget"><a href="">Plantilla CV - Investigadores</a></div>
            <div className="widget"><a href="">Plantilla CV - Recién Egresado</a></div>
            <div className="widget"><a href="">Plantilla CV - Medicina</a></div>
          </div>
        </div>
        <div className="plataformas">
          <h1>Plataformas de búsqueda de empleo remoto</h1>
          <div className="botones">

            <div className="widget"><a href="">UpWork</a></div>
            <div className="widget"><a href="">Monster</a></div>
            <div className="widget"><a href="">Hireline</a></div>
            <div className="widget"><a href="">RemoteOk</a></div>
            <div className="widget"><a href="">Wipperoz</a></div>
            <div className="widget"><a href="">Remote.co</a></div>
            <div className="widget"><a href="">Indeed</a></div>
            <div className="widget"><a href="">ZipRecruiter</a></div>
            <div className="widget"><a href="">FlexJobs</a></div>
            <div className="widget"><a href="">Powertofly</a></div>
            <div className="widget"><a href="">Freelancer</a></div>
            <div className="widget"><a href="">LinkIT</a></div>
          </div>
        </div>
        <div className="targets">
          <img src={linkedin} alt="" />
          <div className="info">
          <h1>LinkedIn</h1>
          <p>LinkedIn es una plataforma que te permite conectar con personas en el mundo
            laboral. Asiendo posible el encontrar empleo o compartir tu desarrollo y
            crecimiento profesional. Es la herramienta más poderosa para llegar
            exactamente al tipo de área profesional que buscas.
            <br/>1° Crea tu perfil. 
            <br/>2° Asiste a los talleres sobre LinkedIn impartidos por el CVDP.
            <br/>3° Agenda tu asesoría. </p>
          </div>
        </div>
        <div className="targets">
          <div className="info">
          <h1>Entrevista laboral - Job Journey</h1>
          <p>Es la fase del proceso de selección donde el entrevistador o entrevistadora analiza a
            fondo al candidato para comprobar su idoneidad para el puesto ofertado. Esta es tu
            oportunidad para destacar demostrando que eres la mejor opción para el empleo.
            <br/>El CVDP ofrece una Simulación de Entrevista a los alumnos que están por
            presentarse a una entrevista por un puesto de trabajo en alguna empresa.
            <br/>Conoce la nueva herramienta de simulación de entrevista con inteligencia artificial
            <a href="https://www.biginterview.com/">  BigInterview.</a>
            <br/>Consulta el siguiente <a href="https://drive.google.com/file/d/1ePb2uDJP8XddZMo3XTC6oXfBSkrrhaNF/view">video informativo</a> para conocer más sobre la herramienta. </p>
          </div>
            <img src={entrevista} alt="" />
        </div>
      </div>
    );
  };
  
  export default Recursos;