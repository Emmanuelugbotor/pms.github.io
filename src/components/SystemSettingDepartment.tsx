import TableComponent from "./TableComponent"
import ViewDepartmentDetails from './viewDepartmentDetails'
export default function SystemSettingDepartment() {
    const headingArray = [
        { title: "" },
        { title: "Subsidiary" },
        { title: "Email" },
        { title: "DEPARTMENT COUNT" },
        { title: "" },
    ]
    const tableBody = [
        {
            number: "",
            subsidiary: "HR",
            email: "hrpartners@zojatech.com",
            branchCount: 4,
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
        <div>
            <TableComponent heading="All Departments" buttonContent="New Department" tableHeading={headingArray} tableBody={tableBody} />
            <ViewDepartmentDetails />
        </div>
    )
}
