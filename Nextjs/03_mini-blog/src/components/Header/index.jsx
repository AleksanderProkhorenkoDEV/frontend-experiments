import style from '@/components/Header/css/Header.module.css'
import Nav from "@/components/Navigation/index";

const Header = ( ) => {

    return(
        <header className={style.header}>
            <p className={style.logo}>Mini Blog v1</p>
            <Nav />
        </header>
    )
}

export default Header;