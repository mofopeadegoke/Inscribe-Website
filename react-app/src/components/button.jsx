import "../styles/button.css";
export default function Button(props) {
    return (
        <>
            <a href={props.url} target="_blank">
                <button className={props.className}>{props.value}</button>
            </a>
        </>
    )
}