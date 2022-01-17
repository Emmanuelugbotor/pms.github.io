import TableComponent from "./TableComponent"
import ViewBranchDetails from './view_branch_details'
export default function SystemSettingBranches() {
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
            <TableComponent heading="All Branches" buttonContent="New Branch" tableHeading={headingArray} tableBody={tableBody} />
            <ViewBranchDetails />
        </div>
    )
}
