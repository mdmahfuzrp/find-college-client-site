import { Link } from "react-router-dom";

const ResearchLink = () => {

    const researchLink = [
        {
            "image": "https://i.ibb.co/LgyGdbY/slac-01.jpg",
            "institute": "SLAC National Accelerator Laboratory",
            "details": "SLAC is a U.S. Department of Energy national laboratory operated by Stanford, conducting research in chemistry, materials and energy sciences, bioscience, fusion energy science, high-energy physics, cosmology and other fields.",
            "link": "https://www6.slac.stanford.edu/"
        },
        {
            "image": "https://i.ibb.co/T10mRkw/Hoover-Tower.jpg",
            "institute": "Hoover Institution",
            "details": "The Hoover Institution, devoted to the study of domestic and international affairs, was founded in 1919 by Herbert Hoover, a member of Stanford’s pioneer class of 1895 and the 31st U.S. president.",
            "link": "https://www.hoover.org/"
        },
        {
            "image": "https://i.ibb.co/mcmg5SN/Woods-Institute.jpg",
            "institute": "Woods Institute for the Environment",
            "details": "Working toward a future in which societies meet people’s needs for water, food and health while protecting and nurturing the planet.",
            "link": "https://woods.stanford.edu/"
        },
        {
            "image": "https://i.ibb.co/HNNdgQf/humanities-highlight.jpg",
            "institute": "Humanities Center",
            "details": "Advancing research into the historical, philosophical, literary, artistic, and cultural dimensions of the human experience.",
            "link": "https://nationalhumanitiescenter.org/"
        },
        {
            "image": "https://i.ibb.co/HnkKM4S/neuroscience-highlight.jpg",
            "institute": "Bio-X",
            "details": "Biomedical and life science researchers, clinicians, engineers, physicists and computational scientists come together to unlock the secrets of the human body.",
            "link": "https://biox.stanford.edu/"
        },
        {
            "image": "https://i.ibb.co/Dk920mF/FSI2.jpg",
            "institute": "Freeman Spogli Institute for International Studies (FSI)",
            "details": "Understanding problems, policies and processes that cross borders and affect lives around the world.",
            "link": "https://fsi.stanford.edu/"
        }
    ]

    return (
        <section className="mx-5 lg:mx-0 my-32">
            <h3 className="text-2xl uppercase font-semibold">Research Paper Link</h3>
            <hr />
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 my-5 lg:my-8 ">
                {
                    researchLink.map((college, idx) => <div
                        key={idx}
                        className="overflow-hidden group relative"
                    >
                        <div className="flex justify-center items-center gap-5">
                            <h1 className="text-6xl font-thin text-red">{idx + 1}</h1>
                            <div>
                                <h3 className="text-xl lg:text-3xl font-semibold">{college.institute}</h3>
                                <Link to={college.link} target="_blank">
                                    <p className="italic underline hover:text-red">{college.details}</p>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ResearchLink;