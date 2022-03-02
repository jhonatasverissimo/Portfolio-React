import './style.css';
function Header(){
    
        return(
            <nav class="nav">
                <section class="containerNav">
                
                {/* Logo */}
                <div class="navLogo">
                    <a href="" >Logo</a>
                </div>
                
                {/*Links*/}
                <div class="navMenu">
                    <ul>
                        <li><a href="#" class="navLink">Home</a></li>
                        <li><a href="#" class="navLink">Tecnologias</a></li>
                        <li><a href="#" class="navLink">Portfolio</a></li>
                        <li><a href="#" class="navLink">Sobre</a></li>
                        
                    </ul>    
                </div>

                {/*Botão CTA*/}
                <div>
                    <a href="" class="navCTA">Contact</a>
                </div>
                </section>
            </nav>
        )
        
    
}

export default Header;