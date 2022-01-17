import CardTitle from './card_title'
import CardFooter from './card_footer'
export default function SubsidiaryCreatedPopup() {
    return (
        <div className="subsidiaryCreatedpopup">
            <div className="subsidiaryCreatedpopup_card">
                <CardTitle title="Subsidiary Details" />
                <div className="subsidiaryCreatedpopup_card_content">
                    <form action="">
                        <div className="form_wrapper">
                            <div className="form_field">
                                <label htmlFor="">Subsidiary Name</label>
                                <input type="text" placeholder='ITHorizon Ghana' />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Branch Count</label>
                                <input type="text" placeholder='9' className='form_branch' />
                            </div>
                        </div>
                        <div className="form_wrapper">
                            <div className="form_field">
                                <label htmlFor="">Subsidiary Email</label>
                                <input type="text" />
                            </div>
                            <div className="form_field">
                                <label htmlFor="">Subsidiary Phone Number</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="update">
                            <h3>Updated By</h3>
                            <h1>Oladele Oluwadare</h1>
                            <p>21/12/2021 19:35</p>
                        </div>
                    </form>

                </div>
                <CardFooter />
            </div>
        </div>
    )
}
