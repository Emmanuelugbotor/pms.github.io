interface titleImportCsvprops {
    image: string,
    heading: string
}
export default function TitleImportCsv(props: titleImportCsvprops) {
    return (
        <div className="title_import-csv">
            <div className="title">
                {props.heading}
            </div>
            <div className="import_csv">
                {
                    props.image && <>
                        <img src={`${props.image}`} alt="" />
                        <span>Import CSV Instead</span>
                    </>
                }

            </div>
        </div>
    )
}
