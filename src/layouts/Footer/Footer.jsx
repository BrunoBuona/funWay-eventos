import React from "react"
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
function Footer() {
    return (
        <footer className="footer">
                <h2 className="other-titles-footer" style={{textTransform:'uppercase'}}>Nuestras redes oficiales</h2>
                <div className="container-btns-footer">
                <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="facebook"  fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <a target="_blank" style={{textDecoration:'none',color:'#ffffff'}} href="https://web.facebook.com/FunWayEventos">
                        <h6 className="footer-social-text">Facebook</h6>
                        </a>
                    </button>
                    <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="instagram"  fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <a target="_blank" style={{textDecoration:'none',color:'#ffffff'}} href="https://www.instagram.com/funwayeventos/">
                        <h6 className="footer-social-text">Instagram</h6>
                        </a>
                    </button>
                    <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="whatsapp"  fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <a target="_blank" style={{textDecoration:'none',color:'#ffffff'}} href="https://api.whatsapp.com/send?phone=+5491169979604&text=Hola%2C+quiero+cotizar+un+evento+%C2%BFPodr%C3%ADas+ayudarme%3F+%F0%9F%98%81">
                        <h6 className="footer-social-text">Whatsapp</h6>
                        </a>
                    </button>
                </div>

                <div>
                    <h4 style={{textAlign:'center',color:'lightgrey'}} className="footer-text">© 2016-2023 FUNWAY EVENTOS <br /> <span style={{color:'lightgrey'}}>Todos los derechos reservados.</span></h4>
                </div>
        </footer>
    )
}
export { Footer }
