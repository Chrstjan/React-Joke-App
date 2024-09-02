import style from "./LightDarkButton.module.scss";

export const LightDarkButton = ({light, action}) => {
    return (
        <>
            <button className={`${style.buttonStyling}`} onClick={() => action()}>
                <img className={`${light ? style.lightMode : style.darkMode}`} src={light ? './src/assets/sun.svg' : './src/assets/moon.svg'} alt="dark light mode button"/>
            </button>
        </>
    )
}