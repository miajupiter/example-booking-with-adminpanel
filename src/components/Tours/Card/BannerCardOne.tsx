import { iTours } from "@/interface/api"
import { Rate } from "antd"
import Image from "next/image"
import { FieldTimeOutlined } from "@ant-design/icons"
import Link from "next/link"

const BannerCardOne = ({ tour }: { tour: iTours }) => {

  const { id, title, description } = tour
  const availabilityType = 'AVAILABLE'
  const price = 55
  const location = 'izmir'
  const image = ''
  const day=6

  return (
    <Link href={`/tours/${id}`} className="text-black">
      <div
        style={{ border: "1px solid grey" }}
        className="hover:shadow-2xl duration-300"
      >
        <Image
          src={image}
          width={200}
          height={300}
          alt=""
          className="w-full rounded-sm"
          quality={100}
        />
        <div className="px-6 pb-4 mt-2 bg-white">
          <h2 className="text-xl font-black">{title.slice(0, 20)}...</h2>
          <p className="text-sm font-bold">{location}</p>
          <div className="mt-6 flex justify-between items-center  font-medium">
            <Rate disabled defaultValue={4} className="text-accent" />
            <span>
              <FieldTimeOutlined /> {day} days
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BannerCardOne
