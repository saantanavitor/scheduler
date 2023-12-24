// import { Event } from "../../utils/event"
import * as Component from "./styles"

interface CalendarProps {
    date: Date;
}

// const Event: Event  = [

// ]


const boxes = [ 
    "Box 01",
    "Box 02",
    "Box 03",
    "Box 04",
    "Box 05",
    "Box 06",
]


export default function Calendar({ date}: CalendarProps) {
    return (
        <Component.Container>
            <Component.TableRow>
                <thead>
                    <Component.TableRow>
                        <Component.TableData>
                    {boxes.map((item) => item)}
                        </Component.TableData>
                    </Component.TableRow>
                </thead>
                <tbody>
                    <Component.TableRow>
                        <Component.TableData>
                            teste
                        </Component.TableData>
                    </Component.TableRow>
                </tbody>
            </Component.TableRow>
        </Component.Container>
    )
}