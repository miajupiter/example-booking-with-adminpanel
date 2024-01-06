'use client'

import Loader from '@/components/Shared/Loader'
import Title from '@/components/UI/Title'
// import { useGetToursQuery, useGetSingleTourQuery } from '@/redux/api/features/tours/toursApi'
import { useGetSingleTourQuery } from '@/redux/api/features/tours/toursApi'
import { Card, Image } from 'antd'
import { useDispatch } from "react-redux"
import { progress } from 'framer-motion'

const SingleTour = ({ params }: any) => {
  const { id } = params

  const dispatch = useDispatch()

  const { data, isLoading } = useGetSingleTourQuery(id)
  // const { data: serviceAllData } = useGetToursQuery({ limit: 3, page: 1 })

  if (isLoading) {
    return <Loader />
  }

  const { title, description, duration, places, single_supplement, currency, inclusions, exclusions, images, priceTable, travelPlan } = data?.data

  // const resimler=(resimler)=>{
  //   const resim1=resimler.map(e=><p>e.thumbnail</p>)
  //   return (<>
  //   </>)
  // }
  return (
    <div className='container mx-auto'>
      <Title title='Tours' top='Look Now' />
      <div className='space-y-4'>
        <Card title={title} key={id} bordered={true}>
          <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/tours`} >Back to Tours</a>
          <h3>{places}</h3>
          <h3>images.length: {images.length}</h3>
          <h3>travelPlan.length: {travelPlan.length}</h3>
          {images.length>0 && images.map((e) => <p>
            <Image 
              // src={(process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '') + '/' + e.image}
              alt={title}
              srcSet={(process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '') + '/' + e.image}
              style={{width:'100px'}}
            />
          </p>)}
          
          {travelPlan.length>0 && <h3>Travel Plan</h3>}
          {travelPlan.length>0 && travelPlan.map((e)=><p>{e.title}</p>)}
          <p className='text-neutral'>{description}</p>
        </Card>
      </div>
    </div>
  )
}

export default SingleTour
