import MenuItems from "./MenuItems";

function Menu(){
    return(
        <ul>
            <MenuItems link="Glavnaya" />    
            <MenuItems link="Contacts" />    
            <MenuItems link="Forum" />    
            <MenuItems link="O nas" />  
            <MenuItems link="Catalog" />  
            <MenuItems link="Otzivi" />  
        </ul>  
    )
}

export default Menu;