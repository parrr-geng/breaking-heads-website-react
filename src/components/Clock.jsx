
import { useEffect, useState } from "react";

function Clock(){
    const locale = "en";
    const [today, setToday] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setToday(new Date())
        }, 1000);
        return ()=>{
            clearInterval(timer);
        }
    }, []);

    const day = today.toLocaleDateString(locale, {weekday: "long"});
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month: "long"})}\n\n`;

    const hour = today.getHours();
    const second = today.getSeconds();

    return(
        <div>
            {`${date} | ${hour}:${second}`}
        </div>
    )
}

export default Clock;