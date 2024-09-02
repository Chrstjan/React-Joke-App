import style from "./JokeButton.module.scss"

export const JokeButton = ({action, text}) => {
    return (
        <>
            <button onClick={() => action()} className={style.buttonStyling}>{text}</button>
        </>
    )
}