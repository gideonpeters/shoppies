import ErrorImage from './../assets/images/error.svg'
import { useHistory } from 'react-router-dom';

const Error = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return <div className="h-screen flex flex-col items-center justify-center">
        <img src={ErrorImage} alt="not found" />
        <button onClick={handleClick} className="mt-10 text-2xl bg-blue-400 text-white px-4 py-4 rounded hover:opacity-50">Go Back Home</button>
    </div>
}

export default Error;