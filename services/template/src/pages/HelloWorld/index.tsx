import { HelloText } from "@_components"

import { Card } from "shared/components";

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