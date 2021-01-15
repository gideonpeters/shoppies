import { useContext } from "react";
import MainContext from "../context/main-context";

const NominationBanner = () => {
    const { setIsBannerVisible } = useContext(MainContext);

    return <div className="fixed flex justify-center items-center top-0 h-screen w-screen overflow-hidden bg-blue-300 bg-opacity-30 z-50">
        <div className="text-3xl bg-white w-96 h-96 text-center flex flex-col justify-center items-center px-8 py-10">
            <div>
                Yay! <br /> You have nominated <em className="text-green-400">5</em> movies!
        </div>

            <button className="bg-blue-500 text-white text-xl mt-auto p-2 rounded hover:opacity-50" onClick={() => setIsBannerVisible(false)}>Okay</button>
        </div>
    </div>
}
export default NominationBanner;