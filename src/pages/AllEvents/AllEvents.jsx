import React from 'react';
import AdminTopNavbar from "../../layouts/Admin/AdminTopNavbar/AdminTopNavbar";
import './AllEvents.css';
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from 'react-icons/fa';

export default function AllEvents() {
    const navigate = useNavigate();

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
            <main className="main-container-ae">
                <h1>LISTA DE EVENTOS</h1>
                <div>
                    <div>
                        <label htmlFor="">
                            Buscar por fecha
                            <label htmlFor="">
                                Desde
                                <input type="date" />
                            </label>
                            <label htmlFor="">
                                Hasta
                                <input type="date" />
                            </label>
                        </label>
                    </div>
                    <label htmlFor=""> Tipo de Evento
                        <select name="" id="">
                            <option value="">Seleccionar</option>
                            <option value="">Cumpleaños de XV</option>
                            <option value="">Casamiento</option>
                            <option value="">Party Delivery</option>
                        </select>
                    </label>
                    <label htmlFor=""> Ordena ascendentemente por
                        <select name="" id="">
                            <option value="">Eventos más proximos</option>
                            <option value="">Eventos menos proximos</option>
                            <option value="">Zona A-z</option>
                            <option value="">Zona Z-a</option>
                        </select>
                    </label>
                </div>
                <section className="table-all-events">
                    <table className="funway-table text-center">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Evento</th>
                                <th>Localización</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={() => redirectToEvent(1)}>
                                <td>22/11/2021</td>
                                <td>18:45</td>
                                <td>Fiesta XV</td>
                                <td>Almagro</td>
                            </tr>
                            <tr onClick={() => redirectToEvent(2)}>
                                <td>28/11/2021</td>
                                <td>23:00</td>
                                <td>Party Delivery</td>
                                <td>Almagro</td>
                            </tr>
                        </tbody>
                    </table>
                    <h6 style={{ color: 'grey' }}>Los datos dinamicos no estan disponibles durante la BETA.</h6>
                </section>
            </main>
        </>
    );
}
