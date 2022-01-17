import ReUsableSubsidiary from "./ReUsableSubsidiary"
import createIcon from '../assets/Prcms/Import_CSV.png'
export default function CreateSubsidiary() {
    return (
        <div>
            <ReUsableSubsidiary firstButton="Add Subsidiary" heading="Add New Subsidiary" image={createIcon} />
        </div>
    )
}
