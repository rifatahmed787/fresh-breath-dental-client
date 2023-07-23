import { useEffect } from "react";

const BlogStandard = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
          <div className="flex justify-center text-brand items-center min-h-screen h-full">
          <p className="text-7xl font-bold">Upc</p>
          <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-brand"></div>
          <p className="text-7xl font-bold">ming...</p>
          
        </div>
    );
};

export default BlogStandard;