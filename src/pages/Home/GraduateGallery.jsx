const GraduateGallery = ({allcollege}) => {

    return (
        <section className="mx-5 lg:mx-0">
            <h3 className="text-2xl uppercase font-semibold">Gallery</h3>
            <hr />
            <div className="grid lg:grid-cols-3 gap-5 my-5 lg:my-8 ">
                {
                    allcollege.map((college, idx) => <div
                        key={idx}
                        className="overflow-hidden group relative rotate-1"
                    >
                        <img src={college.gallery} alt="" className="h-[210px] w-full hover:scale-150 duration-1000  " />
                        <div className="absolute inset-0 bg-red bg-opacity-0 hover:bg-opacity-60 duration-1000 flex justify-center items-center cursor-pointer">
                            <div className="hidden group-hover:block">
                                <h3 className="text-4xl font-semibold text-white text-center">{college.college_name}</h3>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
};

export default GraduateGallery;