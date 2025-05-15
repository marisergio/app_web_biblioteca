import { Outlet } from "react-router-dom";
import style from '../App.module.css'
import { Header } from "../componentes/Header";
import { Sidebar } from "../componentes/Sidebar";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <Sidebar />
                <Outlet />
            </div>
            
        </div>
    )
}