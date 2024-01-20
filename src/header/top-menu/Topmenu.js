import "./style.css"
export function Topmenu(){
    const menu_item = ["About", "Skill","Experience","Project"];
    const menu_itemList = menu_item.map(item =><li>{item}</li>)
    return<div className="menu">
        <ul className = "menu-list">
           {menu_itemList}
        </ul>
    </div>
    
}