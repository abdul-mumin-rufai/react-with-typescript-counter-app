import type { Action } from './App.tsx';


interface Props {
    action: Action, 
    clickHandler: (action: Action) => void;
}

function Button({ action, clickHandler }: Props) {

    return (
        <>
            <button onClick={() => { clickHandler(action)}}>
                {action}
            </button>

        </>
    )
}

export default Button
