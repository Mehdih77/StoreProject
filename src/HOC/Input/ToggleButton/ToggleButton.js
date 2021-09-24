import './ToggleButton.css';

export default function ToggleButton({children, id}) {
    return (
        <div className="switch-holder">
            <div className='switch-toggle'>
                <input type="checkbox" id={id} />
                <label htmlFor={id}></label>
            </div>
            <span>{children}</span>
        </div>
    )
}

