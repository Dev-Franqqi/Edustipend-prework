import {useState} from 'react'
export default function () {
    const [sideBarView,setSideBarView] = useState('hidden')
    const [mainView,setMainView] = useState('block')
  return (
    <>

    <main className="flex justify-between w-full ">

        <div className={`${mainView} md:block`}>

            <button onClick={()=>{setSideBarView('flex')
        setMainView('hidden')}} className="bg-orange-500 absolute right-1 text-white px-5 rounded md:hidden ">Trending</button>
          <h1 className="text-3xl font-bold mt-24">Make your party fun!</h1>
          <p className="mt-4">Create your own custom playlist today.</p>

          <button className="bg-orange-500 text-white px-4 py-1 rounded mt-3">Create playlist</button>
        </div>
             



        <aside className={`bg-gray-600 p-2 w-96 h-full flex flex-col justify-center ${sideBarView}`}>
            <div className='flex justify-between'>
            <h2 className="text-2xl font-bold md:text-center text-white mb-4">Trending songs</h2>
                
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>{
               setSideBarView('hidden')
               setMainView('block')
            }} className="w-6 h-6 md:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>

            <div className="bg-white rounded text-center p-3">Unavailable by Davido<span className="font-bold text-xl">+</span></div>
            <div className="bg-white rounded text-center p-3">Unavailable by Davido<span className="font-bold text-xl">+</span></div>
            <div className="bg-white rounded text-center p-3">Unavailable by Davido<span className="font-bold text-xl">+</span></div>
            <div className="bg-white rounded text-center p-3">Unavailable by Davido<span className="font-bold text-xl">+</span></div>
            <div className="bg-white rounded text-center p-3">Unavailable by Davido<span className="font-bold text-xl">+</span></div>
            <button className="bg-orange-500 py-1 rounded px-4 mx-auto text-white">View more</button>
        </aside>

    </main>

        
    </>
  )
}