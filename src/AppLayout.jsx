import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AppLink = ({to, children}) => {
    return (
        <li>
            <NavLink
                to={to}
                style={({isActive})=>{
                    return {
                        color: isActive? "blue":"inherit",
                        width: "100%",
						display: "flex",
						alignItems: "center",
						gap: "0.5rem",
                    }
                }}
            >
                {{children}}
            </NavLink>
        </li>
    )
}

export default function AppLayout() {
  return (
    <div
        style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            background: "#f5f5f5",
        }}
    >
      <aside
        style={{
            background: "white",
            width: "300px",
            borderRight: "1px solid #3333",
            padding: "2rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
        }}
      >
        <ul
            style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1",
                padding: 0,
            }}
        >
            <AppLink to="/">Home</AppLink>
        </ul>
      </aside>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header
            style={{
                display: "flex",
                alignItems: "center",
                background: "white",
                height: "64px",
                borderBottom: "1px solid #ddd",
                padding: "0 1.5rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
            }}
        >
            NoteBook App
        </header>
        <main style={{ flex: 1 }}>
            <Outlet/>
        </main>
        <footer style={{ textAlign: "center", padding: "1rem" }}>
            My app name Copyright &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
