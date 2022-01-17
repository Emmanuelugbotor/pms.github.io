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
        subsidiary: string,
        email: string,
        branchCount: number
    }[],
    tableHeading: { title: string }[]

}

export default function TableComponent(props: tableComponentProps) {
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
            <div className="subsidiary_heading">
                {props.heading}
            </div>
            <div className="subsidiary_search_new_subsidiary">
                <input type="search" placeholder="Search" />
                <div className="new_subsidiary">
                    <AddIcon className="add" />
                    <span>{props.buttonContent}</span>
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
                                <td>{item.subsidiary}</td>
                                <td>{item.email}</td>
                                <td>{item.branchCount}</td>
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
                {
                    current > 1 && <li onClick={() => handleDecrement()} >
                        <span><ArrowLeftIcon /></span>
                    </li>
                }

                {paginationvalue.map(c => {
                    return <li key={c} onClick={() => handleCurrent(c)} className={current === c ? "current" : ""}>
                        <span>{c}</span>
                    </li>
                })}
                {
                    current !== pageSize - 1 && <li onClick={() => handleIncrement()} >
                        <span><ArrowRightIcon /></span>
                    </li>
                }
            </ul>

        </div>
    )
}

