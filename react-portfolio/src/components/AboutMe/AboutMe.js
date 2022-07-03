import me2 from '../../images/me2.jpg';
import './AboutMe.css';

const AboutMe = () => {

    return(
        <section class="d-flex justify-content-center align-items-center text-light p-3">
            <div class="container">
                <h1 class="fs-2 text-center"><span class="text-warning fw-bold">A</span>BOUT <span class="text-warning fw-bold">M</span>E</h1>
            
                <div class="d-flex align-items-center ">
                    <div class="flex-shrink-0">
                        <img id='aboutme-img' class="img-fluid" src={ me2 } alt="..." />
                    </div>
                    <div class="flex-grow-1 ms-5 text-center">
                    
                        <h5 class="fw-bold fs-4 py-3">2<span class="border-bottom">01</span>4</h5>
                        <p class="lead">
                            Graduated as an <span class="text-warning fw-bold fs-2">IT</span> at <span class="text-warning fw-bold fs-2">U</span>niversity of <span class="text-warning fw-bold fs-2">M</span>indanao
                        </p>
                        <h5 class="fw-bold fs-4 py-3">201<span class="border-bottom">5 - 2</span>017</h5>
                        <p class="lead">
                            Worked as an <span class="text-warning fw-bold fs-2">IT</span> <span class="fw-bold fs-2">Assistant</span> at <span class="text-warning fw-bold fs-2">P</span>enong's <span class="text-warning fw-bold fs-2">F</span>ranchise <span class="text-warning fw-bold fs-2">C</span>orporation
                            <p class="fs-6 fw-bold">Maintaining POS Devices, Network, CCTV and Computer Devices.</p>
                        </p>
                        <h5 class="fw-bold fs-4 py-3">201<span class="border-bottom">8 - 2</span>021</h5>
                        <p class="lead">
                            Worked as a <span class="text-warning fw-bold fs-2">MIS</span><span class="fw-bold fs-2">Assistant</span> at <span class="text-warning fw-bold fs-2">S</span>outhern <span class="text-warning fw-bold fs-2">M</span>ortors of <span class="text-warning fw-bold fs-2">D</span>avao <span class="text-warning fw-bold fs-2">I</span>nc.
                            <p class="fs-6 fw-bold">Maintains Network, CCTV, Computer Devices and generate a report using Progress language.</p>
                        </p>
                        <h5 class="fw-bold fs-4 py-3">PR<span class="border-bottom">ESE</span>NT</h5>
                        <p class="lead">
                            Worked as an <span class="text-warning fw-bold fs-2">ALL</span> <span class="fw-bold fs-2">Around</span> at my <span class="text-warning fw-bold fs-2">B</span>usiness.
                            <p class="fs-6 fw-bold">Configure Network of our WISP, CCTV, Computer Devices and POS.</p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;