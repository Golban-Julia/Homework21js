const Title = ({ name, type }) => {
    return (
        <h1 style={{ fontWeight: type === "bold" ? "bold" : "normal" }}>
            {name}
        </h1>
   );
 
};
export default Title;
