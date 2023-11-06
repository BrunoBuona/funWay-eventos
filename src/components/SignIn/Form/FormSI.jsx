import React, { useRef } from "react";
import Swal from 'sweetalert2';
import '../../SignUp/Form/Form.css'
import { useDispatch } from 'react-redux'
import userActions from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { login } = userActions
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

    
    async function saveData(e) {
        e.preventDefault()
        let userValue = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try {
            let res = await dispatch(login(userValue)).unwrap()
            let {response, success, message} = res
            if(success){
                Swal.fire({
                    title: '¡Success!',
                    html: message,
                    timer: 2200,
                    timerProgressBar: true,
                    willClose: () => {
                        navigate('/')
                    }
                })
            } else {

                if(Array.isArray(response)){
                    let text = response.join('<br>')
                    Swal.fire({
                        icon: 'error',
                        title: 'Errors: ',
                        html: text,
                    })
                } else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Errors: ',
                        text: response,
                    })
                }
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                showConfirmButton: true,
            });
            

        }
    }

    return (
        <>
            <div className="full-container-fluid d-flex container-login">
                <div className="w-100">
                    <form ref={formRef} className="formSign pb-5" >
                        <div className="form-shadows-content pb-3">
                            <div className="form-title-div pt-5 pb-3 text-center">
                                <h2 className="title2Sign">Ingresa a <br />FunWay</h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="bar" style={{ flex: 1, backgroundColor: "rgb(150, 150, 200)", height: "3px" }} />
                            <div className="bar" style={{ flex: 1, backgroundColor: "rgb(150, 150, 200)", height: "3px" }} />
                        </div>
                        <div className="form-bodySign pt-3 w-50">
                            <div class="inputGroup">
                                <input id="email" type="email" required autocomplete="off" ref={emailRef} />
                                <label for="email">Ingresa tu correo electronico</label>
                            </div>
                            <div class="inputGroup">
                                <input id="password" type="password" required autocomplete="off" ref={passwordRef} />
                                <label for="password">Ingresa tu contraseña</label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={saveData} className="submit2Sign">Iniciar Sesion</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                        <div className="right-content-title text-center">
                            <h1 className="title">¿No tienes cuenta aún?</h1>
                            <h5 className="subTitle">Haz click en el boton para registrarte.</h5>
                            <button className="submit2SignUp" onClick={() => navigate('/signup')}>Registrar mi cuenta</button>
                        </div>
                </div>
            </div >
        </>
    );
}