import NominationCard from './nomination-card'
import TitleText from './title-text'
import { GiCrownedHeart } from "react-icons/gi";

const NominationList = () => <div>
    <TitleText title="My Nominations" actionText="Hide"> <GiCrownedHeart className="text-red-600" /></TitleText>
    <div className="overflow-y-scroll h-screen">
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
        <NominationCard />
    </div>
</div>

export default NominationList;