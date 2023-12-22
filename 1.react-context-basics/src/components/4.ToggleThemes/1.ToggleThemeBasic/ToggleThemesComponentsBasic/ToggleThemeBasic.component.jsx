import '../ToggleThemesStylesBasic/ToggleThemeBasic.style.css'
import { useState } from 'react';
const ToggleThemeBasic=()=>{
    const [toggle,setToggle]=useState(false);
    const containerDynamicClassName=toggle?'ToggleThemeHomePageLight':'ToggleThemeHomePageDark'
    return(
    <div className={containerDynamicClassName}>
        Toggle Theme Home Page
        <button onClick={()=>{
            setToggle(!toggle)
        }}>Toggle</button>
    </div>
    
    )
}
export default ToggleThemeBasic;