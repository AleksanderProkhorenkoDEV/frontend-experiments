import { indexAuthor } from '../../../lib/Request/MaintRequest';
import style from '@/components/Board/css/Table.module.css';
import BoardHeader from './parts/board-header';
import BoardBody from './parts/board-body';

const Table = async () => {

    const data = await indexAuthor()
    
    return (
        <table className={style.table}>
            <BoardHeader />
            <BoardBody data={data} />
        </table>
    )
}


export default Table