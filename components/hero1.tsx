"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ArrowSpacer from "@/components/ArrowSpacer";

const animationVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

export default function AnimatedHero() {
    const [animatedText, setAnimatedText] = useState("STROM")
    const [animatedColor, setAnimatedColor] = useState("text-amber-500")

    useEffect(() => {
        const texts = ["STROM", "LICHT", "PARTYS"]
        const colors = ["text-gray-400", "text-amber-400", "text-fuchsia-400"] // Farben angepasst
        let index = 0

        const intervalId = setInterval(() => {
            index = (index + 1) % texts.length
            setAnimatedText(texts[index])
            setAnimatedColor(colors[index])
        }, 3000) // Ändert Text und Farbe alle 3 Sekunden

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="text-secondary-foreground py-8 px-4 sm:px-6 lg:px-8 text-center text-white w-full">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                R&F Verleih
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-4">
                Mieten statt Kaufen.
            </p>
            <AnimatePresence mode="wait">
                <motion.p
                    key={animatedText}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 0.5 }}
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${animatedColor}`}
                >
                    {animatedText}
                </motion.p>
            </AnimatePresence>
            <div className="mt-8">
                <ArrowSpacer color={animatedColor}/>
            </div>
        </div>
    )
}
