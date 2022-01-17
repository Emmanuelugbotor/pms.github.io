import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SubsidiaryAction from './SubsidiaryAction'

interface tableComponentProps {
    heading: string,
    buttonContent: string,
    tableBody: {
        number: string,
        role_name: string,
        permission_count: number,
        user_count: number,
        created_by: string,
    }[],
    tableHeading: { title: string }[]

}

export default function TableForRoleManagement(props: tableComponentProps) {
    const pageSize = 4
    const newArray = Array.from({ length: pageSize }, (v, i) => i);
    newArray.shift()
    const paginationvalue = newArray;
    // handle pagination functionality...
    const [current, setCurrent] = useState(1)
    function handleCurrent(cur: any) {
        setCurrent(cur);
    }
    function handleDecrement() {
        setCurrent(current - 1);
    }
    function handleIncrement() {
        setCurrent(current + 1);
    }

    // handle the more details page...
    function handleMore() {
        console.log('handle more clicked...')
    }
    return (
        <div className="subsidiary">
            <div className="role_management_heading_search">
                <div className="role_management_heading">
                    {props.heading}
                </div>
                <div className="role_management_heading_s-csv">
                    <input type="search" placeholder="Search" />
                    <div className="new_role">
                        <AddIcon className="add" />
                        <span>{props.buttonContent}</span>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        {
                            props.tableHeading.map((item: any, index: number) => {
                                return <th key={index}>{item.title}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tableBody.map((item: any, index: number) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.role_name}</td>
                                <td>{item.permission_count}</td>
                                <td>{item.user_count}</td>
                                <td>{item.created_by}</td>
                                <td className="subsidiary_parent">
                                    <MoreVertIcon onClick={handleMore} />
                                    <SubsidiaryAction />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <ul className='pagination_wrapper'>
                
                     <li onClick={() => handleDecrement()} className={current > 1 ? "disable":""}>
                        <span><ArrowLeftIcon /></span>
                    </li>
                
                {paginationvalue.map(c => {
                    return <li key={c} onClick={() => handleCurrent(c)} className={current === c ? "current" : ""}>
                        <span>{c}</span>
                    </li>
                })}
                    <li onClick={() => handleIncrement()} className={ current !== pageSize - 1 ? "disable":""} >
                        <span><ArrowRightIcon /></span>
                    </li>
                
            </ul>

        </div>
    )
}

