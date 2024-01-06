'use client'

import Loader from '@/components/Shared/Loader'
import Title from '@/components/UI/Title'
import { useGetToursQuery } from '@/redux/api/features/tours/toursApi'
import { Card, Image } from 'antd'
import { progress } from 'framer-motion'

const Tours = () => {
  const { data, isLoading } = useGetToursQuery({})

  if (isLoading) {
    return <Loader />
  }

  const tourData = data?.data

  return (
    <div className='container mx-auto'>
      <Title title='Tours' top='Look Now' />
      <div className='space-y-4'>
        {tourData.length > 0 &&
          tourData.map((data: any) => (
            <Card title={data?.title} key={data?.id} bordered={true}>
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/tours/${data?.id}`} >{data?.title}</a>
              <h3>{data?.places}</h3>
              <Image
               src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${data?.previewImg}`}
               alt={data?.title}
               />
              
              <p className='text-neutral'>{data?.description}</p>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default Tours
