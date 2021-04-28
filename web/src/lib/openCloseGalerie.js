import { useState } from "react"

export const isOpen = (state) => {
    const [open, setOpen] = useState(false)

    setOpen({state})

    return open
}
