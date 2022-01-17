import TitleImportCsv from './titleImportCsv'
type reUsableProps = {
    heading: string,
    firstButton: string,
    image: string

}
export default function ReUsableSubsidiary(props: reUsableProps) {
    return (
        <div className="create_subsidiary">
            <TitleImportCsv image={props.image} heading={props.heading} />
            <form action="">
                <div className="form_wrapper">
                    <div className="form_field">
                        <label htmlFor="">Subsidiary Name</label>
                        <input type="text" placeholder='Enter name' />
                    </div>
                    <div className="form_field">
                        <label htmlFor="">Enter email</label>
                        <input type="email" placeholder='Enter email' />
                    </div>
                </div>
                <div className="form_wrapper second">
                    <div className="form_field">
                        <label htmlFor="">Phone Number</label>
                        <div className="phone_number_wrapper">
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                            <input type="text" placeholder="Enter phone number" />
                        </div>
                    </div>
                    <div className="form_field">
                        <label htmlFor="">Country</label>
                        <select name="" id="">
                            <option value="">Select a country</option>
                        </select>
                    </div>
                </div>
                <div className="buttons">
                    <button>
                        {props.firstButton}
                        {/* Add Subsidiary */}

                    </button>
                    <button>Cancel</button>
                </div>
            </form>

        </div>
    )
}
