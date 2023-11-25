import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { MdModeEdit } from "react-icons/md";
import './AdminAllUsers.css';

export default function AdminAllUsers() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(3);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(`${BASE_URL}/api/auth/user/`, {
                params: {
                    page: currentPage,
                    limit: usersPerPage
                }
            });
            setUsers(response.data.data);
        };

        fetchUsers();
    }, [currentPage, usersPerPage]);

    useEffect(() => {
        const fetchTotalUsers = async () => {
            const response = await axios.get(`${BASE_URL}/api/auth/user/`);
            const totalUsers = response.data.data.length;
            const totalPages = Math.ceil(totalUsers / usersPerPage);
            setTotalPages(totalPages);
        };

        fetchTotalUsers();
    }, [usersPerPage]);

    const [totalPages, setTotalPages] = useState(0);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="all-users-main">
            <h1 className="all-users-title">LISTA DE USUARIOS</h1>
            <table className="all-users-table">
                <thead>
                    <tr>
                        <th>Imagen de Perfil</th>
                        <th>Nombre & Apellido</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <img
                                    style={{ height: '50px' }}
                                    src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png"
                                    alt="Imagen de Usuario"
                                />
                            </td>
                            <td>{user?.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link to={`/admin/user/${user.id}`}>
                                    <MdModeEdit size={'1.8em'} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination" style={{gap:'1rem'}}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className="aau-btn" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}