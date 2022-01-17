import CloseIcon from '@mui/icons-material/Close';
interface cardTitleProps {
    title: string
}
export default function CardTitle(props: cardTitleProps) {
    return (
        <div className="subsidiaryCreatedpopup_card_title">
            <span>{props.title}</span>
            < CloseIcon className="times" />
        </div>
    )
}

// Subsidiary Details