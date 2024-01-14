import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const {cart}=useSelector((state)=>state)
    return (
        <>
            <nav className="flex justify-between items-center h-20 max-w-6xl bg-gray-800 text-white p-4">
                <NavLink to='/' className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyELc6FD9YuWjsfE0XnRaaK2VX0vHZXog2vg&usqp=CAU" className="h-14" alt="" />
                </NavLink>
                <NavLink to='/' className="flex items-center font-medium text-slate">
                    <p className="ml-4">Home</p>
                </NavLink>
                <NavLink to='/cart' className="flex items-center">
                    <div className="text-2xl relative">
                        <FaCartShopping />
                        {
                            cart.length>0 &&
                            <span className="absolute -top-1 -right-2 bg-green-400 text-x5 w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                            
                        }
                    </div>
                </NavLink>
            </nav>
        </>
    )
}
