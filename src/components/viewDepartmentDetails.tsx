import CardTitle from './card_title'
import CardFooter from './card_footer'
export default function ViewDepartmentDetails() {
    return (
        <div className="subsidiaryCreatedpopup">
            <div className="view_branch_details_card department_card">
                <CardTitle title="View Department Details" />
                <div className="view_branch_details_card_content">
                    <form action="">
                        <div className="form_wrapper">
                            <div className="form_field">
                                <label htmlFor="">Department Name</label>
                                <input type="text" />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Branch</label>
                                <input type="text" className='form_branch' />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">User Count</label>
                                <input type="text" className='form_branch' />
                            </div>
                        </div>
                        <div className="form_wrapper">
                            <div className="form_field">
                                <label htmlFor="">Department Email</label>
                                <input type="text" />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Department Phone Number</label>
                                <input type="text" className='form_branch' />
                            </div>
                        </div>
                    </form>
                    <div className="update">
                        <h3>Updated By</h3>
                        <h1>Oladele Oluwadare</h1>
                        <p>21/12/2021 19:35</p>
                    </div>
                </div>
                <CardFooter />
            </div>
        </div>
    )
}
