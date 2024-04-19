'use client'

import style from '@/components/Navigation/css/Navigation.module.css'
import route from "@/constant/router"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const Nav = () => {
    

    const menuLink = route.map(route => {
        const path = usePathname();
        const linkStyle = path === route.url ? 'active' : 'link';
        return (
            <Link href={route.url} key={route.page} className={linkStyle}>
                {route.page}
            </Link>
        );
    });

    return (
        <nav className={style.nav}>
            {menuLink}
        </nav>
    );
}

export default Nav