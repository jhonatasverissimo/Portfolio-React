import './../Style/style.css';

function Hero(){
    return(
        <>
            <section className="container">
                <section className="col">
                    <h3>Seja Bem vindo</h3>
                    <h1>New Way To Learn English language</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl malesuada fames semper sed eget purus velit sed nec.</p>
                    <section>
                        <a href={Hero} className="btn">Contact</a>
                        <a href={Hero} className="btn">Contact</a>
                    </section>

                    <section>
                        <img src="" alt="Icon" className='social-icon'/>
                        <img src="" alt="Icon" className='social-icon'/>
                        <img src="" alt="Icon" className='social-icon'/>
                    </section>

                </section>

                <section className="col">
                    <img src="" alt="Jhonatas Verissimo" />
                </section>
            </section>


        </>
    )
}
export default Hero;