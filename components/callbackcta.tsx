import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Clock, Calendar } from "lucide-react"

export default function Callbackcta() {
    return (
        <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-center">Rückruf vereinbaren</h1>
                <Card className="bg-neutral-800 border-neutral-700 text-white">
                    <CardHeader>
                        <CardTitle>Warum Sie uns anrufen sollten</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Phone className="text-blue-400" />
                                <span>Persönliche Beratung durch unsere Experten</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Clock className="text-blue-400" />
                                <span>Flexible Gesprächstermine</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Calendar className="text-blue-400" />
                                <span>Schnelle Terminvereinbarung</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="bg-neutral-800 border-neutral-700 text-white">
                    <CardHeader>
                        <CardTitle>Ihre Informationen</CardTitle>
                        <CardDescription>Bitte füllen Sie die folgenden Felder aus</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Ihr vollständiger Name" className="bg-neutral-700 border-neutral-600" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefonnummer</Label>
                            <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" className="bg-neutral-700 border-neutral-600" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="date">Bevorzugtes Datum</Label>
                            <Input id="date" type="date" className="bg-neutral-700 border-neutral-600" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="time">Bevorzugte Uhrzeit</Label>
                            <Select>
                                <SelectTrigger className="bg-neutral-700 border-neutral-600">
                                    <SelectValue placeholder="Wählen Sie eine Uhrzeit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="morning">Vormittag (9:00 - 12:00)</SelectItem>
                                    <SelectItem value="afternoon">Nachmittag (13:00 - 17:00)</SelectItem>
                                    <SelectItem value="evening">Abend (17:00 - 20:00)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-amber-400 hover:bg-amber-200 text-neutral-900">Rückruf vereinbaren</Button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}