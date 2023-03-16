import React, { useState } from 'react'

const kitchenType = [
    {
        id : 0,
        name : 'U Shape',
        selectedId : 'u-shape',
        imageId : '/Images/u-shape.jpg'
    },
    {
        id : 1,
        name : 'L Shape',
        selectedId : 'l-shape',
        imageId : '/Images/l-shape.jpg'
    },
    {
        id : 2,
        name : 'Parallel',
        selectedId : 'parallel',
        imageId : '/Images/parallel.jpg'
    },
    {
        id : 3,
        name : 'Straight',
        selectedId : 'straight',
        imageId : '/Images/straight.jpg'
    },
    {
        id : 4,
        name : 'Island',
        selectedId : 'island',
        imageId : '/Images/island.jpeg'
    }
]

function KitchenType() {
    const [selected, setSelected] = useState('u-shape')

    const handleSelect = (id) => {
        setSelected(id)
    }
  return (
    <div>
        <div className='bg-[#eaeaea] py-[20px]'>
            <div className='container text-center'>
                <h1 className='text-3xl text-secondary text-center mb-[20px]'>Types of Kitchen</h1>
                {
                    kitchenType.map(k=> (
                        <div key={k.id} onClick={()=> handleSelect(k.selectedId)} className={` ${selected === k.selectedId ? 'bg-secondary text-[#fff] ' : ''} mr-4 text-secondary mb-4 cursor-pointer inline-block border-secondary border-2 rounded-full px-[20px] py-[5px]`}>{k.name}</div>
                    ))
                }
            </div>
        </div>
        <div
            className='h-[70vh] '
            style={{
                backgroundImage :  `url(${kitchenType.find(i=> i.selectedId === selected).imageId})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundSize : 'cover'
            }}
        >
            <div className='h-[inherit]'>
                <div className='container relative'>
                    <h1 className='text-3xl font-semibold mb-[20px] absolute top-[20px] text-primary'>
                        {kitchenType.find(i=> i.selectedId === selected).name} Kitchen
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KitchenType