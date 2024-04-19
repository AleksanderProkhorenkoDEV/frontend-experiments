'use client'

import { usePathname, useRouter } from "next/navigation"

const Button = ({id, action, text}) => {

    const path = usePathname();
    const router = useRouter();
    const url = `${path}/${action}/${id}`;

    return(
        <button onClick={() => router.push(url)} key={id}> {text} </button>
    )
}

export default Button