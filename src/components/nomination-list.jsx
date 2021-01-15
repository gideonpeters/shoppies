import NominationCard from './nomination-card'
import TitleText from './title-text'
import { GiCrownedHeart } from "react-icons/gi";
import { useContext } from 'react';
import MainContext from '../context/main-context';
import Nominations from './../assets/images/nominations.svg'

const NominationList = () => {
    const { nominations } = useContext(MainContext);

    return <div>
        <TitleText title="My Nominations" actionText=""> <GiCrownedHeart className="text-red-600" /></TitleText>
        {nominations.length === 0 ? <div className="flex flex-col items-center mt-10">
            <img src={Nominations} alt="all nominations" className="h-52" />
            <div className="mt-5">Your Nominations go here...</div>
        </div> :
            <div className="overflow-y-scroll h-screen">
                {nominations.map((nomination, idx) => <NominationCard key={idx} index={idx} nomination={nomination} />)}
            </div>}
    </div>
}

export default NominationList;