import Logo from './../assets/images/shoppies-logo.png'
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }
    return <div className="container mx-auto flex items-center pt-4 px-3">
        <img src={Logo} alt="page logo" className="h-14" onClick={handleClick} />
        <div className="font-bold text-gray-700 ml-auto">The Shoppies</div>
    </div>
}

export default Navbar;