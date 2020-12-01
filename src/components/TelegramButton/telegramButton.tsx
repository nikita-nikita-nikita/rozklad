import React, {useEffect, useRef} from "react"

type TelegramButtonTypes = {
    botName: string
    dataOnauth?: Function
    buttonSize: "large" | "medium" | "small"
    cornerRadius: number,
    requestAccess?: string | null,
    usePic: Boolean,
    lang?: string,
    className: string
}
const TelegramButton: React.FC<TelegramButtonTypes> = (props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current === null) return
        // @ts-ignore
        window.TelegramLoginWidget = {
            dataOnAuth: (user: any) => props.dataOnauth!(user)
        }
        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?14"
        script.setAttribute("data-telegram-login", props.botName);
        script.setAttribute("data-size", props.buttonSize);
        script.setAttribute(
            "data-onauth",
            "TelegramLoginWidget.dataOnAuth(user)"
        );
        script.async = true;
        ref.current!.appendChild(script);
    }, [
        props.botName,
        props.buttonSize,
        props.cornerRadius,
        props.dataOnauth,
        props.requestAccess,
        props.usePic,
        ref
    ])

    // @ts-ignore
    return <div ref={ref} className={props.className}/>
}

export default TelegramButton;