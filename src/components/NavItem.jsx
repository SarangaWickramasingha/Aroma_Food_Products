
function NavItem({title,scoll}){ 
    return(
        <li className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-700 hover:after:w-full ">
            <button onClick={scoll}>{title}</button>
        </li>
    )
}
export default NavItem;