import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import AdminButton from "../AdminButton/AdminButton";
import "./AdminNav.css";
import { FaHome, FaHistory,FaUserFriends, FaFolderOpen, FaEye, FaPlus, FaCalendarDay } from 'react-icons/fa'
import { FaTableList } from "react-icons/fa6";
import {  HiLockOpen, HiRss } from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from './logo.png'
import { useSelector } from "react-redux";
export default function AdminNav({ isMobile, menuIsOpen }) {
  let user = useSelector(user => user.user.user)
  return (
    <AnimatePresence>
      {(!isMobile || (isMobile && menuIsOpen)) && (
        <motion.div
          className="AdminNav"
          initial={{ x: -768 }}
          animate={{ x: 0 }}
          exit={{ x: -768 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="logo-block-adminNav">
            <img style={{ height: '100%', width: '100%' }} src={logo} alt="" />
          </div>
          {user?.role === 'animador' ? (
            <>
              <Link to='/menu/inicio'     className="link-admin-nav"><FaHome /> Inicio</Link>
              <Link to='/menu/my-events'  className="link-admin-nav"><FaCalendarDay /> Mis Eventos</Link>
              <Link to='/menu/all-events' className="link-admin-nav"><FaEye /> Eventos Disponibles</Link>
            </>
          ) : user?.role === 'salon' ? (
            <>
            <Link to='/menu/inicio'      className="link-admin-nav"><FaHome /> Inicio</Link>
              <Link to='/menu/new-event' className="link-admin-nav"><FaPlus /> Crear Evento</Link>
              <Link to='/menu/my-events' className="link-admin-nav"><FaFolderOpen /> Mis Eventos</Link>
            </>
          ) : user?.role === 'admin' ? (
            <>
              <Link to='/menu/inicio'     className="link-admin-nav"><FaHome /> Inicio</Link>
              <Link to='/menu/new-event'  className="link-admin-nav"><FaPlus /> Crear Evento</Link>
              <Link to='/menu/all-events' className="link-admin-nav"><FaTableList /> Lista de Eventos</Link>
              <Link to='/menu/all-users'  className="link-admin-nav"><FaUserFriends /> Lista de Usuarios</Link>
              <Link to='/menu/audit-log'  className="link-admin-nav"><FaHistory /> Auditoria Web</Link>
            </>
          ) : null}
          <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }} className="mt-auto ">
            <Link to='/' className="go-back-admin"><HiArrowLeftOnRectangle /> Volver al Sitio Web</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
