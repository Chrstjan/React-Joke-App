import style from "./Wrapper.module.scss"

export const Wrapper = ({children, theme}) => {
    return (
        <>
            <div className={`${style.wrapperStyling} ${theme ? style.dark : style.light}`}>
                {children}
            </div>
        </>
    )
}