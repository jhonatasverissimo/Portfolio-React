import './../Style/style.css'
function Header(){
    
        return(
            <nav class="nav">
                <section class="containerNav">
                
                {/* Logo */}
                <div class="navLogo">
                <a href="google.com" >Jhonny</a>
                </div>
                
                {/*Links*/}
                <div class="navMenu">
                    <ul>
                        <li><a href="google.com" class="navLink">Home</a></li>
                        <li><a href="google.com" class="navLink">Tecnologias</a></li>
                        <li><a href="google.com" class="navLink">Portfolio</a></li>
                        <li><a href="google.com" class="navLink">Sobre</a></li>
                        
                    
                    </ul>    
                </div>

                {/*Botão CTA*/}
                <div>
                    <a href="google.com" class="navCTA">Contact</a>
                </div>
                </section>
            </nav>
        )
        
    
}

export default Header;