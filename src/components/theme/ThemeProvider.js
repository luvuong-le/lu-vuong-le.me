import React, { useState, useEffect } from "react"

/**
 * Theme Provider: Provide theme to components
 */
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        setDefaultTheme()
        return () => {}
    }, [theme])

    const getTheme = () => {
        if (theme) {
            return theme
        } else {
            return localStorage.getItem("theme")
        }
    }

    const setDefaultTheme = () => {
        if (!localStorage.getItem("theme") || !theme) {
            localStorage.setItem("theme", "light")
        }
        setTheme(localStorage.getItem("theme"))
    }

    return <div>{children({ theme: getTheme(), setTheme })}</div>
}
