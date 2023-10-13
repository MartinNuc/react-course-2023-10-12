import { Link } from "react-router-dom"

export const NavBar = () => {
  return <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/categories">Categories</Link></li>
  </ul>
}