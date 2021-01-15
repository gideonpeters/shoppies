import { GiTrashCan } from "react-icons/gi";
import { useContext } from "react";
import MainContext from "../context/main-context";

const NominationCard = ({ nomination, index }) => {
    const { nominations, setNominations } = useContext(MainContext);

    function removeNomination() {
        // let index = nominations.indexOf(movie);
        console.log(index)

        var modifiedNominations = [...nominations];
        modifiedNominations.splice(index, 1);

        setNominations(modifiedNominations);

    }

    return <div className="flex justify-between bg-white p-5 mt-5 items-center rounded">
        <div className="flex items-center">
            <div className="bg-blue-200 h-16 w-16 rounded mr-8" style={{ backgroundImage: `url(${nomination["Poster"]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
            <div>
                <div>{nomination["Title"]}</div>
                <div className="mt-2">{nomination["Year"]}</div>
            </div>
        </div>
        <GiTrashCan onClick={() => removeNomination()} className="text-3xl hover:text-red-400 cursor-pointer" />
    </div>
}

export default NominationCard;