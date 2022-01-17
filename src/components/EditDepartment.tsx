import TitleImportCsv from './titleImportCsv';
export default function EditDepartment() {
    return (
        <div className="add_New_Branches">
            <TitleImportCsv heading="Edit Department" image="" />
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
                    <button >Update</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}
