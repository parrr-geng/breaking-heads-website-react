import Navbar from "../components/Navbar";
import Clock from "../components/Clock";

function Turniere(){
    return(
        <div className="h-screen flex flex-col justify-between">
            <div className="grow px-2 grid grid-cols-3">
                <div className="col-span-1 text-left border-r border-black">
                    <Navbar />
                </div>
                <div className="col-span-2 p-4 grid grid-cols-3">
                    <div className="col-span-2">
                        <h2 className="font-bold text-2xl">Turniere</h2>
                        <div className="my-5">
                            <p>
                                Seit mehreren Jahren organisieren wir 40k Turniere. 
                                Zum Beispiel haben wir für die deutschen 40k Liga “TabletopMaster” 
                                das Saisonfinale 2021 und die “Show Matches 2020” veranstaltet. 
                                Mit Beginn der Kontaktbeschränkungen 2020 haben wir die online 
                                Turnierserie “WARPhammer” gestartet. Sie bietet der deutschen Szene 
                                regelmäßige Turniere mit dem TabletopSimulator und setzt international
                                neue Standards bei verwendeten Spieltischen und dem Turnierformat. 
                                Die WARPhammer Championship 2021 zieht eine große internationale Spierschaft
                                an und setzt auf eine völlige neue Form der Berichterstattung.
                            </p>
                            <br />
                            <p>
                                Nachdem analoge Turniere wieder möglich geworden sind haben wir die 
                                BreakingHeads Cups gestartet, eine reihe von Turniere in Petershagen, 
                                direkt bei Berlin. Hoch standardisiertes Gelände und umfassende 
                                Turnierregeln bieten den Teilnehmenden besondere Wettbewerbsbedingungen. 
                                Jedes dieser Turniere wurde mit einem kommentieren Livestream begleitet. 
                                Die Zuschauer konnten so Turnierwarhammer live miterleben.
                            </p>
                            <br />
                            <p>
                                Die German Finals sind ein Einladungsturnier mit den bestplatzierten 
                                Spielern des Vorjahres und setzt damit die Tradition der TabletopMasters 
                                Saisonfinale fort. Die German Finals 2021 wurde mit intensiver 
                                Vorberichterstattung begleitet und brachte den Zuschauenden neben dem 
                                Livestream vom Event alle Teilnehmende in Form von Interviews näher. 
                                Auch für die kommende Saison wird es im Januar 2023 die Finals mit den 
                                besten Spielern aus diesem Jahr geben.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Clock />
                        <a href="https://www.tabletopturniere.de/t3_tournament.php?tid=25808">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                                TabletopMasters Finale 2019
                            </button>
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLyfnFjLE-cslJDtB-vO79ysdcly9Ui_X0">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                                TabletopMasters Show Matches 2020
                            </button>
                        </a>
                        <a href="https://www.gw-fanworld.net/threads/warphammer-tts-turnierserie.181328/">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                                WARPhammer Turnierserie
                            </button>
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLyfnFjLE-cslc_xq-hGY0xHljPNtydwT-">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                                WARPhammer Championship 2021
                            </button>
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLyfnFjLE-csn5xQwnF3X1-cVSOly5VhEX">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                                German Finals 2021
                            </button>
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLyfnFjLE-csk50XFrpz04CuNb5xlUdfhO">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                                BreakingHeads Cups Turnierserie
                            </button>
                        </a>

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

export default Turniere;