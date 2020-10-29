import React, { Fragment } from "react";
import LogoLinkedIn from './img/linkedin.png'
import Title from '../components/title'

const Home = () => {
  return (
    <Fragment>
      <section className="navg">
        <nav id="nav-home">
          <div>
            <a href="login" className="btn-nav">
              Iniciar sesión
            </a>
            <a href="sign-up" className="btn-nav">
              Registrarse
            </a>
          </div>
        </nav>
      </section>

      <Title hasMargin={false} />
      <img src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/10/salon-business-1.png" />

      <section className="container about-us">
        <div>
          <h1>SOBRE NOSOTROS:</h1>
          <p>
            Debido a la situación actual del mundo y a las recomendaciones
            hechas por el gobierno nacional por la pandemia nace la idea de
            Kingboo, una aplicación que permita a las personas reservar en
            distintos lugares de forma más rápida y simple, permitiendoles:
            Ahorrar tiempo en la busqueda de lugares Encontrar los mejores
            lugares en la ciudad Recomendaciones de precio y otras
            características Proveer confianza y seguridad a los usuarios
            Facilitar la administración a los dueños de locales
          </p>

          <h1>NUESTRO PROPOSITO:</h1>
          <p>
            Ser la empresa más reconocida de reservas en línea mejorando y
            simplificando la experiencia de los clientes de un establecimiento.
            <p></p>
            Nuestro foco está en ofrecer nuestros servicios a otras industrias
            donde el éxito de su negocio esté vinculado a la gestión de este a
            través de nosotros; ponemos a su disposición un conjunto de
            servicios profesionales que aseguran una gestión integral de
            reservas y empleados.
          </p>

          <h1>NUESTRO EQUIPO:</h1>
        </div>
      </section>
      <section className="container user-date">
        <div>
          <img className = 'img-icons'
                src="https://media-exp1.licdn.com/dms/image/C5603AQG9776Jtg7ZXg/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=Hlrc9BGIrNY30WMJCsrtB5GVJFYQl0hwKrTbnB3D3K8" />
          <div>
            <p>
              <b>Nombre:</b> <span> Luis Jaramillo</span>{" "}
            </p>
            <p>
              <b>Cargo:</b> <span> Team Developer</span>{" "}
            </p>
            <p>
              <b>Area:</b> <span> Desarrollo e Innovación</span>{" "}
            </p>
            
            <a href="https://www.linkedin.com/in/luis-alejandro-jaramillo-rincon/">
              <img src={LogoLinkedIn} className="img-fluid img-logo-linkedin">
              </img>
            </a>
          </div>
        </div>

        <div>
          <img className = 'img-icons'
                src="https://media-exp1.licdn.com/dms/image/C4E35AQFKrEd0-kxNCw/profile-framedphoto-shrink_800_800/0?e=1604008800&v=beta&t=tsxzrcFYc-bcSYtvBGLDvrfayxsVVlMoD2pOxQLhF-k" />
          <div>
            <p>
              <b>Nombre:</b> <span>Fernando Barrera</span>{" "}
            </p>
            <p>
              <b>Cargo:</b> <span> Team Developer</span>{" "}
            </p>
            <p>
              <b>Area:</b> <span> Desarrollo e Innovación</span>{" "}
            </p>
            <a href="https://www.linkedin.com/in/fernando-barrera-barrera-70ba161b2/">
              <img src={LogoLinkedIn} className="img-fluid img-logo-linkedin">
              </img>
            </a>
          </div>
        </div>

        <div>
          <img className = 'img-icons' 
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHbNmzUOOAiXA/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=WfwTKVBliu6jJ3FXdOr10ofHvQc2nAM9MnQXMbaxmfI" />
          <div>
            <p>
              <b>Nombre:</b> <span> Carlos Castañeda</span>{" "}
            </p>
            <p>
              <b>Cargo:</b> <span> Team Developer</span>{" "}
            </p>
            <p>
              <b>Area:</b> <span> Desarrollo e Innovación</span>{" "}
            </p>
            <a href="https://www.linkedin.com/in/carlos-andr%C3%A9s-casta%C3%B1eda-lozano-9a16b3190/">
              <img src={LogoLinkedIn} className="img-fluid img-logo-linkedin">
              </img>
            </a>
          </div>
        </div>
      </section>
      <section className="container user-date">
        <div>
          <img className = 'img-icons'
                src='https://media-exp1.licdn.com/dms/image/C4E03AQGWpGFymfpOYA/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=TLnN6k6h2al4yqXjOf0Fx66EWlR5Q8whNZ_JQIlLGAc' />
          <div>
            <p>
              <b>Nombre:</b> <span> Juan Camilo Ortiz</span>
            </p>
            <p>
              <b>Cargo:</b> <span> Team Developer</span>
            </p>
            <p>
              <b>Area:</b> <span> Desarrollo e Innovación</span>
            </p>
            <a href="https://www.linkedin.com/in/juanortizm/">
              <img src={LogoLinkedIn} className="img-fluid img-logo-linkedin">
              </img>
            </a>
          </div>
        </div>
        <div>
          <img className = 'img-icons'
                src = 'https://media-exp1.licdn.com/dms/image/C4E03AQG7waXqkX-IBg/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=ev8vrm4ARqbr5gllcGi6JBSI6agF6WUOI8jX69WbQyE'/>
          <div>
            <p>
              <b>Nombre:</b> <span> Alejandra Gómez</span>
            </p>
            <p>
              <b>Cargo:</b> <span> Team Developer</span>
            </p>
            <p>
              <b>Area:</b> <span> Desarrollo e Innovación</span>
            </p>
            <a href="https://www.linkedin.com/in/alejandra-g%C3%B3mez-7a5340158/">
              <img src={LogoLinkedIn} className="img-fluid img-logo-linkedin">
              </img>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
