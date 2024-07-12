function FancyText({title, text}) {
    
    if (title === true) {
        return (
            <h1 className="title">{text}</h1>
        )
    } else {
        return (
            <p className="regular-text">{text}</p>
        )
    }
}
export default FancyText;