interface Props {
    action: "decrease" | "increase"
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
