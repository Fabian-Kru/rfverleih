'use client'

import {useEffect, useState} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel"

// Importieren Sie hier Ihre tatsächlichen Bilder
import lightImage from "../public/licht.webp"
import energyImage from "../public/strom.jpg"
import partyImage from "../public/party.jpg"

import Image from "next/image";
import {Button} from "@/components/ui/button";

const carouselItems = [
    {
        image: lightImage,
        title: "Stimmungsvolles Licht",
        description: "Kreieren Sie die perfekte Atmosphäre mit warmem, einladendem Licht."
    },
    {
        image: partyImage,
        title: "Party",
        description: "Moderne Technologien für Ihre Partys."
    },
    {
        image: energyImage,
        title: "Energieeffizienz",
        description: "Moderne Technologien für nachhaltigen Stromverbrauch."
    },

]

export default function Component() {
    const [api, setApi] = useState<CarouselApi>()
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (!api) return
        api.on("select", () => setActiveIndex(api.selectedScrollSnap()))
    }, [api])

    useEffect(() => {
        const interval = setInterval(() => {
            if (api) {
                if (activeIndex === carouselItems.length - 1) {
                    api.scrollTo(0)
                } else {
                    api.scrollNext()
                }
            }
        }, 2000)
        return () => clearInterval(interval)
    }, [api, activeIndex])

    return (
        <div className="w-full max-w-3xl mx-auto p-4 bg-neutral-950 pd-12">
            <Carousel className="w-full" setApi={setApi}>
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <Card className="bg-neutral-800 border-gray-700">
                                <CardContent className="p-0">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex flex-col md:flex-row items-center md:justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{item.title}</h3>
                                            <Button size="lg"
                                                    className="bg-amber-400 text-neutral-900 hover:bg-neutral-900/40">
                                                Angebote Erkunden
                                            </Button>
                                        </div>
                                        <p className="text-gray-300">{item.description}</p>
                                    </div>


                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
