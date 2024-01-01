import { Button, Input, Popconfirm, Select, Tag, message } from "antd";
import { ApartmentOutlined,SearchOutlined } from '@ant-design/icons'

const SearchBox = () => {
  return (
    <div className={'container mx-auto my-22 px-6'}>
      <div className={'text-center'}>
        <Input
          size={'large'}
          placeholder="Search tours"
          className="my-5"
          // onChange={(e) => {
          //   console.log(e)
          // }}
          suffix={<SearchOutlined />}
          style={{maxWidth:'600px'}}
        />
      </div>
    </div>
  )
}


export default SearchBox
