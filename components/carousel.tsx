import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import image1 from "../public/strom.jpg"
import image2 from "../public/licht.webp"

import Image from 'next/image'

export function CarouselDemo() {
    return (
        <div className="flex justify-center items-center bg-neutral-950 ">
            <Carousel className="w-full max-w-lg bg-neutral-950 border-none">
                <CarouselContent className="bg-neutral-950 no-border">
                    <CarouselItem className="no-border">
                        <div className="p-4 ">
                            <Card>
                                <CardContent className="w-full items-center justify-center p-6 bg-neutral-950 no-border">
                                    <Image src={image2} className="no-border w-full" alt="Image description" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="no-border">
                        <div className="p-4 ">
                            <Card>
                                <CardContent className="w-full items-center justify-center p-6 bg-neutral-950 no-border">
                                    <Image src={image1} className="no-border w-full" alt="Image description" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="no-border">
                        <div className="p-4 ">
                            <Card>
                                <CardContent className="w-full items-center justify-center p-6 bg-neutral-950 no-border">
                                    <Image src={image1} className="no-border w-full" alt="Image description" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );

}
