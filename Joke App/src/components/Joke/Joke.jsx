import style from "./Joke.module.scss"

export const Joke = ({type, setup, punchline}) => {
    return (
        <>
            <div className={style.jokeStyling}>
                <p>{setup}</p>
                <p>{punchline}</p>
                <footer>
                    <p>Type: {type}</p>
                </footer>
            </div>
        </>
    )
}