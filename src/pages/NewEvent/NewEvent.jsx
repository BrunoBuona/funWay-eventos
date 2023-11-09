import AdminTopNavbar from "../../layouts/Admin/AdminTopNavbar/AdminTopNavbar"
import './NewEvent.css'
import { useRef } from "react"
import axios from "axios"
import {BASE_URL} from '../../api/url'
import Swal from "sweetalert2"

export default function NewEvent() {
    const {token} = JSON.parse(localStorage.getItem('token'));
    const cliente = useRef("");
    const fecha_evento = useRef("");
    const hora_evento = useRef("");
    const localizacion = useRef("");
    const tipo_evento = useRef("");
    const adicionales = useRef("");
    const capacidad = useRef("");

    const createEvent = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}` // Agregar el token como Bearer
            }
        };
        const data = {
            cliente: cliente.current.value,
            localizacion: localizacion.current.value,
            fecha_evento: fecha_evento.current.value,
            hora_evento: hora_evento.current.value,
            tipo_evento: tipo_evento.current.value,
            adicionales: adicionales.current.value,
            capacidad: capacidad.current.value
        };

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Se creará un nuevo evento.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1D4ED8',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Crear evento'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${BASE_URL}/api/events/`, data, config)
                    .then((response) => {
                        Swal.fire({
                            title: 'Evento creado exitosamente',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        });
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: 'Error al crear el evento',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        });
                    });
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            } else if (result.isDismissed) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };

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
                            <input ref={cliente} type="text" name="client" id="client" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="date">Fecha</label>
                            <input ref={fecha_evento} type="date" name="date" id="date" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="timeEvent">Hora del Evento</label>
                            <input ref={hora_evento} type="time" name="timeEvent" id="timeEvent" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="place">Lugar</label>
                            <input ref={localizacion} type="text" name="place" id="place" />
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="category">Tipo de evento</label>
                            <select ref={tipo_evento} name="category" id="category">
                                <option value="1">Seleccionar</option>
                                <option value="1">Cumpleaños Niños</option>
                                <option value="3">Cumpleaños XV</option>
                                <option value="4">Casamiento</option>
                            </select>
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="extras">Adicionales Contratados</label>
                            <select ref={adicionales} name="extras" id="extras">
                                <option value="1">Seleccionar</option>
                                <option value="1">Inflable</option>
                                <option value="2">Celebridad</option>
                                <option value="3">Catering</option>
                                <option value="4">Fotografía</option>
                                <option value="5">A domicilio</option>
                            </select>
                        </div>
                        <div className="ce-main-form-container-input">
                            <label htmlFor="capacity">N° de Invitados</label>
                            <input ref={capacidad} type="number" name="capacity" id="capacity" placeholder="En números, indica la cantidad de invitados del evento." />
                        </div>
                        <h6 style={{ color: 'grey' }}>Esta pagina funciona correctamente. 09/11/23.</h6>
                        <button className="btn-confirm-ne" onClick={createEvent}>Crear nuevo evento</button>
                    </div>
                </div>
            </main>
        </>
    )
}
