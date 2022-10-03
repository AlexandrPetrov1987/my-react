import Pets from "./components/Animals";

function App() {
    return (
        <div className="App">
            <div className="pets">
                <Pets pet="dog"/>
                <Pets pet="cat"/>
            </div>
        </div>
    );
}

export default App;
