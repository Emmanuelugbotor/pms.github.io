import Wrapper from "../../../layout/admin/dashboard_sidebar";
import OrganisationProfile from '../../../components/OrganisationProfile'
import CreateSubsidiary from '../../../components/createSubsidiary'
import Subsidiary from '../../../components/subsidiary'
import EditSubsidiaryDetails from '../../../components/EditSubsidiaryDetails'
import SystemSettingBranches from '../../../components/systemSettingBranches'
import AddNewBranches from '../../../components/AddNewBranches'
import EditBranches from '../../../components/EditBranches'
import SystemSettingDepartment from '../../../components/SystemSettingDepartment'
import AddNewDepartment from '../../../components/AddNewDepartment'
import EditDepartment from '../../../components/EditDepartment'
import SystemSettingRoleManagement from '../../../components/SystemSettingRoleManagement'
import { Route, Routes } from 'react-router-dom'
export default function Settings() {

  return (
    // <div className="dashboard">
    <Wrapper>
      <div className="dashboard_setting">
        <div className="dashboard_setting_top">
          <ul>
            <li>Organisation Profile</li>
            <li>Subsidiary</li>
            <li>Branches</li>
            <li>Departments</li>
            <li>Roles Management</li>
          </ul>
        </div>
        <div className="dashboard_setting_bottom">
          <Routes>
            <Route path="/" element={<OrganisationProfile />} />
            <Route path="subsidiary" element={<Subsidiary />} />
            <Route path="create_subsidiary" element={<CreateSubsidiary />} />
            <Route path="edit_subsidiaryDetails" element={<EditSubsidiaryDetails />} />
            <Route path="system_setting_branches" element={<SystemSettingBranches />} />
            <Route path='add_new_branches' element={<AddNewBranches />} />
            <Route path='edit_branches' element={<EditBranches />} />
            <Route path='system_setting_department' element={<SystemSettingDepartment />} />
            <Route path='add_new_department' element={<AddNewDepartment />} />
            <Route path='edit_department' element={<EditDepartment />} />
            <Route path='system_setting_role_management' element={<SystemSettingRoleManagement />} />
          </Routes>
        </div>
      </div>
    </Wrapper>
    // </div>
  );
}
