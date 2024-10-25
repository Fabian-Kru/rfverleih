"use client"

import {DoubleArrowDownIcon} from "@radix-ui/react-icons";
import {motion} from "framer-motion";


interface ArrowSpacerProps {
    color?: string
}

export default function ArrowSpacer({color}: ArrowSpacerProps) {
    return <motion.div animate={{y: [0, 10, 0]}} // bewegt sich nach unten (10px) und wieder nach oben
                       transition={{
                           repeat: Infinity, // Endlosschleife
                           duration: 3, // Dauer der Animation
                           ease: "easeInOut" // Weiche Animation
                       }} className={`${color} flex justify-center`}><DoubleArrowDownIcon width="48px"
                                                                                              height="48px"/>
    </motion.div>
}