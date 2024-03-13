export default function FormInput(props) {
    return <div className="flex flex-col gap-5">
        <label htmlFor={props.field.htmlFor}>{props.field.label}</label>
        <input
            type={props.field.type}
            id={props.field.htmlFor}
            className="bg-backgroundAccent border-2 rounded-xl p-2"
            value={props.value[props.field.name]} // Update here
            onChange={props.onChange}
            name={props.field.name} // Added name attribute
        />
    </div>;
}