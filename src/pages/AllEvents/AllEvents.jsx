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
                        <div className="container-mec">
                <h1 style={{ textAlign: 'center' }}>Lista de eventos</h1>
                <div>
                    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                    <section className="table-my-events">
                    <button className="filters-btn" style={{width:'250px'}}>Filtros de Busqueda</button>
                        <table className="funway-table text-center">
                            <thead>
                                <tr>
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
                                <tr onClick={() => redirectToEvent(1)}>
                                    <td>Sandra Muñoz</td>
                                    <td>22/12/2023</td>
                                    <td>18:55hs</td>
                                    <td>Cumpleaños XV</td>
                                    <td>Nuñez 2048, Saavedra</td>
                                    <td>40</td>
                                    <td>0</td>
                                </tr>
                                <tr onClick={() => redirectToEvent(2)}>
                                    <td>Rosalia Fefel</td>
                                    <td>18/12/2023</td>
                                    <td>10:30hs</td>
                                    <td>Cumpleaños Infantil</td>
                                    <td>Bartolome Mitre 4088, Almagro</td>
                                    <td>51</td>
                                    <td>+8</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    </div>
                </div>
            </div>
        </>
    );
}
