import AdminTopNavbar from "../../layouts/Admin/AdminTopNavbar/AdminTopNavbar";
import './AdminHome.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();

  function redirectToEvent(id) {
      navigate(`/event?id=${id}`);
  }
  const [userName, setUserName] = useState('');
  const user = useSelector(state => state.user.user)
  const role = useSelector(state => state.user.user.role).toUpperCase()
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let userCapitalized = capitalize(userName)
  useEffect(() => {
    // Obtener el usuario actual
    if (user.email) {
      // Función para obtener el nombre antes de @gmail.com
      const extractNameFromEmail = (email) => {
        const parts = email.split("@");
        if (parts.length === 2) {
          return parts[0];
        }
        return "";
      };

      const userName = extractNameFromEmail(user.email);
      setUserName(userName)
    }
  }, [user]);
  return (
    <>
      <AdminTopNavbar
        links={[
          { path: '#', label: '' },
        ]} />
    <div className="AdminHome" style={{ maxWidth: '100%' }}>
      <main style={{ maxWidth: '100%', width: '100%', minHeight: '90vh', height: 'auto', display: 'flex', alignContent: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
        {user?.verified == 'true' ? (
          <div className="alert-account-verified" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <p>Tu cuenta fue verificada y aprobada. Puedes utilizar sin restricciones la plataforma.</p>
          </div>
        ) : user?.verified == 'banned' ? (
          <div className="alert-account-blocked" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <p>Tu cuenta fue bloqueada por un administrador. No puedes utilizar la plataforma.</p>
          </div>
        ) : (
          <div className="alert-account" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <p>Tu cuenta aún está pendiente de revisión y aprobación. No podrás usar la plataforma hasta ser verificado.</p>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', flexWrap: 'wrap' }}>
          <section className="profile-card-section">
            <div className="p-c-s-picture">
              <div className="p-c-s-data-top">
                <h2>{userCapitalized}</h2>
                <h2><span>{role}</span></h2>
              </div>
              <div className="p-c-s-data-bottom">
                <h2>4.75⭐</h2>
                <h3>(25 reseñas)</h3>
                <button>Leer reseñas</button>
              </div>
            </div>
          </section>
          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flexGrow: '1' }}>
            <h2>Ultimas Asignaciones</h2>
            <table className="funway-table">
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
          </section>
          <h6 style={{color:'grey'}}>Los datos dinamicos no estan disponibles durante la BETA.</h6>
        </div>
      </main>
    </div>
    </>
  );
}