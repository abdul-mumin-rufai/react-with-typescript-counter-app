import type { Action } from './App.tsx';


interface Props {
    action:Action 
}

function Button({ action }: Props) {

    return (
        <>
            <button>
                {action}
            </button>

        </>
    )
}

export default Button
