export const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="bg-transparent border border-neutral-text text-neutral-text px-6 py-3 flex items-center justify-center cursor-pointer gap-2 rounded-[24px] text-base leading-[120%] hover:opacity-80"
        >
            {children}
        </button>
    )
}