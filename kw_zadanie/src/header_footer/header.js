function Header(props){
    return (
        <header>
            <h1>Witamy na stronie: {props.name}</h1>
            <h2>Pomożemy zrozumiec i rozwiazac: {props.idk}</h2>
            <hr></hr>
        </header>

    );
}
export default Header;