function Patern(props){
    return (
        <div className="patern">
            <h3>Postać ogólna</h3>
            <h4>ax² + bx + c = 0</h4>
            <h4>wyróżnik równania kwadratowego</h4>
            <h6>delta = b² - 4ac</h6>
            <ul>
                <li><h6>jeśli delta {">"} 0 to równanie a dwa rozwiązania:<br/> x<sub>1</sub>={"(+b*sqrt(delta))/(2a)"} <br/>x<sub>2</sub>={"(-b*sqrt(delta))/(2a)"}</h6></li>
                <li><h6>jeśli delta = 0 to rówanie ma tylko 1 rozwiązanie:<br/>x={"(+b)/(2a)"}</h6></li>
                <li><h6>jeśli delta {"<"} 0 to rozwiązania nie ma</h6></li>
            </ul>
            <hr/>
        </div>

    );
}
export default Patern;