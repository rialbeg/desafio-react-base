

const TextColorUpperCase = ({text, color}) => {
    // console.log(props);
    return <p style={{color:color}}>{text.toUpperCase()}</p>   
}

TextColorUpperCase.defaultProps = {
    text:"Padrão",
    color:'black'
}
export default TextColorUpperCase