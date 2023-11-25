import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import './AdminAuditory.css';


export default function AdminAuditory() {
    const [auditories, setAuditories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [auditoriesPerPage, setAuditoriesPerPage] = useState(3);

    useEffect(() => {
        const fetchAuditories = async () => {
            const response = await axios.get(`${BASE_URL}/api/logHistory/`, {
                params: {
                    page: currentPage,
                    limit: auditoriesPerPage
                }
            });
            setAuditories(response.data.data);
        };

        fetchAuditories();
    }, [currentPage, auditoriesPerPage]);

    useEffect(() => {
        const fetchTotalAuditories = async () => {
            const response = await axios.get(`${BASE_URL}/api/auditory/`);
            const totalAuditories = response.data.data.length;
            const totalPages = Math.ceil(totalAuditories / auditoriesPerPage);
            setTotalPages(totalPages);
        };

        fetchTotalAuditories();
    }, [auditoriesPerPage]);

    const [totalPages, setTotalPages] = useState(0);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="all-users-main">
            <h1 className="all-users-title">LISTA DE AUDITORIAS</h1>
            <table className="all-users-table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {auditories.map((auditory) => (
                        <tr key={auditory?._id}>
                            <td>
                                {auditory?.createdAt}
                            </td>
                            <td>
                                {auditory?.user.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
            <div className="pagination" style={{gap:'1rem'}}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className="aau-btn" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
            </div>
        </div>
    );
}