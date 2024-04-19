import style from '@/components/Board/css/Table.module.css';

const BoardHeader = () => {
    return (
        <thead>
            <tr>
                <th className={style.th}>ID</th>
                <th className={style.th}>Name</th>
                <th className={style.th}>Surname</th>
                <th className={style.th}>Actions</th>
            </tr>
        </thead>
    )
};

export default BoardHeader;