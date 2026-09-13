import { IconSearch } from "../icons"

export const Searchinput = (props) => {
    return(
        <div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
            <IconSearch/>
            <input type="text" className="w-full text-neutral-text text-[20px] leading-[125%]" {...props}/>
        </div>
    )
}