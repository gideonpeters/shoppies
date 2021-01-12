import { GiTrashCan } from "react-icons/gi";

const NominationCard = () => <div className="flex justify-between bg-white p-5 mt-5 items-center rounded">
    <div className="flex items-center">
        <div className="bg-blue-200 h-16 w-16 rounded mr-8"></div>
        <div>
            <div>Name of movie</div>
            <div className="mt-2">2020</div>
        </div>
    </div>
    <GiTrashCan className="text-3xl hover:text-red-400 cursor-pointer" />
</div>

export default NominationCard;