import { Children } from "react"


export default function Navbar(){
 
// 8098997058 

 return <nav className="nav">
        <a href="/" className="site-title">begin App</a>
    <ul>
    {/* <CustomLink href='/price'>Price</CustomLink> */}
    {/* <CustomLink href='/about'>About</CustomLink> */}
        <li className="active">
            <a href="/price">Pricing</a>
            
        </li>
        <li>
        <a href="/about">About</a>
        </li>
    </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    
    return (
        <li className={path === href ? 'active' :''}>
            <a href ={href} {...props}>{Children}</a>
        </li>
    )

}


// https://www.youtube.com/watch?v=sxLzHdf5niI&list=PLPQ0wNZR3oq6lGt4udp6cC-L8M1UwcJM-&index=3