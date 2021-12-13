import './button.css'

function showLabel(label){
    alert(`A label desse botão é ${label}`)
}
const Button = ({label}) => {
    return (
        <>
            <button className="button" onClick={() => showLabel(label)}>Show Label</button>
        </>
    )
}

Button.defaultProps = {
    label:'<insira a label aqui via JS>'
}

export default Button