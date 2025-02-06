import Title from  '../components/title'
import '../styles/empresas.css'
import socios from '../lib/img/socios.png'
import bolsa from '../lib/img/bolsa.png'
const Empresa = () => {
    return (
      <div className="contenedor">
        <Title text="Empresas" /> 
        <div className="targets">
                  <img src={socios} alt="" />
                  <div className="info">
                  <h1>Socios Formadores</h1>
                  <p>¿Te interesa ser un socio formador?
                    <br/>
                      Compartirás retos reales de tu empresa en los cuales un grupo de
                      estudiantes, guiados por sus profesores, generan una propuestas de
                      valor.
                    <br/>Visita el siguiente link: 
                    <br/><a href="https://sites.google.com/tec.mx/sociosformadorqro/p%C3%A1gina-principal">https://sites.google.com/tec.mx/sociosformadorqro/p%C3%A1gina-principal</a></p>
                  </div>
        </div>
        <div className="targets">
                  <div className="info">
                  <h1>Bolsa de Trabajo</h1>
                  <p>En la Bolsa de Trabajo del Tec podrás añadir las vacantes que necesite tu empresa y los estudiantes de la institución se podrán postular a ellas.
                    <br/>Publica tus vacantes gratuitamente en nuestra bolsa de trabajo:
                    <br/>Crea tu alta en: <a href="https://tec-csm.symplicity.com/employers">https://tec-csm.symplicity.com/employers</a> 
                    <br/>Deberás anexar copia simple del RFC de la empresa, comprobante de domicilio y copia simple de una identificación oficial de quien tenga acceso al portal.</p>
                  </div>
                  <img src={bolsa} alt="" />
        </div>
        <div className="button"><a href="https://lisbethsevilla-coaching.youcanbook.me/">AGENDAR UNA CITA</a></div>
      </div>
    );
  };
  
  export default Empresa;