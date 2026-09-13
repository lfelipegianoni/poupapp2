export const Container = ({children}) => {
    return (
        <div className="max-w-[1200px] mx-auto flex gap-6">
            {children}
        </div>
    )
}