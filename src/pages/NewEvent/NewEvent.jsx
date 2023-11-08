import AdminTopNavbar from "../../layouts/Admin/AdminTopNavbar/AdminTopNavbar"
import './NewEvent.css'
import { useRef } from "react"
import axios from "axios"
import {BASE_URL} from '../../api/url'

export default function NewEvent() {
    const {token} = JSON.parse(localStorage.getItem('token'))
    const clientRef = useRef("")
    const dateRef = useRef()
    const timeArrivalRef = useRef()
    const timeEventRef = useRef()
    const placeRef = useRef()
    const categoryRef = useRef()
    const capacityRef = useRef()
    const organizerRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const animatorsRef = useRef()
    const extrasRef = useRef()

    const createEvent = async () => {
        const eventData = {
            cliente: clientRef.current.value,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}` // Agregar el token como Bearer
            }
        };

        try {
            const response = await axios.post(`${BASE_URL}/api/events/`, eventData, config);
            alert("Evento creado exitosamente", response.data);
        } catch (error) {
            alert("Error al crear el evento");
            console.log(error);
        }
    }

    return (
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
                            <label htmlFor="client">Nombre del Cliente</label>
                            <input ref={clientRef} type="text" name="client" id="client" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="date">Fecha</label>
                            <input ref={dateRef} type="date" name="date" id="date" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="timeArrival">Hora de Llegada</label>
                            <input ref={timeArrivalRef} type="time" name="timeArrival" id="timeArrival" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="timeEvent">Hora del Evento</label>
                            <input ref={timeEventRef} type="time" name="timeEvent" id="timeEvent" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="place">Lugar</label>
                            <input ref={placeRef} type="text" name="place" id="place" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="category">Tipo de evento</label>
                            <select ref={categoryRef} name="category" id="category">
                                <option value="1">Seleccionar</option>
                                <option value="1">Cumpleaños Niños</option>
                                <option value="3">Cumpleaños XV</option>
                                <option value="4">Casamiento</option>
                            </select>
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="extras">Adicionales (Varían según tipo de evento)</label>
                            <select ref={extrasRef} name="extras" id="extras">
                                <option value="1">Seleccionar</option>
                                <option value="1">Inflable</option>
                                <option value="2">Celebridad</option>
                                <option value="3">Catering</option>
                                <option value="4">Fotografía</option>
                                <option value="5">A domicilio</option>
                            </select>
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="capacity">Cantidad Invitados</label>
                            <input ref={capacityRef} type="number" name="capacity" id="capacity" placeholder="En números, indica la cantidad de invitados del evento." />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="animators">Asignar Animadores</label>
                            <input ref={animatorsRef} type="search" placeholder="Escribe el nombre del animador." />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="organizer">Salón</label>
                            <input ref={organizerRef} type="text" name="organizer" id="organizer" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="phone">Teléfono</label>
                            <input ref={phoneRef} type="text" name="phone" id="phone" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef} type="email" name="email" id="email" />
                        </div>
                        <h6 style={{ color: 'grey' }}>Los datos dinámicos no están disponibles durante la BETA.</h6>
                        <button className="btn-confirm-ne" onClick={createEvent}>Crear nuevo evento</button>
                    </div>
                </div>
            </main>
        </>
    )
}
