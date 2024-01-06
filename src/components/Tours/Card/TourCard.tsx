import { iTours } from "@/interface/api";
import {
  CalendarFilled,
  UserAddOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import { Card, Rate, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FieldTimeOutlined, HeatMapOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ServiceCard = ({
  tour,
  isLoading,
}: {
  tour: iTours;
  isLoading: boolean;
}) => {

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
          height={150}
          alt=""
          className="w-full object-cover"
          quality={100}
        />
        <div className="px-6 pb-4 mt-2 bg-white">
          {availabilityType === "AVAILABLE" ? (
            <Tag
              className="mb-2"
              icon={<SafetyCertificateFilled />}
              color="#FF6600"
            >
              {availabilityType}
            </Tag>
          ) : (
            <Tag
              className="mb-2"
              icon={<SafetyCertificateFilled />}
              color="#87CEEB"
            >
              {availabilityType}
            </Tag>
          )}
          <h2 className="text-lg h-14">{title}</h2>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              <HeatMapOutlined /> {location}
            </p>
            <p className="text-xs font-semibold text-secondary">${price}</p>
          </div>
          <div className="mt-2 flex justify-between items-center  font-medium">
            <Rate disabled defaultValue={4} className="text-accent" />
            <span>
              <FieldTimeOutlined /> {day} days
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
