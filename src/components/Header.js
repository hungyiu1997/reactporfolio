function Header ({ setPage, pagesArr }) {
    // where you are gonna work on the HTML
    return (
        <ul>
            <li onClick = {() => setPage(pagesArr[0])}>About Me</li>
            <li onClick = {() => setPage(pagesArr[1])}>Projects</li>
            <li onClick = {() => setPage(pagesArr[2])}>Contact</li>
        </ul>
    ) 
}

export default Header;