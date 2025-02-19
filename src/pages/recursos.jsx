import '../styles/recursos.css';
import Title from  '../components/title'
import cv from '../lib/img/cv.png'
import linkedin from '../lib/img/linkedin.png'
import entrevista from '../lib/img/entrevista.png'
import video4 from '../lib/img/video4.mp4'
const Recursos = () => {
    return (
      <div className="contenedor-recursos">
        <Title text="Recursos" /> 
        <div data-aos="fade-up" className="targets">
          <img src={cv} alt="" />
          <div className="info">
          <h1>Currículum (CV)</h1>
          <p>Es un resumen breve de tus experiencias formativas y laborales y de tus
            habilidades profesionales. Su objetivo es demostrar la idoneidad de tu
            candidatura a un puesto de trabajo concreto y permitirte acceder al proceso
            de selección.
            <br />
            <br/>1° Comienza a realizar tu CV basado en la siguiente <a href="https://www.canva.com/design/DAGQAT07-YE/PaV91Hg1HiAAw7GqFPPLxw/view?utm_content=DAGQAT07-YE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">Plantilla.</a>
            <br/>2° Asiste a los talleres impartidos por el departamento para mejorar tu CV. 
            <br/>3° Agenda tu asesoría.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="bolsaTrabajo">
          <h1>Bolsa de <br />Trabajo TEC</h1>
          <p>Te invitamos a consultar la <a href="">Bolsa de Trabajo</a> para conocer todos los recursos disponibles que tenemos para ti, así como formatos
          de CV especializados para cada carrera.</p>
          <div data-aos="fade-up" className="plantillas">
            <div className="widget uno"><a href="https://drive.google.com/file/d/11JUJr2-QgNOBDgAu9dao3McygP-L_MFg/view">Plantilla CV en Inglés</a></div>
            <div className="widget dos"><a href="https://drive.google.com/file/d/1FgVN-DjC2HxzQTgqA4UrlSHB7qjrh0jH/view">Plantilla CV - Informática</a></div>
            <div className="widget tres"><a href="https://drive.google.com/file/d/1uyR65N-BsyoHTkn9hdXiQQmnWMwAmueW/view">Plantilla CV - Industrias Creativas</a></div>
            <div className="widget cuatro"><a href="https://drive.google.com/file/d/1kfJ5QGaudeuWMe-d28ypvN6aQCCME_7s/view">Plantilla CV - Investigadores</a></div>
            <div className="widget cinco"><a href="https://drive.google.com/file/d/1OR1yFs6SQu7JDMS8U8UmdaxG54gV2MRf/view">Plantilla CV - Recién Egresado</a></div>
            <div className="widget seis"><a href="https://drive.google.com/file/d/1ep3GvdzHEUo0osMRggWcxC6Nugz-u5ww/view">Plantilla CV - Medicina</a></div>
          </div>
        </div>
        <div data-aos="fade-up" className="plataformas">
          <h1>Plataformas de búsqueda <br />de empleo remoto</h1>
          <div data-aos="fade-up" className="botones">

            <div className="widget"><a href="https://www.upwork.com">UpWork</a></div>
            <div className="widget"><a href="https://www.monster.com">Monster</a></div>
            <div className="widget"><a href="https://hireline.io">Hireline</a></div>
            <div className="widget"><a href="https://remoteok.com">RemoteOk</a></div>
            <div className="widget"><a href="https://www.wipperoz.com/en/">Wipperoz</a></div>
            <div className="widget"><a href="https://remote.co">Remote.co</a></div>
            <div className="widget"><a href="https://mx.indeed.com">Indeed</a></div>
            <div className="widget"><a href="https://www.linkedin.com">ZipRecruiter</a></div>
            <div className="widget"><a href="https://www.flexjobs.com">FlexJobs</a></div>
            <div className="widget"><a href="https://powertofly.com">Powertofly</a></div>
            <div className="widget"><a href="https://www.freelancer.com">Freelancer</a></div>
            <div className="widget"><a href="https://www.linkedin.com/company/linkit-hr/">LinkIT</a></div>
          </div>
        </div>
        <div data-aos="fade-up" className="targets">
          <img src={linkedin} alt="" />
          <div data-aos="fade-up" className="info">
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
        <div data-aos="fade-up" className="targets">
        <img src={entrevista} alt="" />
          <div className="info">
          <h1>Entrevista laboral - Job Journey</h1>
          <p>Es la fase del proceso de selección donde el entrevistador o entrevistadora analiza a
            fondo al candidato para comprobar su idoneidad para el puesto ofertado. Esta es tu
            oportunidad para destacar demostrando que eres la mejor opción para el empleo.
            <br />
            <br/>El CVDP ofrece una Simulación de Entrevista a los alumnos que están por
            presentarse a una entrevista por un puesto de trabajo en alguna empresa.
            <br/>Conoce la nueva herramienta de simulación de entrevista con inteligencia artificial
            <a href="https://www.biginterview.com/">  BigInterview.</a>
            <br />
            <br/>Consulta el siguiente <a href="https://drive.google.com/file/d/1ePb2uDJP8XddZMo3XTC6oXfBSkrrhaNF/view">video informativo</a> para conocer más sobre la herramienta. </p>
          </div>
        </div>
           <div data-aos="fade-up"  className="video-empresas">
              <h2>Big Interview</h2>
                <video width="100%" controls>
                  <source src={video4}type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
                  
            </div>
      </div>
    );
  };
  
  export default Recursos;