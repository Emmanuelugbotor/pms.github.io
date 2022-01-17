import { useState } from 'react'
import SystemSettingRoles from './SystemSettingRoles';
export default function SystemSettingRoleManagement() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="role_management">
            <div className="role_management_button_wrapper">
                <div className={toggle ? "role_management_button toggle" : "role_management_button"} onClick={() => setToggle(!toggle)}>
                    <span>Roles</span>
                    <span>Approval flow</span>
                </div>
            </div>
            {
                !toggle ?   <SystemSettingRoles /> : "hello world"
            }
          
        </div>
    )
}
