import React from 'react'
import Image from "next/image"


interface Progress {
  image: string;
  alt: string;
  title: string;

}

const progresscontent = [
  {
    title: "Projects Constructed Progress",
    color: "#FFA500",
    components: [
      {
        image: "/noproduct.jpg",
        alt:"",
        title: "Boreholes",
        progress: "74"
      },
      {
        image: "/noproduct.jpg",
        title: "Water haversts",
        progress: "52",
        alt:""

      },
      {
        image: "/noproduct.jpg",
        title: "Market Linkages",
        progress: "36",
        alt:""

      }
    ]
  },
  {
    title: "Projects Rehabilitated Progress",
    color: "#00FF00",
    components: [
      {
        image: "/noproduct.jpg",
        title: "Boreholes",
        progress: "95",
        alt:""
      },
      {
        image: "/noproduct.jpg",
        title: "Water harvests",
        progress: "92",
        alt:""
      },
      {
        image: "/noproduct.jpg",
        title: "Markets",
        progress: "89",
        alt:""
      }
    ]
  },

]

const ProgressCard = () => {
  return (
    <div className="md:grid grid-cols-2 gap-4">
      {progresscontent.map((data, index) => (
        <div className='bg-[#182237] shadow-md p-4 my-2 rounded-md col-span-1' key={index}>

          <div key={index}>
            <h3 className='my-2 text-gray-500 capitalize font-medium'>{data.title}</h3>
            {data.components.map((item: { image: string; title: string; progress: string; alt: string; }, itemIndex: number) => (
              <div className='flex flex-row justify-between items-center gap-4 my-4' key={itemIndex}>
                <Image className='rounded-full' src={item.image} alt={item.alt} height={30} width={30} />
                <div className='flex flex-col gap-2 text-black w-full rounded-full'>
                  <p className='font-medium text-white capitalize'>{item.title}</p>
                  <div className="relative h-2 w-full rounded-full bg-gray-300">
                    <div className={`h-full absolute inset-0 rounded-full`} style={{
                      backgroundColor: data.color,
                      width: `${parseInt(item.progress)}%`
                    }}></div>
                  </div>
                </div>
                <p className="text-white mt-6">{item.progress}%</p>
              </div>
            ))}


          </div>
        </div>
      ))}

    </div>
  )
}

export default ProgressCard