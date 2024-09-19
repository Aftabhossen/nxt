import Link from "next/link"
import Image from "next/image"

const ProductPage = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src={"https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        quality={100}>
                    </Image>
                    <Image
                        src={"https://images.pexels.com/photos/16485635/pexels-photo-16485635/free-photo-of-young-man-with-dyed-platinum-blond-hair-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        quality={100}
                        className="absolute object-cover rounded-md"
                    >
                    </Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-gray-300 w-max text-black py-2 px-3 text-xs hover:bg-black hover:text-white font-semibold">Add to Cart</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src={"https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        quality={100}>
                    </Image>
                    <Image
                        src={"https://images.pexels.com/photos/16485635/pexels-photo-16485635/free-photo-of-young-man-with-dyed-platinum-blond-hair-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        quality={100}
                        className="absolute object-cover rounded-md"
                    >
                    </Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-gray-300 w-max text-black py-2 px-3 text-xs hover:bg-black hover:text-white font-semibold">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src={"https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        quality={100}>
                    </Image>
                    <Image
                        src={"https://images.pexels.com/photos/16485635/pexels-photo-16485635/free-photo-of-young-man-with-dyed-platinum-blond-hair-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        quality={100}
                        className="absolute object-cover rounded-md"
                    >
                    </Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-gray-300 w-max text-black py-2 px-3 text-xs hover:bg-black hover:text-white font-semibold">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src={"https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        quality={100}>
                    </Image>
                    <Image
                        src={"https://images.pexels.com/photos/16485635/pexels-photo-16485635/free-photo-of-young-man-with-dyed-platinum-blond-hair-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600"}
                        alt={""}
                        fill
                        sizes="25vw"
                        quality={100}
                        className="absolute object-cover rounded-md"
                    >
                    </Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-gray-300 w-max text-black py-2 px-3 text-xs hover:bg-black hover:text-white font-semibold">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductPage