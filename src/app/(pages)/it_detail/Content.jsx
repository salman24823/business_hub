import React from 'react'

const Content = ({ data }) => {
  if (data.length === 0) return <p>No data found.</p>

  return (
    <main className='w-full p-[5%]'>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.id} - {item.dataTitle}</p>
          {item.description && <p>{item.description}</p>}
          {item.subTitle2 && <p>{item.subTitle2}</p>}
          {item.points && <p>{item.points}</p>}
        </div>
      ))}
    </main>
  )
}

export default Content
