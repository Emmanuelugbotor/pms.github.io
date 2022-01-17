import TableForRoleManagement from './TableForRoleManagement'
export default function SystemSettingRoles() {
    const tableHeading = [
        { title: "" },
        { title: "ROLE NAME" },
        { title: "Permission count" },
        { title: "USER COUNT" },
        { title: "CReated by" },
        { title: "" },
    ]
    const tableBody = [
        {
            number: "",
            role_name: "Inputter",
            permission_count: 9,
            user_count: 9,
            created_by: "Oladele Alex",
        },
        {
            number: "",
            role_name: "Inputter",
            permission_count: 9,
            user_count: 9,
            created_by: "Oladele Alex",
        },
        {
            number: "",
            role_name: "Inputter",
            permission_count: 9,
            user_count: 9,
            created_by: "Oladele Alex",
        },
        {
            number: "",
            role_name: "Inputter",
            permission_count: 9,
            user_count: 9,
            created_by: "Oladele Alex",
        },
    ]
    return (
        <div>
            <TableForRoleManagement tableHeading={tableHeading} tableBody={tableBody} heading="All Roles" buttonContent="New Role" />
        </div>
    )
}
