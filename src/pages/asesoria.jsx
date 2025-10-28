import lis from '../lib/img/lis.png'
import stephano from '../lib/img/stephano.png'
import clem from '../lib/img/clem.png'
import uno from '../lib/img/uno.png'
import dos from '../lib/img/dos.png'
import tres from '../lib/img/tres.png'
import cuatro from '../lib/img/cuatro.png'
import cinco from '../lib/img/cinco.jpg'
import seis from '../lib/img/seis.jpg'
import siete from '../lib/img/siete.jpg'
import ocho from '../lib/img/ocho.jpg'
import teus2 from '../lib/img/teus2.png'
import teus3 from '../lib/img/teus3.png'
import st1 from '../lib/img/st1.png'
import st2 from '../lib/img/st2.png'
import st3 from '../lib/img/st3.png'
import e1 from '../lib/img/e1.png'
import e2 from '../lib/img/e2.png'
import e3 from '../lib/img/e3.png'
import life from '../lib/img/life.png'
import Title from  '../components/title'
import '../styles/asesoria.css'

const Asesoria = () => {

    return (
      <div className="contenedor-asesoria">
        <Title text={["Asesoría",<br key="break" />,"experiencia profesional"]} /> 
        <div data-aos="fade-up"  className="widget-asesoria">
          <div className="bin"><img src={uno} alt="" /></div>
          <div className="info">
            <h1>Asesorías de Currículum</h1>
            <p>Si no sabes cómo hacerlo o ya tienes listo tu currículo, nosotros te ayudamos para que muestres todo tu potencial.</p>
          </div>
        </div>
        <div data-aos="fade-up"  className="widget-asesoria">
          <div className="bin"><img src={dos} alt="" /></div>
          <div className="info">
            <h1>Asesorías de LinkedIn</h1>
            <p>Genera una red de contactos estratégica que te facilite tu transición a la vida profesional y potencialice tu carrera.</p>
          </div>
        </div>
        <div data-aos="fade-up"  className="widget-asesoria">
          <div className="bin"><img src={tres} alt="" /></div>
          <div className="info">
            <h1>Simulación de Entrevistas</h1>
            <p>Realiza esta práctica para comunicar de manera asertiva tus competencias, conocimientos y fortalezas. Consigue la práctica o trabajo de tus sueños.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="widget-asesoria">
          <div className="bin"><img src={cuatro} alt="" /></div>
          <div className="info">
            <h1>Warm Up - Empleatec</h1>
            <p>Es un evento que te prepara para el Empleatec. Tómate tu foto profesional para LinkedIn, afina tu CV y practica tu entrevista.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="widget-asesoria">
          <div className="bin"><img src={cinco} alt="" /></div>
          <div className="info">
            <h1>Talleres y Eventos</h1>
            <p>El CVDP realiza talleres de capacitación y eventos con organizaciones. Consulta las fechas en nuestro calendario o escribe a cgarciaga@ tec.mx</p>
          </div>
        </div>
        <div data-aos="fade-up" className="widget-asesoria">
          <div className="bin"><img src={seis} alt="" /></div>
          <div className="info">
            <h1>Empleatec</h1>
            <p>La feria de empleo que te permite postularte con las mejores organizaciones para oportunidades de empleo y prácticas profesionales.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="widget-asesoria">
          <div className="bin"><img src={siete} alt="" /></div>
          <div className="info">
            <h1>Get Ready!</h1>
            <p>¡Pon a prueba tu currículum! Será revisado por Head Hunters y reclutadores destacados.</p>
          </div>
        </div>
        <div data-aos="fade-up" className="widget-asesoria">
          <div className="bin"><img src={ocho} alt="" /></div>
          <div className="info">
            <h1>¿Eres Candidato a Graduar(CAG)?  </h1>
            <p>Utiliza este Job Journey para tener una guía acerca de los pasos a seguir para tu transición a la vida profesional. ¡Estar listo y tenerlo todo, no es suficiente!</p>
          </div>
        </div>
        <div data-aos="fade-up" className="asesoria-title">
          <h1>Agenda una asesoria</h1>
          <div className="gradient"></div>
        </div>
        <div data-aos="fade-up" className="contenedor-asesores">
          <div data-aos="fade-up"  className="asesor">
            <h2>Lisbeth Sevilla</h2>
            <img src={lis} alt="" />
            <div className="features">
            <li>Revisión de CV</li>
            <li>Vinculación empresarial, prácticas voluntarias y estancias profesionales.</li>
            <li>Prácticas y estancias.</li>
            <li>Asesorías a estudiantes para On Campus Intern.</li>
            </div>
            <div className="button-agendar"><a href="https://lisbethsevilla-coaching.youcanbook.me">AGENDAR</a></div>
          </div>
          <div data-aos="fade-up" className="asesor">
            <h2>Stephano Loza</h2>
            <img src={stephano} alt="" />
            <div className="features">
            <li>Revisión de CV</li>
            <li>Revisión de LinkedIn </li>
            <li>Simulacro de entrevista</li>
            <li>Búsqueda de empleo </li>
            <li>Vinculación empresarial</li>
            </div>
            <div className="button-agendar"><a href="https://outlook-sdf.office.com/bookwithme/user/4eab1b9f7cc64071be0c3e0368f0c227@tec.mx?anonymous&ep=plink">AGENDAR</a></div>
          </div>
        </div>
          <div className="contenedor-materias">
            <h1>Materias impartidas por el CVDP</h1>
            <div className="gradient"></div>
            <div data-aos="fade-up" className="materias">
              <div data-aos="fade-up" className="materia materia-uno">
                <div className="info ">
                <h2>Construyendo mi marca profesional</h2>
                <p>Identifica tus fortalezas y lo que te hace diferente de los demás para potencializar tu marca profesional.</p>
                </div>
                <img className='teus2' src={teus2} alt="" />
              </div>
              <div data-aos="fade-up" className="materia materia-dos">
                <div className="info ">
                <h2>Estrategías para tu vinculación profesional</h2>
                <p>Conocer las herramientas y estrategias más efectivas para tu proceso de búsqueda de empleo que te hagan alcanzar las mejores oportunidades y destacar dentro del mercado laboral.</p>
                </div>
                <img className='teus3' src={teus3} alt="" />
              </div>
            </div>
          </div>
          <div  className="contenedor-extras semanaTec">
            <h1>Semanas TEC</h1>
            <div className="gradient"></div>
            <div className="contenedor-targetTec">
              <div data-aos="fade-up" className="target-semanaTec">
                <div className="imgSemanaTec"><img src={st1} alt="" /></div>
                <div className="info">
                <h2>A un click de tu vida profesional </h2>
                <p>¿No sabes qué camino profesional tomar? Aquí lo definirás y construirás un Plan Estratégico de Vida Profesional. Valídalo con aliados quienes a través de su experiencia te sumarán para lograrlo.</p>
                </div>
              </div>
          </div>
          <div  className="contenedor-extras emprendimiento">
            <h1>Talleres de Emprendimiento</h1>
            <div className="gradient"></div>
            <div data-aos="fade-up" className="contenedor-targetTec">
              <div className="target-semanaTec">
                <div className="imgSemanaTec"><img src={e1} alt="" /></div>
                <div className="info">
                <h2>Mentoring EXATEC </h2>
                <p>¿Quieres ser tu propio jefe?  Capitaliza tu conocimiento y construye un modelo de negocios basado en las habilidades que haz desarrollado.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="target-semanaTec">
                <div className="imgSemanaTec"><img src={e2} alt="" /></div>
                <div className="info">

                <h2>Me gradúo y emprendo</h2>
                <p>Aprende estrategias y herramientas para validar tu proyecto en etapa temprana. Establece una red de contactos profesionales. Obten retroalimentación de tu proyecto.</p>
                </div>
              </div>
              <div data-aos="fade-up"  className="target-semanaTec">
                <div className="imgSemanaTec"><img src={e3} alt="" /></div>
                <div className="info">

                <h2>Lanza tu empresa</h2>
                <p>El programa te permitirá diseñar y validar el producto/servicio, el mercado, el modelo de negocio y el modelo financiero. Haz networking y vuélvete el emprendedor de tu vida.</p>
              </div>
            </div>
              </div>
          </div>
          <div data-aos="fade-up" className="premiosLife">
            <div className="lifeImg"><img src={life} alt="" /></div>
            <div className="info">
              <h1>Premios LiFE</h1>
              <div className="gradient"></div>
              <p>El CVDP otorga un reconocimiento al desarrollo integral y trayectoria destacada de estudiantes de Profesional y Posgrado, que cumplen con los requisitos de graduación, en áreas que integran su vivencia estudiantil dentro de la institución. ¡Postúlate!
              <br/>
              <br/>
              ¡Síguenos en nuestras redes! <a href="https://linktr.ee/cvdpqro">https://linktr.ee/cvdpqro</a>
              </p>
            </div>
          </div>

      </div>
    );
  };
  
  export default Asesoria;
