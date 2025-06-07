import Image from 'next/image'
import profileImage from '../public/assets/profile_pic_website.jpg'

const Intro = () => {
  const transitionCommon = 'transition ease-in-out duration-300'

  return (
    <section className='flex flex-col md:flex-row justify-center items-center text-slate-100 h-[85vh] -mt-[4rem] min-h-[610px]'>
      <div className={`group w-[300px] h-[300px] relative rounded-full hover:shadow-2xl ${transitionCommon} hover:scale-105`}>
        <div className={`absolute w-[300px] h-[150px] bg-[#0057B7] z-10 rounded-t-full opacity-0 group-hover:opacity-50 ${transitionCommon}`} />
        <div className={`absolute top-[150px] w-[300px] h-[150px] bg-[#FFDD00] z-10 rounded-b-full opacity-0 group-hover:opacity-50 ${transitionCommon}`} />
        <Image className={`absolute rounded-full border-2 border-amber-200 group-hover:grayscale ${transitionCommon}`} src={profileImage} alt={'Artem Avetisyan stands with Ukraine'} placeholder='blur' width={300}/>
      </div>
      <div className='md:ml-6 mt-6 md:mt-7 text-center md:text-left'>
        <div className='text-4xl tracking-tight text-center sm:text-left md:tracking-tighter leading-tight font-medium my-6 pl-2'>Hey, I am <span data-glitch="Artem" className='glitch'>Artem</span></div>
        <p className='text-lg px-2'>Web developer and OSS tinkerer.</p>
      </div>
    </section>
  )
}

export default Intro
