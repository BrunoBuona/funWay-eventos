import AdminTopNavbar from "../../layouts/Admin/AdminTopNavbar/AdminTopNavbar"
import { useRef } from "react"
import './NewEvent.css'

export default function NewEvent() {
    const clientRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()
    const placeRef = useRef()
    const categoryRef = useRef()
    const capacityRef = useRef()
    const organizerRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const animatorsRef = useRef()
    const extrasRef = useRef()

    const data = {
        client: '',
        date: '',
        time: '',
        place: '',
        category: '',
        capacity: '',
        organizer: '',
        phone: '',
        email: '',
        animators: [],
        extras: [],
    }

    return(
        <>
            <AdminTopNavbar
                otherLinks={[
                    { path: '/settings', label: 'Settings' },
                    { path: '/alerts', label: 'Alerts' },
                    { path: '/exit', label: 'Exit' },
                    // Agrega más enlaces de otras categorías según sea necesario
                ]}
            />
        <main className="ce-main-container">
            <div className="ce-main-titles">
                <h1>CREAR NUEVO EVENTO</h1>
            </div>
            <div className="ce-main-form">
                <div className="ce-main-form-container">
                    <div className="ce-main-form-container-input">
                        <label htmlFor="title">Nombre del Cliente</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="date">Fecha</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="time">Hora de Llegada</label>
                        <input type="time" name="time" id="time" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="time">Hora del Evento</label>
                        <input type="time" name="time" id="time" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="place">Lugar</label>
                        <input type="text" name="place" id="place" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="price">Tipo de evento </label>
                        <select name="category" id="category" >
                            <option value="1">Seleccionar</option>
                            <option value="1">Cumpleaños Niños</option>
                            <option value="3" onSelect={e => setEventPrice(30)}>Cumpleaños XV</option>
                            <option value="4">Casamiento</option>
                        </select>
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="category">Adicionales  (Varian segun tipo de evento) </label>
                        <select name="category" id="category" >
                            <option value="1">Seleccionar</option>
                            <option value="1">Inflable</option>
                            <option value="2">Celebridad</option>
                            <option value="3">Catering</option>
                            <option value="4">Fotografia</option>
                            <option value="5">A domicilio</option>
                        </select>
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="capacity">Cantidad Invitados</label>
                        <input type="number" name="capacity" id="capacity" placeholder="En numeros indicá la cantidad de invitados del evento." />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="capacity">Asignar Animadores</label>
                            <input type="search" placeholder="Escribi el nombre del animador." />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="organizer">Salon</label>
                        <input type="text" name="organizer" id="organizer" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                    <div className="ce-main-form-container-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <h6 style={{color:'grey'}}>Los datos dinamicos no estan disponibles durante la BETA.</h6>
                    <button className="btn-confirm-ne">Crear nuevo evento</button>
                    </div>
                    </div>
        </main>
        </>
    )
}