import React, { useState } from 'react'

const KitchenFinishesArr = [
    {
        id : 0,
        name : 'Laminate',
        selectedId : 'laminate',
        imageId : 1
    },
    {
        id : 1,
        name : 'Veneer',
        selectedId : 'veneer',
        imageId : 2
    },
    {
        id : 2,
        name : 'Lacquer glass',
        selectedId : 'lacquer-glass',
        imageId : 1
    },
    {
        id : 3,
        name : 'Acrylic',
        selectedId : 'acrylic',
        imageId : 2
    },
    {
        id : 4,
        name : 'PU Polish',
        selectedId : 'pu-polish',
        imageId : 1
    }
]

function KitchenFinishes() {
    const [selected, setSelected] = useState('laminate')

    const handleSelect = (id) => {
        setSelected(id)
    }
  return (
    <div>
        <div className='bg-[#eaeaea] py-[20px]'>
            <div className='container text-center'>
                <h1 className='text-3xl text-secondary text-center mb-[20px]'>Different Finishes of Kitchen</h1>
                {
                    KitchenFinishesArr.map(k=> (
                        <div key={k.id} onClick={()=> handleSelect(k.selectedId)} className={` ${selected === k.selectedId ? 'bg-secondary text-[#fff] ' : ''} mr-4 text-secondary mb-4 cursor-pointer inline-block border-secondary border-2 rounded-full px-[20px] py-[5px]`}>{k.name}</div>
                    ))
                }
            </div>
        </div>
        <div
            className='h-[70vh]'
            style={{
                backgroundImage :  `url(/Images/${KitchenFinishesArr.find(i=> i.selectedId === selected).imageId}.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundSize : 'cover'
            }}
        >
            
        </div>
    </div>
  )
}

export default KitchenFinishes