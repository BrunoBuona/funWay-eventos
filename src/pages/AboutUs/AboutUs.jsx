import './AboutUs.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function AboutUs() {
    function BlockInfo(props){
        let {title, description, image, side} = props;
        return (
            <div className='block2-aboutus'>
                <section className={`b2-au-bck-section-${side}`}>
                    <div className='col1-b2-au'>
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                    </div>
                    <div className='col2-b2-au-img'>
                        <img src={image} alt="FunWays Team" />
                    </div>
                </section>
            </div>
        );
    }
    function ReviewCard(props){
    let {name, description, image, rating} = props;
    return (
        <div className='review-card'>
            <div className='review-card-img'>
                <img src={image} alt="FunWays Client" />
            </div>
            <div className='review-card-text'>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <div className='review-card-rating'>
                    <h3 >{rating}</h3>
            </div>
        </div>
        </div>
    );
}
    return (
        <>
        <main style={{display:'flex',flexDirection:'column'}}>
            <div className='block1-aboutus'>
                <div className='b1-au-bck-img'>
                    <div className='overlay-black'>
                        <h1 style={{fontWeight:'800',color:'white',fontSize:'4rem'}}>Somos FunWay Eventos</h1>
                    </div>
                </div>
            </div>
            <div className='block2-aboutus'>
           <BlockInfo title='Historia de FunWay' description='Nos dedicamos a crear momentos mágicos y memorables para los más pequeños de la casa. Somos una empresa apasionada por la alegría y la diversión, y estamos comprometidos en hacer que los eventos infantiles sean inolvidables.' image='https://www.betterup.com/hubfs/Google%20Drive%20Integration/Delivery%20URL%20-%20BetterUp%20-%20importance%20of%20teamwork%20%5BARTICLE%5D-3.jpeg'side='normal' />
           <hr className='hr-block-about' />
           <BlockInfo title='Nuestros exitos como empresa' description='Nos dedicamos a crear momentos mágicos y memorables para los más pequeños de la casa. Somos una empresa apasionada por la alegría y la diversión, y estamos comprometidos en hacer que los eventos infantiles sean inolvidables.' image='https://getsling.com/wp-content/uploads/2018/10/pasted-image-0-4.png' side='reversed' />
           <hr className='hr-block-about' />
           <BlockInfo title='¿Donde estamos hoy?' description='Nos dedicamos a crear momentos mágicos y memorables para los más pequeños de la casa. Somos una empresa apasionada por la alegría y la diversión, y estamos comprometidos en hacer que los eventos infantiles sean inolvidables.' image='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2020-08/shutterstock_1731284125_0.jpg?itok=89UrdUt_' side='normal' />
            </div>
            <div className='block3-aboutus-reviews'>
                <div className='b3-rev-bck-img'>
                    <div className='col1-b3-titles'>
                        <h1>¿Que dicen nuestros clientes?</h1>
                        <h2>Conoce las opiniones de nuestros clientes</h2>
                    </div>
                    <div className='col2-b3-rev-cards'>
                    <FaAngleDoubleLeft/>
                      <ReviewCard name='Selena Gomez' description='10/10. Excelente trato y excelentes animadores. Una buena onda innata que se transmite y se devuelve con sonrisas.' rating='4⭐' image='https://media.vogue.mx/photos/5df12f6df1bbef0008e5a4f1/1:1/w_2258,h_2258,c_limit/Estilo%20de%20Selena%20Gomez.jpg' /> 
                      <ReviewCard name='Sandra Muñoz' description='Me encantó. A mis hijas las volvió locas ese Harry Potter con sus burbujas jajajaja.' rating='5⭐' image='https://www.famousbirthdays.com/headshots/sandra-munoz-4.jpg' /> 
                      <ReviewCard name='Paola Barale' description='Enzo y su equipo hacen un trabajo espectacular, los volveria a contratar de nuevo.' rating='4⭐' image='https://upload.wikimedia.org/wikipedia/it/2/23/Paola_Barale_-_1992.jpg' />
                      <FaAngleDoubleRight style={{position:'relative',bottom:'0'}} height="55px"/>
                    </div>
                </div>
            </div>
            <div className='cta-aboutus' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignContent:'center',textAlign:'center',height:'50vh',gap:'3rem'}}>
                <h2 style={{fontSize:'3.2rem'}}>
                    FunWay llega a toda la 
                    <span className='AR1'> ARG</span>
                    <span className='AR2'>ENT</span>
                    <span className='AR1'>INA</span>
                </h2>
                <h3 style={{width:'50%'}}>Es momento de tomar la decisión y elegír una empresa que se preocupa por tus hijos, y deja momentos unicos e inolvidables en sus memorias. </h3>
               <Link className='Link-DOM' to='/contact'>
               <button className='btn-contact-us'>¡LOS QUIERO!</button>
               </Link> 
            </div>
        </main>
        </>
    );
    }
