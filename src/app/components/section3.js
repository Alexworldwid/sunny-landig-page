import React from 'react';

const Section3 = () => {
    return (
        <section className='grid grid-cols-2 w-full md:grid-cols-4'>
            <div className='bg-[url("/images/mobile/image-gallery-milkbottles.jpg")] md:bg-[url("/images/desktop/image-gallery-milkbottles.jpg")] bg-cover bg-no-repeat bg-center h-[350px] w-full'></div>
            <div className='bg-[url("/images/desktop/image-gallery-orange.jpg")] md:bg-[url("/images/desktop/image-gallery-orange.jpg")] bg-cover bg-no-repeat bg-center h-[350px] w-full'></div>
            <div className='bg-[url("/images/mobile/image-gallery-cone.jpg")] md:bg-[url("/images/desktop/image-gallery-cone.jpg")] bg-cover bg-no-repeat bg-center h-[350px] w-full'></div>
            <div className='bg-[url("/images/mobile/image-gallery-sugar-cubes.jpg")] md:bg-[url("/images/desktop/image-gallery-sugarcubes.jpg")] bg-cover bg-no-repeat bg-center h-[350px] w-full'></div>
        </section>
    );
};

export default Section3;