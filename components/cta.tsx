import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
    return (
        <section className="m-4 sm:m-12 bg-primary text-primary-foreground py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
                    Bereit, Ihr nächstes Event auszustatten?
                </h2>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8">
                    Egal ob Strom, Licht oder Party-Equipment - wir haben alles, was Sie für ein erfolgreiches Event benötigen.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto bg-amber-400 text-secondary-foreground hover:bg-secondary/90">
                        Jetzt anfragen
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}