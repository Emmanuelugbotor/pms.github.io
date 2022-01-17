import CardTitle from './card_title'
import CardFooter from './card_footer'
export default function ViewBranchDetails() {
    return (
        <div className="subsidiaryCreatedpopup">
            <div className="view_branch_details_card">
                <CardTitle title="All Branches" />
                <div className="view_branch_details_card_content">
                    <form action="">
                        <div className="form_wrapper">
                            <div className="form_field">
                                <label htmlFor="">Branch Name</label>
                                <input type="text" />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Subsidiary</label>
                                <input type="text" className='form_branch' />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Subsidiary</label>
                                <input type="text" className='form_branch' />
                            </div>
                        </div>
                        <div className="form_wrapper">
                            <div className="form_field">
                                <label htmlFor="">Branch Email</label>
                                <input type="text" />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Branch Phone Number</label>
                                <input type="text" className='form_branch' />
                            </div>
                        </div>
                        <div className="form_wrapper">
                            <div className="form_field last">
                                <label htmlFor="">Branch Address</label>
                                <input type="text" />
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
