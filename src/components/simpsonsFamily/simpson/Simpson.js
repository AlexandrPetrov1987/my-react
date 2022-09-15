function Simpson(props) {
    const {simpson} = props;

    return (
        <div>
            <h2>{simpson.name} {simpson.surname} {simpson.age}</h2>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}

export default Simpson;