import { motion } from 'framer-motion';


const Section1 = () => {
    return (
        <section className='w-full flex flex-col '>
            <div className='flex flex-col md:flex-row-reverse w-full'>
                <div className="bg-[url('/images/mobile/image-transform.jpg')] md:bg-[url('/images/desktop/image-transform.jpg')] bg-center w-full  bg-no-repeat bg-cover h-[450px] lg:h-[600px]"></div>
                <div className='w-full flex flex-col justify-center items-center md:items-start py-16'>
                    <div className='md:px-10 flex flex-col items-center md:items-start'>
                        <h2 className='text-4xl mb-6 font-extrabold md:max-w-[300px] leading-snug '>  Transform your brand</h2>
                        <p className=' text-GrayishBlue mb-4 max-w-[700px] lg:text-lg text-center  md:text-left'>We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you.</p>
                        <button className='font-bold transition-all duration-200 ease-in-out hover:border-b-myYellow hover:border-b-2'>LEARN MORE</button>
                    </div>
                </div>
                    
            </div>

            <div className='flex flex-col md:flex-row w-full' >
                <div className="bg-[url('/images/mobile/image-stand-out.jpg')] md:bg-[url('/images/mobile/image-stand-out.jpg')] bg-center w-full  bg-no-repeat bg-cover h-[450px] lg:h-[600px]"></div>
                <div className='w-full flex flex-col justify-center items-center md:items-start py-16'>
                    <div className='md:px-10 flex flex-col items-center md:items-start'>
                        <h2 className='text-4xl text-center mb-6 font-extrabold md:text-left md:max-w-[300px] leading-snug '>Stand out to the right audience</h2>
                        <p className=' text-GrayishBlue mb-4 max-w-[700px] lg:text-lg text-center  md:text-left'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                        <button className='font-bold transition-all duration-200 ease-in-out hover:border-b-softRed hover:border-b-2'>LEARN MORE</button>  
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full'>
                <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] md:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-center w-full  bg-no-repeat bg-cover h-[750px] lg:h-[600px] flex flex-col items-center justify-end pb-32 lg:pb-20">
                    <h3 className='text-3xl font-extrabold text-VeryDarkGrayishBlue mb-8'>Graphic Design</h3>
                    <p className='text-center font-medium px-4 text-xl max-w-[600px]'>  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
                <div className="bg-[url('/images/mobile/image-photography.jpg')] md:bg-[url('/images/desktop/image-photography.jpg')] bg-center w-full  bg-no-repeat bg-cover h-[750px] lg:h-[600px] flex flex-col items-center justify-end pb-32 lg:pb-20">
                    <h3 className='text-3xl font-extrabold text-VeryDarkGrayishBlue mb-8'>Photography</h3>
                    <p className='text-center font-medium px-4 text-xl max-w-[450px]'>  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </section>
    );
};

export default Section1;