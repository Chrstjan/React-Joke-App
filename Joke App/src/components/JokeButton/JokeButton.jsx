import style from "./JokeButton.module.scss"

export const JokeButton = ({action}) => {
    return (
        <>
            <button onClick={() => action()} className={style.buttonStyling}>Tell New Joke</button>
        </>
    )
}