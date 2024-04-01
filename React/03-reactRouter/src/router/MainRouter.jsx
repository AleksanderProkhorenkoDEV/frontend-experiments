import Home from '../pages/Home'
import { Route, Routes } from "react-router-dom"
import HomeName from '../pages/HomeName'

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/hello" element={<Home />} />
            <Route path='/hello/:name' element={<HomeName />}/>
        </Routes>
    )
}

export default MainRouter