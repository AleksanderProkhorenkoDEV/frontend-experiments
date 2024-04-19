'use client'

import { routes } from "@/app/router/routes"
import { usePathname } from "next/navigation"
import navStyle from './Nav.module.css'
import Link from "next/link"

const Nav = () => {

    const path = usePathname()

    const navLinks = routes.map(route => {
        
        const isActive = path === route.url
        const linkClassName = isActive ? navStyle.active : navStyle.link;

        return <Link href={route.url} key={route.url} className={linkClassName}>{route.text}</Link>
    })

    return (
        navLinks
    )
}

export default Nav