import style from "./Wrapper.module.scss"

export const Wrapper = ({children, isDark}) => {
    return (
        <>
            <div className={`${style.wrapperStyling} ${isDark ? style.dark : style.light}`}>
                {children}
            </div>
        </>
    )
}