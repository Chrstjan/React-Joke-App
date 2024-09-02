export const LightDarkButton = ({light, action}) => {
    return (
        <>
            <button onClick={() => action()}>{light ? "Light": "Dark"}</button>
        </>
    )
}