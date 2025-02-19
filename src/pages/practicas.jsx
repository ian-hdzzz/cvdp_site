import Title from  '../components/title'
import inge from  '../lib/img/inge.png'
import creativos from  '../lib/img/creativos.png'
import sociales from  '../lib/img/sociales.png'
import negocios from  '../lib/img/negocios.png'

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
            <div className="imgPracticas"><img src="" alt="" /></div>
            <div className="infoPracticas">
              <h1>ESTUDIOS CREATIVOS</h1>
              <p>
              Aquí podrás encontrar <span>vacantes y programas</span> de contratación en empresas que valoran la innovación y el pensamiento creativo. Descubre oportunidades diseñadas para potenciar tu <span>crecimiento profesional y conectar con industrias.</span>
              </p>
              <a className='buttonPracticas' href="#">Conecta con empresas <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="widget">
            <div className="imgPracticas"><img src="" alt="" /></div>
            <div className="infoPracticas">
              <h1>DERECHO Y LRI</h1>
              <p>
              Encuentra vacantes y programas de contratación en <span>despachos, organizaciones internacionales, consultorías y entidades gubernamentales.</span> Aplica a empresas e instituciones que valoran la habilidad de <span>analizar, negociar y transformar</span> el entorno social y político. 
              </p>
              <a className='buttonPracticas' href="#">Conecta con empresas <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="widget">
            <div className="imgPracticas"><img src="" alt="" /></div>
            <div className="infoPracticas">
              <h1>INGENIERÍAS</h1>
              <p>
              Esta sección está dedicada a conectar a nuestros futuros ingenieros con <span> vacantes y programas</span> de contratación. Aquí encontrarás enlaces y recursos personalizados para aplicar a empresas que valoran el <span>ingenio y la tenacidad </span> de los talentos emergentes.
              </p>
              <a className='buttonPracticas' href="#">Conecta con empresas <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="widget">
            <div className="imgPracticas"><img src="" alt="" /></div>
            <div className="infoPracticas">
              <h1>NEGOCIOS</h1>
              <p>
              Esta sección está pensada para conectar a nuestros <span>futuros líderes y emprendedores</span> con vacantes y programas de contratación en empresas que buscan <span> talento con visión estratégica, innovación y habilidades de gestión. </span>
              </p>
              <a className='buttonPracticas' href="#">Conecta con empresas <i class="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Practicas;