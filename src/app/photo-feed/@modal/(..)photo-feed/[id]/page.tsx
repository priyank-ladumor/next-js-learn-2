import Image from "next/image";
import { imageDatas } from "../../../imageDatas"; 
import { Metadata } from "next";
import Modal from "@/components/model";

export const generateMetadata = async ({params: { id } }: { params: { id: string } }) : Promise<Metadata> => {
    const titleID = await new Promise(resolve => {
        setTimeout(() => {
             resolve(id)
        },100)
    })
    return {
        title: "img Post - " + titleID
    }
}

export default function PhotoIDpage({ params: { id } }: { params: { id: string } }) {
    const photo = imageDatas.find((img) => img.id === id)
    if (!photo) {
        // Handle the case where no matching photo is found
        throw new Error("No photo found") 
    }
    return (
        <Modal>
            <Image src={photo?.image.src} alt="img" width={photo?.image.width} height={photo?.image.height} className="w-[250px]" />
        </Modal>
    )
}
