import './../Style/style.css';
function Header(){
    
        return(
            <nav className="nav">
                <section className="containerNav">
                
                {/* Logo */}
                <div className="navLogo">
                <a href="google.com" >Jhonny</a>
                </div>
                
                {/*Links*/}
                <div className="navMenu">
                    <ul>
                        <li><a href="google.com" className="navLink">Home</a></li>
                        <li><a href="google.com" className="navLink">Tecnologias</a></li>
                        <li><a href="google.com" className="navLink">Portfolio</a></li>
                        <li><a href="google.com" className="navLink">Sobre</a></li>
                        
                    
                    </ul>    
                </div>
                

                {/*Botão CTA*/}
                <div>
                    <a href="google.com" className="navCTA">Contact</a>
                </div>
                </section>
            </nav>
        )
        
    
}

export default Header;