import Navbar from "../components/Navbar";
import dicePhoto1 from "../assets/14mm_weiss_12_4_3-2048x1536.jpeg";
import markerPhoto1 from "../assets/missionszielmarker_1.jpeg";

function Merchandise(){
    return(
        <div className="h-screen flex flex-col justify-between">
            <div className="grow px-2 grid grid-cols-3">
                <div className="col-span-1 text-left border-r border-black">
                    <Navbar />
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <div className="p-5">
                        <img src={dicePhoto1} alt="wuerfel" />
                        <div>
                            <h4 className="font-bold text-xl">Würfel</h4>
                            <p>
                                Bei unseren Würfeln ist die 6 durch ein BreakingHeads Logo ersetzt. 
                                Sie rollen durch die eckigen Kanten kürzer als die üblichen runden Würfel. 
                                Praktisch, um nicht zu viel Zeit mit Würfeln zu verlieren! Mit ihrer 14mm 
                                Größe liegen sie besonders gut in der Hand.
                            </p>
                            <br />
                            <p>
                                Ihr könnt die Würfel zur Zeit über die folgenden Händler erstehen:
                            </p>
                            
                            <a href="https://www.fantasywelt.de/Breaking-Heads-Wuerfelset-12" target="_blank">
                                <button className="mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Fantasy Welt</button>
                            </a>

                            <a href="https://taschengelddieb.de/Breaking-Heads-Wuerfel-W6" target="_blank">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Taschengelddieb</button>
                            </a>

                        </div>
                    </div>

                    <div className="p-5">
                        <img src={markerPhoto1} alt="wuerfel" />
                        <div>
                            <h4 className="font-bold text-xl">Missionszielmarker</h4>
                            <p>
                                Diese Missionszielmarker sind für die 9. 
                                Edition 40k optimiert und sind erhältlich in verschiedenen 
                                Designs. Sie bestehen aus 1,6mm dünnem, flexiblen aber haltbaren 
                                Kunststoff, wie man es sonst von Mousepads oder Gaming Mats kennt.
                            </p>

                            <a href="https://www.patreon.com/posts/61380031" target="_blank">
                                <button className="mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">BreakingHeads auf Patreon</button>
                            </a>

                        </div>
                    </div>
                    

                </div>
            </div>

            <footer className="p-2 mb-0 flex place-content-between border-t border-black ">
                <h1 className="font-bold text-2xl"><a href="/">Breaking Heads</a></h1>
                <div>
                    <a href="/aboutus">About Us</a>
                </div>
            </footer>
        </div>
    )
}

export default Merchandise;