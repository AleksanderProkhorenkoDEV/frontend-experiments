import { useParams } from 'react-router-dom'

const HomeName = () => {
    let { name } = useParams();

    return (
        <h1>Your name is: {name}</h1>
    )
}

export default HomeName