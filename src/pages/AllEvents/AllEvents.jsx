import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminTopNavbar from "../../layouts/Admin/AdminTopNavbar/AdminTopNavbar";
import './AllEvents.css';
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from 'react-icons/fa';

export default function AllEvents() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Hacer la petición GET utilizando Axios
        axios.get('https://fw-backend.up.railway.app/api/events')
            .then(response => {
                // Actualizar el estado con los datos recibidos
                setEvents(response.data.data);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []); // El segundo parámetro del useEffect vacío garantiza que la petición se realice solo una vez al montar el componente
    function redirectToEvent(id) {
        navigate(`/event?id=${id}`);
    }
    return (
        <>
            <AdminTopNavbar
                otherLinks={[
                    { path: '/settings', label: 'Settings' },
                    { path: '/alerts', label: 'Alerts' },
                    { path: '/exit', label: 'Exit' },
                ]}
            />
            <div className="container-mec">
                <h1 style={{ textAlign: 'center' }}>Lista de eventos</h1>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <section className="table-my-events">
                            <button className="filters-btn" style={{ width: '250px' }}>Filtros de Busqueda</button>
                            <table className="funway-table text-center">
                                <thead>
                                    <tr>
                                        {/* <th>Creador</th> */}
                                        <th>Cliente</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Categoría</th>
                                        <th>Localización</th>
                                        <th>Invitados</th>
                                        <th>Adicionales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map(event => (
                                        <tr key={event?._id} onClick={() => redirectToEvent(event?._id)}>
                                            {/* <td>{event?.owner_event}</td> */}
                                            <td>{event?.cliente}</td>
                                            <td>{event?.fecha_evento}</td>
                                            <td>{event?.hora_evento}</td>
                                            <td>{event?.tipo_evento}</td>
                                            <td>{event?.localizacion}</td>
                                            <td>{event?.capacidad}</td>
                                            <td>{event?.adicionales}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}