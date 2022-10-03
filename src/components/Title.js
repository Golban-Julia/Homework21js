const Title = ({ name, type }) => {
    if (type === "bold") {
        return <h1 style={{ fontWeight: "bold" }}>{name}</h1>;
    }
        return <h1 style={{ fontWeight: "normal" }}>{name}</h1>;
    
}

export default Title;