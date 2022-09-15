function Character(props) {
    const {character} = props;

    return (
        <div>
            <h2>{character.id} {character.name} {character.status}</h2>
            <p>{character.gender}</p>
        </div>
    );
}

export default Character;