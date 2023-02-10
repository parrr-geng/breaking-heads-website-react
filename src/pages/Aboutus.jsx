import Navbar from "../components/Navbar";
import fredPhoto from "../assets/fred-about-page.png";
import maltePhoto from "../assets/malte-about-page.jpeg";

function Aboutus(){
    return(
        <div className="h-screen flex flex-col justify-between">
            <div className="grow px-2 grid grid-cols-3">
                <div className="col-span-1 text-left border-r border-black">
                    <Navbar />
                </div>
                <div className="col-span-2 p-3">
                    <h2 className="font-bold text-2xl mb-3">About Us</h2>
                    <div className="grid grid-cols-2">
                        <div>
                            <p>Willkommen zu den Breaking Heads!</p>
                            <article>
                                Wir sind eine deutschsprachige Plattform für das Tabletop-Spiel Warhammer 40.000. 
                                Auf unserer Website und den gängigen Social Media Plattformen bieten wir euch alles, 
                                was zum kompetitiv ausgerichteten 40k dazu gehört.
                                <br />
                                <br />
                                Wir richten uns explizit an Spielerinnen und Spieler, die sich für die strategischen 
                                und taktischen Aspekte des Spiels interessieren. Neben wunderschön bemalten Modellen 
                                und spannenden Hintergrundgeschichten sehen wir in 40k eine geradezu unendliche Fülle 
                                spielerischer Herausforderungen, die es mit intensivem Training aber vor allem viel 
                                Kopfzerbrechen und ungebrochener Konzentration am Spieltisch zu bewältigen gilt.
                                <br />
                                <br />
                                In unseren Podcasts beleuchten wir die aktuellsten Strategien und Armeekonzepte. 
                                Gleichzeitig bieten euch Hilfestellungen zum gezielten Armeeaufbau und zur Turniervorbereitung. 
                                Unsere Live-Streams ermöglichen es Turnierspiele hautnah mitzuverfolgen.
                                <br />
                                <br />
                                Außerdem bieten wir Deutschlands ersten 40k Coaching Service an. Unsere Coaches unterstützen euch 
                                in 1-zu-1 Sitzungen bei der spielerischen Weiterentwicklung und helfen euch eure selbst definierten Ziele zu erreichen.
                                <br />
                                <br />
                                Unser Team setzt sich zusammen aus erfolgreichen Turnierspielern, die jahrelange Erfahrung im deutschen und internationalen 
                                Wettbewerb gesammelt haben. Die Unterstützung aus verschieden Bereichen der Szene hilft uns unsere Begeisterung für Turnier 
                                40k nach außen zu tragen. Es ist unser erklärtes Ziel, die deutschsprachrige 40k Szene zu fördern, indem wir immer mehr Menschen 
                                für das Spiel und die Turniere begeistern. Damit sehen wir uns im Einklang mit anderen 40k Plattformen.
                                <br />
                                <br />
                                Wir lieben den sportlichen Wettkampf und sehen in jedem 40k Spiel eine neue Herausforderung. In diesem Sinne lautet unser orkisches Motto:
                                <br />
                                Breaking Heads never lose!
                                <br />
                                If we win, we win.
                                <br />
                                If we lose, we lose fighting, that doesn’t count.
                                <br />
                                If we give up and run away, we come back and fight another day!
                            </article>
                        </div>
                        <div className="flex flex-col">
                            <img className="width-48" src={fredPhoto} alt="Fred derfred" />
                            <img className="width-48" src={maltePhoto} alt="Malte " />
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

export default Aboutus;