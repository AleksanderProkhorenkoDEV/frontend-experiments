import { getData } from "@/Actions"
import Tr from "../Tr";

const Table = async () => {

    const dataFetch = await getData()

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {dataFetch.map((item) => (
                        <Tr 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            gender={item.gender} />
                ))}
            </tbody>
        </table>
    )
}

export default Table
