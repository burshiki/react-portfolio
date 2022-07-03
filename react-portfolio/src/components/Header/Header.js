import me1 from '../../images/me1.jpg';
import './Header.css';

const Header = () => {
    return(
    <section class="d-flex justify-content-center align-items-center text-light text-center header-main">
        <div class="container">    
            <div class="d-flex justify-content-center align-items-center">
                <div>
                    <p class="fw-light">hi, it's me</p>
                    <h1 class="fw-bold"><span class="text-warning">L</span>OUIE <span class="text-warning">J</span>OHN <span class="text-warning">M</span>ANUEL <span class="text-warning">L</span>AURO</h1>
                    <p class="lead fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur eget elit sed accumsan. Mauris euismod sodales nibh sit amet interdum. Phasellus mollis interdum euismod. Suspendisse vestibulum nibh at odio pulvinar, et finibus sapien vulputate. Morbi vitae pellentesque sem. Mauris at vulputate purus. Phasellus vitae tincidunt mauris, sit amet sollicitudin est.</p>
                </div>    
                <div class="px-3">
                    <img class="img-fluid w-50" src={ me1 } alt="" />
                </div>
            </div>
        </div>
    </section>
    );
}

export default Header;