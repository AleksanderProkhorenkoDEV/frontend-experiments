'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const Loading = () => {

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div>
                <motion.div
                    className="box"
                    animate={{ rotate: 360 }}
                    transition={{ type: "spring" }}
                />
            </div>
        </div>
    )
}

export default Loading