import React, { useRef } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'
import { BASE_URL } from '../../../api/url'
import './Form.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Form() {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const roleRef = useRef();
    const navigate = useNavigate();

    async function saveData(e) {
        e.preventDefault();
        const userValue = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: roleRef.current.value,
        };

        if (userValue.role === 'select-t-account') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Debes seleccionar un tipo de cuenta',
            });
        } else if (userValue.role === 'animador' || userValue.role === 'salon') {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                html: 'Estas a punto de registrarte <br/>como un proveedor de servicios.<br/> Esto requiere una validación manual <br/> por parte de un administrador.',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: `Registrarme como ${userValue.role}.`,
                cancelButtonText: `Cancelar registro`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await axios.post(`${BASE_URL}/api/auth/sign-up`, userValue);
                        if (res.status === 201) {
                            Swal.fire({
                                icon: 'success',
                                title: '¡Genial!',
                                text: '¡Te registraste correctamente!',
                            });
                            formRef.current.reset();
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: res.data.message,
                            });
                        }
                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: error.response.data.message,
                        });
                    }
                } else if (result.isDenied) {
                    Swal.fire('Cancelaste el registro.', 'Selecciona el tipo de cuenta y confirma nuevamente.', 'info');
                }
            });
        } else {
            try {
                const res = await axios.post(`${BASE_URL}/api/auth/sign-up`, userValue);

                if (res.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Genial!',
                        text: '¡Te registraste correctamente!',
                    });
                    formRef.current.reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: res.data.message,
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response.data.message,
                });
            }
        }
    }

    return (
        <>
            <div className="full-container-fluid d-flex container-login">
                <div className="w-100">
                    <form ref={formRef} className="formSign pb-5">
                        <div className="form-shadows-content pb-3">
                            <div className="form-title-div pt-5 pb-3 text-center">
                                <h2 className="title2Sign">Registrate <br />en FunWay</h2>
                            </div>
                        </div>
                        <div className="form-bodySign pt-3 w-50">
                            <div className="inputGroup">
                                <input id="email" type="email" required autoComplete="off" ref={emailRef} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputGroup">
                                <input id="password" type="password" required autoComplete="off" ref={passwordRef} />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <select style={{ textAlign: 'center', width: '100%' }} name="type" id="" ref={roleRef}>
                                    <option value="select-t-account">Seleccionar tipo de cuenta</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="animador">Animador</option>
                                    <option value="salon">Salon</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={saveData} className="submit2Sign">Registrar cuenta</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <div className="right-content-title text-center">
                        <h1 className="title">¿Ya tienes una cuenta?</h1>
                        <h5 className="subTitle">Haz clic en el botón para iniciar sesión.</h5>
                        <button className="submit2SignUp" onClick={() => navigate('/signin')}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </>
    );
}