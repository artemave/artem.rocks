import profileImage150 from '../public/assets/profile_pic_website_150.jpg'
import profileImage300 from '../public/assets/profile_pic_website_300.jpg'
import profileImage600 from '../public/assets/profile_pic_website_600.jpg'

const Intro = () => {
  const transitionCommon = 'transition ease-in-out duration-300'

  return (
    <section className='flex flex-col md:flex-row justify-center items-center text-slate-100 h-[85vh] -mt-[4rem] min-h-[610px]'>
      <div className={`group w-[300px] h-[300px] relative rounded-full hover:shadow-2xl ${transitionCommon} hover:scale-105`}>
        <div className={`absolute w-[300px] h-[150px] bg-[#0057B7] z-10 rounded-t-full opacity-0 group-hover:opacity-50 ${transitionCommon}`} />
        <div className={`absolute top-[150px] w-[300px] h-[150px] bg-[#FFDD00] z-10 rounded-b-full opacity-0 group-hover:opacity-50 ${transitionCommon}`} />
        <img
          className={`absolute rounded-full border-2 border-amber-200 group-hover:grayscale ${transitionCommon}`}
          src={profileImage300.src}
          srcSet={`${profileImage150.src} 150w, ${profileImage300.src} 300w, ${profileImage600.src} 600w`}
          sizes="(max-width: 768px) 150px, 300px"
          alt="Artem Avetisyan stands with Ukraine"
          width={300}
          height={300}
        />
      </div>
      <div className='md:ml-6 mt-6 md:mt-7 text-center md:text-left'>
        <div className='text-4xl tracking-tight text-center sm:text-left md:tracking-tighter leading-tight font-medium my-6 pl-2'>Hey, I am <span data-glitch="Artem" className='glitch'>Artem</span></div>
        <p className='text-lg px-2'>Web developer and OSS tinkerer.</p>
      </div>
    </section>
  )
}

export default Intro
