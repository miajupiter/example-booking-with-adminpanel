import { iTours } from "@/interface/api"
import {
  CalendarFilled,
  UserAddOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons"
import { Card, Tag } from "antd"
import Image from "next/image"
import Link from "next/link"

const { Meta } = Card

const TourSmallCard = ({
  tour,
  isLoading,
}: {
  tour: iTours
  isLoading: boolean
}) => {
  const {
    title,
    description,
    id
  } = tour
  const image = ''
  const day=6
  
  return (
    <Link href={`/tours/${id}`}>
      <Card
        loading={isLoading}
        className="bg-elegant"
        hoverable
        cover={<Image src={image} alt={title} height={100} width={200} className="object-cover" />}
        actions={[
          <div key={1} className="flex  justify-center items-center gap-5">
            <p>{day} days</p>
            <CalendarFilled key="calendar" />
          </div>,
          <div key={2} className="flex  justify-center items-center gap-5">
            <UserAddOutlined key="user" />
            {/* <p>{availability} +</p> */}
          </div>,
        ]}
      >
        <Tag
            className="mb-5"
            icon={<SafetyCertificateFilled />}
            color="#87CEEB"
          >
            {/* {availabilityType} */}
            availabilityType
          </Tag>
        <Meta title={title} />
      </Card>
    </Link>
  )
}

export default TourSmallCard
