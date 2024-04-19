import style from '@/components/Board/css/Table.module.css';
import Button from '@/components/Buttons/single';

const BoardBody = ({ data }) => {

    const rowColum = data?.map(row => {
        return (
            <tr key={row.id}>
                <td className={style.td}>{row.id}</td>
                <td className={style.td}>{row.name}</td>
                <td className={style.td}>{row.surnames}</td>
                <td className={style.td}>
                    <Button
                        id={row.id}
                        action={'single'}
                        text={'Show'}
                    />
                    <Button
                        id={row.id}
                        action={'edit'}
                        text={'Edit'}
                    />
                </td>
            </tr>
        )
    })


    return (
        <tbody className={style.tbody}>
            {rowColum}
        </tbody>
    );
};

export default BoardBody;