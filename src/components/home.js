import React, { Fragment } from "react";

const Home = () => {
    return (
        <Fragment>

            <section className='navg'>
                <nav className='container'>
                    <div>
                        <a href='/' className='btn-nav-rigth'>Home</a>
                        <a href='#' className='btn-nav-rigth'>About</a>
                        <a href='#' className='btn-nav-rigth'>Pricing</a>
                    </div>
                    <div>
                        <a href='login' className='btn-nav'>Login</a>
                        <a href='sign-up'className='btn-nav'>Register</a>
                    </div>
                </nav>
            </section>

            <img src='https://raw.githubusercontent.com/EciDevelopersIETI/KingBoo-Front-End/dagomez/ajuste-front-home/img/onlineTicket.jpg' alt='Imagen principal'></img>

            <section className='container about-us'>
                <div>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget sodales lacus, 
                    eu efficitur lacus. Pellentesque ligula massa, elementum at ex sit amet, 
                    efficitur vestibulum ante. Nulla suscipit turpis ligula, id suscipit arcu consectetur ac. 
                    Suspendisse pellentesque neque dui, eu ornare velit placerat varius. Cras vestibulum lacus leo, 
                    sed ullamcorper massa vehicula vel. Donec tincidunt sem orci, at malesuada elit vehicula eu. 
                    Praesent vehicula, orci in accumsan interdum, sapien elit accumsan justo, in laoreet tellus purus eu nunc. 
                    Donec gravida massa a nunc maximus imperdiet. Phasellus ac ligula at justo pharetra vulputate eget sed mi. 
                    Nunc in justo sem. Sed eu ligula mi. Donec tristique mi volutpat, cursus elit ultrices, consectetur neque. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam dictum, felis eu 
                    placerat tincidunt, magna arcu dignissim sem, ut tempus erat enim a leo. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget sodales lacus, 
                    eu efficitur lacus. Pellentesque ligula massa, elementum at ex sit amet, 
                    efficitur vestibulum ante. Nulla suscipit turpis ligula, id suscipit arcu consectetur ac. 
                    Suspendisse pellentesque neque dui, eu ornare velit placerat varius. Cras vestibulum lacus leo, 
                    sed ullamcorper massa vehicula vel. Donec tincidunt sem orci, at malesuada elit vehicula eu. 
                    Praesent vehicula, orci in accumsan interdum, sapien elit accumsan justo, in laoreet tellus purus eu nunc. 
                    Donec gravida massa a nunc maximus imperdiet. Phasellus ac ligula at justo pharetra vulputate eget sed mi. 
                    Nunc in justo sem. Sed eu ligula mi. Donec tristique mi volutpat, cursus elit ultrices, consectetur neque. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam dictum, felis eu 
                    placerat tincidunt, magna arcu dignissim sem, ut tempus erat enim a leo. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.</p>
                </div>
            </section>

            <section className='container user-date'>
            
                <div>
                        <div className='icono'>
                            <i className="fas fa-user"></i>
                        </div>
                    <div>
                        <p>Nombre: <span> Oscar Alba</span> </p>
                        <p>Cargo: <span> Oscar Alba</span> </p>
                        <p>Area: <span> Oscar Alba</span> </p>
                        <p>Perfil Linked in: <span> Oscar Alba</span> </p>
                    </div>
                </div>
                <div>
                    <div className='icono'>
                        <i className="fas fa-user"></i>
                    </div>
                    <div>
                        <p>Nombre: <span> Oscar Alba</span> </p>
                        <p>Cargo: <span> Oscar Alba</span> </p>
                        <p>Area: <span> Oscar Alba</span> </p>
                        <p>Perfil Linked in: <span> Oscar Alba</span> </p>
                    </div>
                </div>
                <div>
                        <div className='icono'>
                            <i className="fas fa-user"></i>
                        </div>
                    <div>
                        <p>Nombre: <span> Oscar Alba</span> </p>
                        <p>Cargo: <span> Oscar Alba</span> </p>
                        <p>Area: <span> Oscar Alba</span> </p>
                        <p>Perfil Linked in: <span> Oscar Alba</span> </p>
                    </div>
                </div>
                <div>
                    <div className='icono'>
                        <i className="fas fa-user"></i>
                    </div>
                    <div>
                        <p>Nombre: <span> Oscar Alba</span> </p>
                        <p>Cargo: <span> Oscar Alba</span> </p>
                        <p>Area: <span> Oscar Alba</span> </p>
                        <p>Perfil Linked in: <span> Oscar Alba</span> </p>
                    </div>
                </div>
                

            </section>

        </Fragment>
    )
}

export default Home;
