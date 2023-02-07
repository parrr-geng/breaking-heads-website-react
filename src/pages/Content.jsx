import Navbar from "../components/Navbar";
import YouTubeIcon from "../assets/icons8-youtube-96.png";
import ApplePodcastIcon from "../assets/icons8-podcasts-96.png";
import PatreonIcon from "../assets/icons8-patreon-96.png";
import SpotifyIcon from "../assets/icons8-spotify-96.png";

function Content(){
    return(
        <div className="h-screen flex flex-col justify-between">
            <div className="grow px-2 grid grid-cols-3">
                <div className="col-span-1 text-left border-r border-black">
                    <Navbar />
                </div>
                <div className="col-span-2 grid grid-cols-3">
                    <div className="col-span-2 px-4">
                        <h2 className="font-bold text-2xl">Content</h2>
                        <p>
                            Unseren Podcast findet ihr überall dort, wo es Podcasts gibt. In jeder Folge lernt ihr erfahrene Turnierspieler und ihre Armeen kennen.
                            <br />
                            Wir tauchen tief ein in die Stratagien und Taktiken, die für den Punktestand entscheidend sind.
                            <br />
                            Jeden Montagabend besprechen wir in unserem Livestream die letzten Turnierergebnisse in der deutschen 40k-Landschaft und bringen euch alle Neuigkeiten die kompetitives Spiel betreffen.
                            <br />
                            Exklusive Bonusinhalte erscheinen regelmäßig auf Patreon und für Youtube Mitglieder.
                        </p>
                        <div>
                            <img src={YouTubeIcon} alt="youtube icon" />
                            <img src={ApplePodcastIcon} alt="apple podcast icon" />
                            <img src={SpotifyIcon} alt="spotify icon" />
                            <img src={PatreonIcon} alt="patreon icon" />
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

export default Content;