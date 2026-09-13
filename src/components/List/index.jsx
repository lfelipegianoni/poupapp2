export const List = ({ children, className, ...props }) => {
    return (
        <ul className={`p-0 m-0 list-none mb-12 ${className || ''}`} {...props}>
            {children}
        </ul>
    )
}