import "../styles/button.css";
export default function Button(props) {
    return (
        <>
            <button className={props.className}>{props.value}</button>
        </>
    )
}