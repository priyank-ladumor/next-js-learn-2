import Image from "next/image";
import Link from "next/link";
import { imageDatas } from "./imageDatas";


export default function PhotoFeedpage() {
    return (
        <>
            <div className="flex justify-center items-center h-[50vh]" >
                {
                    imageDatas?.map(({ id, name, image }) => {
                        return (
                            <>
                                <Link href={`/photo-feed/${id}`} >
                                    <Image key={id} width={image.width} height={image.height} src={image.src} alt={name} className="w-[250px] me-2" />
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}




