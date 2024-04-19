import Nav from "../Navigation"
import style from './Header.module.css'

const Header = () =>{
    return(
        <header className={style.header}>
            <div>ALEKSDEV</div>
            <Nav />
        </header>
    )
}

export default Header