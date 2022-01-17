import TitleImportCsv from './titleImportCsv';
import CsvIcon from '../assets/Prcms/Import_CSV.png'
export default function AddNewDepartment() {
    return (
        <div className="add_New_Branches">
            <TitleImportCsv heading="Add New Department" image={CsvIcon} />
            <form action="">
                <div className="form_wrapper">
                    <div className="form_field">
                        <label htmlFor="">Department Name</label>
                        <input type="text" placeholder='Enter name' />
                    </div>
                    <div className="form_field department_select">
                        <label htmlFor="">Branch</label>
                        <select name="" id="">
                            <option value="">Select branch</option>
                        </select>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className="form_field">
                        <label htmlFor="">Phone Number</label>
                        <div className="phone_number_wrapper">
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                            <input type="text" placeholder='Enter name' />
                        </div>
                    </div>
                    <div className="form_field">
                        <label htmlFor="">Email Address</label>
                        <input type="email" placeholder='Enter email address' />
                    </div>
                </div>
                <div className="buttons">
                    <button className="department_btn">Add Department</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}
