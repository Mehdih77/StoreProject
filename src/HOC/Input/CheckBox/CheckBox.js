import './CheckBox.css';

export default function CheckBox({id}) {
    return (
        <div className='custom_checkbox'>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}></label>
        </div>
    )
}
