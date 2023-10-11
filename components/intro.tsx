import Image from 'next/image'
import profileImage from '../public/assets/profile_pic_website.jpg'

const Intro = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center text-slate-100 h-[85vh] -mt-[4rem] min-h-[610px]'>
      <Image className='rounded-full hover:shadow-2xl transition ease-in-out hover:scale-105 duration-300 border-2 border-amber-200' src={profileImage} alt={'Artem Avetisyan'} placeholder='blur' width={300}/>
      <div className='md:ml-8 mt-6 md:mt-7 text-center md:text-left'>
        <div className='text-4xl tracking-tight text-center sm:text-left md:tracking-tighter leading-tight font-medium mb-6 mt-6'>Hey, I am <span data-glitch="Artem" className='glitch'>Artem</span></div>
        <p className='text-lg'>Web developer and OSS tinkerer.</p>
      </div>
    </section>
  )
}

export default Intro
