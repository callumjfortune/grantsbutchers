//import Image from 'next/image';
import Nav from '../components/Nav.jsx';


export default function Home() {

  return (
    <main className="h-screen bg-black flex flex-col justify-end">
      <Nav className='flex-grow'></Nav>
      <div className='w-full bg-black aspect-square text-center bg-[url("../../public/assets/images/hero-img.jpg")] bg-center bg-cover'>
        <div className='w-full h-full  p-10 flex flex-col justify-center items-center  backdrop-brightness-50'>
          <div className=''>
            <h1 className='text-4xl mb-7 font-extralight tracking-widest'> - ORDER - </h1>
            <p className='text-sm mb-5'>Place a produce order for collection or delivery through our online system</p>
            <button className='bg-white text-black px-6 py-1'>Begin</button>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-200 aspect-square'>

      <div className="container">
    <div className="item">
      <div>1</div>
    </div>
    <div className="item">
      <div>2</div>
    </div>
    <div className="item">
      <div>3</div>
    </div>
    <div className="item">
      <div>4</div>
    </div>
    <div className="item">
      <div>5</div>
    </div>
    <div className="item">
      <div>6</div>
    </div>
</div>

      </div>
    </main>
  )
}
