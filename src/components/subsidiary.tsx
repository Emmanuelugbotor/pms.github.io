import TableComponent from './TableComponent'
import SubsidiaryCreatedPopup from './subsidiaryCreatedPopup'
export default function Subsidiary() {
    const headingArray = [
        { title: "" },
        { title: "Subsidiary" },
        { title: "Email" },
        { title: "Branch Count" },
        { title: "" },
    ]
    const tableBody = [
        {
            number: "",
            subsidiary: "france",
            email: "eugbotor@montech.io",
            branchCount: 9,
        },
        {
            number: "",
            subsidiary: "france",
            email: "eugbotor@montech.io",
            branchCount: 9,
        },
        {
            number: "",
            subsidiary: "france",
            email: "eugbotor@montech.io",
            branchCount: 9,
        },
        {
            number: "",
            subsidiary: "france",
            email: "eugbotor@montech.io",
            branchCount: 9,
        },

    ]

    return (
        <div >
            <TableComponent heading='All Subsidiaries' buttonContent="New Subsidiary" tableHeading={headingArray} tableBody={tableBody} />
            <SubsidiaryCreatedPopup />
        </div>
    )
}

{/* <SubsidiaryCreatedPopup /> */ }