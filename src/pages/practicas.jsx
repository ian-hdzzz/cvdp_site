import Title from  '../components/title'
import '../styles/practicas.css'
import inge from  '../lib/img/inge.png'
import creativos from  '../lib/img/creativos.png'
import sociales from  '../lib/img/sociales.png'
import negocios from  '../lib/img/negocios.png'
import p_negocios from  '../lib/img/p_negocios.png'
import p_inge from  '../lib/img/p_inge.png'
import p_ri from  '../lib/img/p_ri.png'
import p_creativos from  '../lib/img/p_creativos.png'

const Practicas = () => {
    return (
      <div className="contenedor">
        <Title text="Prácticas profesionales y empleo" /> 
        <div className="imgPracticas">
            <div className="img-item"><img src={creativos} alt="" /></div>
            <div className="img-item"><img src= {sociales}alt="" /></div>
            <div className="img-item"><img src={inge}alt="" /></div>
            <div className="img-item"><img src={negocios} alt="" /></div>
        </div>
        <div className="contenedor-practicas">
          <div className="widget">
            <div className="imgPracticas"><img src={p_creativos} alt="" /></div>
            <div className="infoPracticas uno">
              <h1>ESTUDIOS CREATIVOS</h1>
              <p>
              Aquí podrás encontrar <span>vacantes y programas</span> de contratación en empresas que valoran la innovación y el pensamiento creativo. Descubre oportunidades diseñadas para potenciar tu <span>crecimiento profesional y conectar con industrias.</span>
              </p>
              <a className='buttonPracticas uno' href="#">CONECTA CON EMPRESAS <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="widget">
            <div className="imgPracticas"><img src={p_ri} alt="" /></div>
            <div className="infoPracticas dos">
              <h1>DERECHO Y LRI</h1>
              <p>
              Encuentra vacantes y programas de contratación en <span>despachos, organizaciones internacionales, consultorías y entidades gubernamentales.</span> Aplica a empresas e instituciones que valoran la habilidad de <span>analizar, negociar y transformar</span> el entorno social y político. 
              </p>
              <a className='buttonPracticas dos' href="#">CONECTA CON EMPRESAS <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="widget">
            <div className="imgPracticas"><img src={p_inge} alt="" /></div>
            <div className="infoPracticas tres">
              <h1>INGENIERÍAS</h1>
              <p>
              Esta sección está dedicada a conectar a nuestros futuros ingenieros con <span> vacantes y programas</span> de contratación. Aquí encontrarás enlaces y recursos personalizados para aplicar a empresas que valoran el <span>ingenio y la tenacidad </span> de los talentos emergentes.
              </p>
              <a className='buttonPracticas tres ' href="#">CONECTA CON EMPRESAS <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="widget">
            <div className="imgPracticas"><img src={p_negocios} alt="" /></div>
            <div className="infoPracticas cuatro">
              <h1>NEGOCIOS</h1>
              <p>
              Esta sección está pensada para conectar a nuestros <span>futuros líderes y emprendedores</span> con vacantes y programas de contratación en empresas que buscan <span> talento con visión estratégica, innovación y habilidades de gestión. </span>
              </p>
              <a className='buttonPracticas cuatro' href="#">CONECTA CON EMPRESAS <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Practicas;