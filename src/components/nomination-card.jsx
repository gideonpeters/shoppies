import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import MainContext from "../context/main-context";

const NominationCard = ({ nomination, index }) => {
    const { nominations, setNominations } = useContext(MainContext);

    function removeNomination() {
        var modifiedNominations = [...nominations];
        modifiedNominations.splice(index, 1);

        setNominations(modifiedNominations);
    }

    return <div className="flex justify-between bg-white p-5 mt-5 items-center rounded">
        <div className="flex items-center w-10/12">
            <div className="bg-green-300 h-16 lg:w-2/12 w-4/12 rounded mr-8" style={{ backgroundImage: `url(${nomination["Poster"]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
            <div className="lg:w-10/12 w-8/12">
                <div>{nomination["Title"]}</div>
                <div className="mt-2">{nomination["Year"]}</div>
            </div>
        </div>
        <MdDelete onClick={() => removeNomination()} className="text-2xl text-gray-600 hover:text-red-400 cursor-pointer" />
    </div>
}

export default NominationCard;