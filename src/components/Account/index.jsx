import { IconBank } from '../icons'

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

export const Account = ({ account }) => {
    return (
        <div className="flex justify-between text-neutral-text">
            <div>
                <p className="flex gap-2 items-center m-0 text-[15px] leading-[120%]">
                    <IconBank />
                    <strong>{account.bank}</strong>
                </p>
            </div>
            <div className="flex flex-col gap-2 w-[100px]">
                <p className="m-0 text-[15px] leading-[120%]"><strong>Saldo</strong></p>
                <p className="m-0 text-[15px] leading-[120%]">{formatter.format(account.balance)}</p>
            </div>
        </div>
    )
}