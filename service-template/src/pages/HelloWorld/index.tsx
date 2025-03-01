import { Card } from "@project/shared/ui/components"
import { HelloText } from "@_components"

export function HelloWorld() {
    return (
        <>

            <div className="flex flex-col justify-center items-center p h-screen">
                <Card>
                    <HelloText>
                        HelloWorld
                    </HelloText>
                </Card>
            </div>
        </>
    )
}