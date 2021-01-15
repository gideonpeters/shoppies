import Logo from './../assets/images/shoppies-logo.png'
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }
    return <div className="container mx-auto flex items-end pt-4 px-3">
        <div className="flex items-end cursor-pointer" onClick={handleClick}>
            <img src={Logo} alt="page logo" className="h-10" />
            <div className="font-bold ml-2 text-2xl italic">The Shoppies</div>
        </div>
    </div>
}

export default Navbar;