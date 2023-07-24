import { FaSearch } from "react-icons/fa";
import Colleges from "./Colleges";
import GraduateGallery from "./GraduateGallery";
import FeedBack from "./FeedBack";
import useCollege from "../../hooks/useCollege";
import ResearchLink from "./ResearchLink";

const Home = () => {

    const allcollege = useCollege()

    return (
        <>
            {/* <h2>Hello Jahid</h2> */}
            {/* <div className='max-w-xl mx-auto mt-24 flex '>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-rose w-full px-5 py-3 rounded' />
                <button onClick={handlerSearch}>
                    <FaSearch className='bg-red text-white p-3 text-5xl rounded-tr rounded-br'></FaSearch>
                </button>

            </div> */}

            <div className="max-w-screen-2xl mx-auto">
                <div className='lg:max-w-xl mx-5 lg:mx-auto my-5 lg:my-12 flex '>
                    <input type="text" className='w-full px-5 border border-blue' placeholder="Search" />
                    <button >
                        <FaSearch className='bg-blue text-white p-3 text-4xl border-3'></FaSearch>
                    </button>

                </div>

                <div className="px-5">
                    <Colleges
                        allcollege={allcollege}
                    ></Colleges>

                    <GraduateGallery
                        allcollege={allcollege}
                    ></GraduateGallery>

                    <ResearchLink
                        allcollege={allcollege}
                    ></ResearchLink>
                </div>

                <FeedBack></FeedBack>
            </div>
        </>
    );
};

export default Home;