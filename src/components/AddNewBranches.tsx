import TitleImportCsv from './titleImportCsv';
import CsvIcon from '../assets/Prcms/Import_CSV.png'
export default function AddNewBranches() {
    return (
        <div className="add_New_Branches">
            <TitleImportCsv heading="Add New Branch" image={CsvIcon} />
            <form action="">
                <div className="form_wrapper">
                    <div className="form_field">
                        <label htmlFor="">Branch Name</label>
                        <input type="text" placeholder='Enter name' />
                    </div>
                    <div className="form_field">
                        <label htmlFor="">Branch Name</label>
                        <input type="text" placeholder='Enter name' />
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
                <div className="form_wrapper">
                    <div className="form_field">
                        <label htmlFor="">Street</label>
                        <input type="text" placeholder='Enter street' />
                    </div>
                    <div className="form_field">
                        <label htmlFor="">City</label>
                        <input type="text" placeholder='Select city' />
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className="form_field">
                        <label htmlFor="">City</label>
                        <select name="" id="" className="last_select">
                            <option value="">Select state</option>
                        </select>
                    </div>
                </div>
                <div className="buttons">
                    <button>Add Branch</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}
