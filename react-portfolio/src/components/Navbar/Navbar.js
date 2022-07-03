
const Navbar = () => { 
    return(
        <nav class="navbar navbar-expand-lg p-3 navbar-dark" id="mainNav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">PORTFOLIO</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SERVICES</a>
                    </li>   
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;