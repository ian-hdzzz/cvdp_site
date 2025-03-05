import Title from  '../components/title'
import '../styles/maraton.css'
import { useState, useEffect } from "react";
import Papa from "papaparse";



const Maraton = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   const csvPath = `${import.meta.env.BASE_URL}datos.csv`; // Ruta correcta en Vite
  
    //   fetch(csvPath)
    //     .then(response => response.text())
    //     .then(csvText => {
    //       Papa.parse(csvText, {
    //         complete: (result) => setData(result.data),
    //         header: false,
    //         skipEmptyLines: true,
    //       });
    //     })
    //     .catch(error => console.error("Error al cargar el CSV:", error));
    // }, []);
  
    return (
        <div className="contenedor contenedor-maraton">
            <Title text="Maratón prácticas profesionales" /> 
            <div className="contenedor-targets">

     
            <div className="target-maraton">
            
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Grupo Bonn</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>direccion.rh@grupobonn.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Practicas(5)</h1>
                <ul>
                    <li>Trainee Marketing Digital</li>
                    <li>Auditoria</li>
                    <li>Recursos Humanos</li>
                    <li>Ventas</li>
                    <li>Administración</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Gerentes en entrenamiento Ventas</li>
                    <li>Atención al cliente </li>
                    <li>Generales</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>NATGAS QUERÉTARO</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>jcpineda@natgas.com.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <p>-</p>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Coordinador de Proyectos y Construcción</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>STORECHECK</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>grecia.talancon@solfium.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                <li>Analista de Retail Trainee</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Analista de Retail Jr</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Solfium</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>rh@familyandhealth.com.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicante de estrategia</li>
                    <li>Practicante Data analitics</li>
                    <li>Practicante Operaciones</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Gerencia de ingenieria</li>
                    <li>Coordinador O&M</li>
                    <li>Site manager</li>
                    <li>Site supervisor</li>
                    <li>Customer support</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Keyence México</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>judithg@keyence.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <p>-</p>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Consultor técnico</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Bonding</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>rh@bonding.com.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <p>-</p>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <p>-</p>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Yara México</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>brenda.salazar@yara.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicantes Agronomia </li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <p>-</p>
            
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>SIG Manufacturing </p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>angel.acosta@sig.biz</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicante de calidad/ medio tiempo </li>
                    <li>Practicante de mejora continua/ medio tiempo. </li>
                    <li>Practicante de mantenimiento/ medio tiempo</li>
                    <li>Practicante de planeación en la producción/ medio tiempo</li>
                    <li>Practicante de compras/ medio tiempo</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Analista de Logística </li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Sparkassenstiftung Alemana</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>zuleima.lopez@sparkassenstiftung.de</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicante de RH</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
               <p>-</p>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>IT LOGIC</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>rodrigo.delaloza@itcloudservices.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicante de Ingeniería</li>
                    <li>Practicante de Administración</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Administrador Jr. </li>
                    <li>Coordinador de servicios</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Eizen</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>talento.humano@senicodemus.com.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicante Administrativo de Inversiones</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Asesor de Inversionistas</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>MIGSO-PCUBED</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>karla.casanova@migso-pcubed.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <p>-</p>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>PMO Consultant & Talent Acquisition Partner</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Grob México</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>g.ruiz@grobmexico.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <p>-</p>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Ingeniero de Servicio</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Brose</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>tania.ramirez@brose.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas</h1>
                <ul>
                    <li>Practicante de finanzas</li>
                    <li>Practicante de logística</li>
                    <li>Practicante de compras </li>
                    <li>Practicante de calidad </li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes</h1>
                <ul>
                    <li>Ing. de Calidad</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>Deloitte</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>tania.ramirez@brose.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Practicas (0)</h1>
                <ul>
                    <li>N/A</li>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>50 Vacantes de tiempo completo</h1>
                <ul>
                    <li>Business Technology Intern</li>
                    <li>Software Engineering Intern</li>
                    <li>Functional Intern</li>
                    <li>Analytics Intern</li>
                </ul>
                </div>
                
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>LABORATORIOS PISA</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>mogarcia@corpcab.com.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas (3)</h1>
                <ul>
                   <p>Pendientes</p>
                  
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes (2)</h1>
                <ul>
                    <li>Pendientes</li>
                </ul>
                </div>
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>El Cid en Queretaro</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>hugraca@hotmail.com</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas  y Vacantes(6)</h1>
                <ul>
                    <li>Biotecnología — personal de apoyo en manejo de producto. </li>
                    <li>agronomía — Administrador general dentro del área agropecuaria.</li>
                    <li>Desarrollo sustentable — Personal de apoyo en el área ambiental.</li>
                    <li>Mercadotecnia — Personal de apoyo en análisis del mercado local. </li>
                    <li>Relaciones internacionales — Personal de apoyo en el área de negocios.</li>
                    <li>Estrategia y transformación de negocios. — personal de apoyo general. </li>
                </ul>
                </div>
                
            </div>
            <div className="target-maraton">
                <div className="empresa">
                <h1 className=''>Empresa</h1>
                <p className=''>OBC Grupo Inmobiliaria</p>
                </div>
                <div className="contacto">
                <h1 className=''>Contacto</h1>
                <p className=''>estefania.martinez@obcapital.com.mx</p>
                </div>
                <div className="practicas">
                <h1 className=''>Prácticas (0)</h1>
                <ul>
                   <p>N/A</p>
                </ul>
                </div>
                <div className="empleo">
                <h1 className=''>Vacantes (2)</h1>
                <ul>
                    <li>Arquitecto analista. </li>
                    <li>Marketing</li>
                </ul>
                </div>
            </div>
            
            {/* <div className="target-maraton">
            {data.map((row, index) => (
            <div key={index} className="p-2 border-b">
                {row.join(" | ")}
            </div>
            ))}
            </div> */}
        </div>
        </div>
    )
}
export default Maraton;