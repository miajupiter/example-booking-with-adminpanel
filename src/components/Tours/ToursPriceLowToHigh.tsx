import { useGetToursQuery } from "@/redux/api/features/tours/toursApi"
import Loader from "../Shared/Loader"
import TourCard from "./Card/TourCard"
import { iTours } from "@/interface/api"
import XPagination from "../Shared/Pagination"
import { useState } from "react"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useDebounced } from "@/redux/hooks/useDebounced"
import { useSelector } from "react-redux"

const ToursPriceLowToHigh = () => {
  const query: Record<string, any> = {}

  const [page, setPage] = useState<number>(1)
  const [size, setSize] = useState<number>(10)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const {
    tours: { filters },
  }: any = useSelector((state) => state)
  const { minPrice, maxPrice, month, location } = filters

  query["limit"] = size
  query["page"] = page
  query["sortBy"] = "price"
  query["sortOrder"] = "desc"
  query["minPrice"] = minPrice
  query["maxPrice"] = maxPrice
  query["month"] = month
  query["location"] = location
  query["availabilityType"] = "AVAILABLE"

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  })

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm
  }

  const { data, isLoading } = useGetToursQuery(query)

  if (isLoading) {
    return <Loader />
  }

  const meta = data?.data?.meta

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPage(page)
    setSize(pageSize)
  }

  return (
    <>
      <Input
        size="large"
        placeholder="Find your destination"
        className="my-5"
        onChange={(e) => setSearchTerm(e.target.value)}
        suffix={<SearchOutlined />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data?.data?.length > 0 &&
          data.data.data.map((tour: iTours) => (
            <TourCard
              key={tour.id}
              tour={tour}
              isLoading={isLoading}
            />
          ))}
      </div>
      <div className="my-10 flex justify-end">
        <XPagination
          handlePaginationChange={handlePaginationChange}
          meta={meta}
          size={size}
        />
      </div>
    </>
  )
}

export default ToursPriceLowToHigh
