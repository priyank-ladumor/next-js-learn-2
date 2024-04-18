import { StaticImageData } from "next/image";
import photo1 from "./photos/Shoppy.io Online Sale (1).png"
import photo2 from "./photos/Shoppy.io Online Sale (2).png"
import photo3 from "./photos/Shoppy.io Online Sale (3).png"
import photo4 from "./photos/Shoppy.io Online Sale (4).png"
import photo5 from "./photos/Shoppy.io Online Sale (5).png"
import photo6 from "./photos/Shoppy.io Online Sale (6).png"
import photo7 from "./photos/Shoppy.io Online Sale (7).png"
import photo8 from "./photos/Shoppy.io Online Sale (8).png"

type imageData = {
    id: string,
    image: StaticImageData,
    name: string
}

export const imageDatas: imageData[] = [
    {
        id: "1",
        name: "first",
        image: photo1

    },
    {
        id: "2",
        name: "second",
        image: photo2

    },
    {
        id: "3",
        name: "third",
        image: photo3

    },
    {
        id: "4",
        name: "four",
        image: photo4

    },
    {
        id: "5",
        name: "fifth",
        image: photo5

    },
    {
        id: "6",
        name: "six",
        image: photo6

    },
    {
        id: "7",
        name: "seven",
        image: photo7

    },
    {
        id: "8",
        name: "eight",
        image: photo8

    },
]