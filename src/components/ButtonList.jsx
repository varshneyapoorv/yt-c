import React from 'react'

const buttonItemList = ["All", "Javascript", "React", "Python", "Django", "Node", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Apollo", "Prisma", "TypeORM", "Sequelize", "Docker",]

const ButtonList = () => {
  return (
    <div className='py-4'>
      {
        buttonItemList.map((item, index) => {
          return (
            <button key={index} className='bg-gray-200 py-1 px-4 rounded-lg mx-2 font-medium mt-3'>{item}</button>
          )
        })
      }
    </div>
  )
}

export default ButtonList
