import Title from  '../components/title'
import '../styles/empresas.css'
import socios from '../lib/img/socios.png'
import bolsa from '../lib/img/bolsa.png'
import video2 from '../lib/img/video2.mp4'
import video3 from '../lib/img/video3.mp4'
const Empresa = () => {
    return (
      <div className="contenedor">
        <Title text="Empresas" /> 
        <div data-aos="fade-up"  className="targets-empresas">
                  <img className="imgEmpresas" src={socios} alt="" />
                  <div className="info">
                  <h1>Socios Formadores</h1>
                  <p>¿Te interesa ser un socio formador?</p>
                    <div className="texto-info">
                      <p>Compartirás retos reales de tu empresa en los cuales un grupo de
                      estudiantes, guiados por sus profesores, generan una propuestas de
                      valor.</p>
                    </div>
                    <p>Visita el siguiente link: </p>
                    <a href="https://sites.google.com/tec.mx/sociosformadorqro/p%C3%A1gina-principal">Click aquí</a>
                  </div>
        </div>
        <div data-aos="fade-up" className="targets-empresas">
                  <img className="imgEmpresas" src={bolsa} alt="" />
                  <div className="info">
                  <h1>Bolsa de Trabajo</h1>
                  <div className="texto-info">

                    <p>En la Bolsa de Trabajo del Tec podrás añadir las vacantes que necesite tu empresa y los estudiantes de la institución se podrán postular a ellas.
                    <br/>
                      <br/>Publica tus vacantes gratuitamente en nuestra bolsa de trabajo:
                      <br/>Crea tu alta en: <a href="https://tec-csm.symplicity.com/employers">https://tec-csm.symplicity.com/employers</a> 
                      <br/>
                      <br/>Deberás anexar copia simple del RFC de la empresa, comprobante de domicilio y copia simple de una identificación oficial de quien tenga acceso al portal.</p>
                  </div>
                  </div>
        </div>
        <div data-aos="fade-up" className="button-empresas"><a href="https://lisbethsevilla-coaching.youcanbook.me/">AGENDAR UNA CITA</a></div>
        <div data-aos="fade-up" className="video-empresas">
            <h2>¿Cómo ingresar a bolsa de trabajo?</h2>
          <video width="100%" controls>
            <source src={video2}type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        
        </div>
        <div data-aos="fade-up"  className="video-empresas">
            <h2>Oportunidades en GoinGlobal</h2>
          <video width="100%" controls>
            <source src={video3}type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        
        </div>
      </div>
    );
  };
  
  export default Empresa;