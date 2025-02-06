import './title.css';

const Title = ({ text }) => {
    return(
        <div className="contenedor-title">
          <h1>{text}</h1>
          <div className="gradient"></div>
        </div>
    )
}
export default Title;