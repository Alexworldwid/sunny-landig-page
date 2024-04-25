import React from 'react';
import Image from 'next/image';
import Emily from '/public/images/image-emily.jpg';
import Thomas from '/public/images/image-thomas.jpg';
import jennie from '/public/images/image-jennie.jpg';

const Section2 = () => {
    return (
        <section className='flex flex-col items-center py-20'>
            <h4 className='mb-10 text-xl font-extrabold tracking-[10px] text-center text-GrayishBlue'>CLIENT TESTIMONIALS</h4>
            <div className='flex flex-col items-center md:grid md:grid-cols-3 md:gap-x-6'>
                <div className='flex flex-col items-center mb-10'>
                    <Image src={Emily} alt='emily-img' className='w-20 h-20 rounded-full mb-10'  />
                    <p className='text-center font-bold leading-[30px] text-GrayishBlue max-w-[350px] mb-6'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <p className='font-extrabold mb-3 text-xl'>Emily R.</p>
                    <p className='text-GrayishBlue'>Marketing Director</p>
                </div>

                <div className='flex flex-col items-center mb-10'>
                    <Image src={Thomas} alt='Thomas img' className='w-20 h-20 rounded-full mb-10' />
                    <p className='text-center font-bold leading-[30px] text-GrayishBlue max-w-[350px] mb-6'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <p className='font-extrabold mb-3 text-xl'>Thomas S.</p>
                    <p className='text-GrayishBlue'>Chief Operating Officer</p>
                </div>


                <div className='flex flex-col items-center mb-10'>
                    <Image src={jennie} alt='jennie img' className='w-20 h-20 rounded-full mb-10' />
                    <p className='text-center font-bold leading-[30px] text-GrayishBlue max-w-[350px] mb-6'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <p className='font-extrabold mb-3 text-xl'>Jennie F.</p>
                    <p className='text-GrayishBlue'>Business Owner</p>
                </div>
            </div>
        </section>
    );
}

export default Section2;