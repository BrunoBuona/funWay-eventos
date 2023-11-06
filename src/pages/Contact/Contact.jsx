import './Contact.css';




export default function Contact(){
    return(
        <main className='main-contact-container'>
            <div className='leftside-contact'>
                <img src="https://i.pinimg.com/originals/bb/8a/72/bb8a723b2dca962e817d2e6e0752638f.jpg" alt="Mapa BA" />
            </div>
            <div className='rightside-contact'>
                <h1>Lleva a FunWay a tu evento</h1>
                <form className='contact-form' action="">
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Teléfono' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                    <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'flex-start',alignItems:'center',gap:'1rem'}}>
                    <input style={{width:'auto'}} type="checkbox" name="" id="" />
                        <p>
                        He leído y acepto la 
                        <span style={{color:'blue'}}>
                         Politica de Privacidad
                        </span>.
                        </p>
                    </div>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </main>
    )
}