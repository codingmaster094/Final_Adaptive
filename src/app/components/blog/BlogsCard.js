'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BlogsCard = ({ AllpostData }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [activeVideoUrl, setActiveVideoUrl] = useState('');
    const getEmbedUrl = (url) => {
        try {
            const parsed = new URL(url);
            if (parsed.hostname === "youtu.be") {
                return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}?autoplay=1`;
            }
            if (parsed.hostname.includes("youtube.com")) {
                const v = parsed.searchParams.get("v");
                if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
                if (parsed.pathname.startsWith("/shorts/")) {
                    const videoId = parsed.pathname.split("/shorts/")[1].split("?")[0];
                    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                }
                if (parsed.pathname.includes("/embed/")) {
                    return url.includes("autoplay=1") ? url : url + "?autoplay=1";
                }
            }
            return "";
        } catch (err) {
            console.warn("Invalid YouTube URL:", url);
            return "";
        }
    };

    const handleOpen = (url) => {
        const embedUrl = getEmbedUrl(url);
        if (embedUrl) {
            setActiveVideoUrl(embedUrl);
            setShowPopup(true);
        }
    };

    const handleClose = () => {
        setShowPopup(false);
        setActiveVideoUrl('');
    };

    if (!Array.isArray(AllpostData) || AllpostData.length === 0) {
        return <div className="text-center text-gray-500 py-10">No blog posts found.</div>;
    }

    return (
        <>
            <div className="pt-[200px] pb-[100px]" >
                {AllpostData.map((main_item, i) => (
                    <div className="container" key={i}>
                        <div className="item card-item h-full flex flex-col relative w-full max-w-4xl mx-auto">
                            <h2 className="title-head text-h3">{main_item?.title?.rendered}</h2>
                            {Array.isArray(main_item.acf?.mike_videos) &&
                                main_item.acf.mike_videos.map((sub_item, index) => (
                                    <div className="bg-white p-6 flex flex-col flex-1 shadow-[1px_0_12px_rgba(51,52,54,0.1)]" key={index}>
                                        <h3 className="text-body font-bold font-inter md:min-h-[20px] min-h-auto mb-8" dangerouslySetInnerHTML={{ __html: sub_item.title }}>
                                        </h3>
                                        <Image
                                            src={main_item.featured_image_data.url}
                                            alt={"featured_image"}
                                            width={600}
                                            height={400}
                                            className="w-full md:h-[240px] object-cover"
                                        />


                                        <div className="content space-y-[20px] my-6 flex-1 flex flex-col">

                                            <span
                                                className="text text-black-100 font-inter font-normal line-clamp-4"
                                                dangerouslySetInnerHTML={{ __html: sub_item.description }}
                                            >
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-start sm:items-center gap-4 sm:flex-row flex-col">
                                            <div className="flex gap-3 xsm:flex-row flex-col w-full xsm:w-auto">
                                                <Link
                                                    href={sub_item.know_more.url}
                                                    className="flex justify-center items-center btn-link text-[18px] border-green hover:border-black cursor-pointer w-full xsm:w-auto"
                                                >
                                                    {sub_item.know_more.title} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.99996 18.9963C8.80133 18.9974 8.60686 18.9394 8.44134 18.8296C8.27582 18.7198 8.14675 18.5632 8.07059 18.3798C7.99442 18.1963 7.97461 17.9943 8.01368 17.7996C8.05275 17.6049 8.14893 17.4262 8.28996 17.2863L13.59 11.9963L8.28996 6.70628C8.10165 6.51798 7.99586 6.26258 7.99586 5.99628C7.99586 5.86442 8.02184 5.73385 8.0723 5.61203C8.12276 5.49021 8.19672 5.37952 8.28996 5.28628C8.38319 5.19304 8.49388 5.11908 8.61571 5.06862C8.73753 5.01816 8.8681 4.99219 8.99996 4.99219C9.26626 4.99219 9.52165 5.09798 9.70996 5.28628L15.71 11.2863C15.8962 11.4736 16.0007 11.7271 16.0007 11.9913C16.0007 12.2555 15.8962 12.5089 15.71 12.6963L9.70996 18.6963C9.61734 18.7908 9.5069 18.8659 9.38502 18.9174C9.26315 18.9689 9.13226 18.9957 8.99996 18.9963Z" fill="black" />
                                                    </svg>

                                                </Link>
                                                <Link
                                                    href={sub_item.free_webinar.title}
                                                    className="flex justify-center items-center btn-green text-[18px] w-full xsm:w-auto"
                                                >
                                                    {sub_item.free_webinar.title} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.99996 18.9963C8.80133 18.9974 8.60686 18.9394 8.44134 18.8296C8.27582 18.7198 8.14675 18.5632 8.07059 18.3798C7.99442 18.1963 7.97461 17.9943 8.01368 17.7996C8.05275 17.6049 8.14893 17.4262 8.28996 17.2863L13.59 11.9963L8.28996 6.70628C8.10165 6.51798 7.99586 6.26258 7.99586 5.99628C7.99586 5.86442 8.02184 5.73385 8.0723 5.61203C8.12276 5.49021 8.19672 5.37952 8.28996 5.28628C8.38319 5.19304 8.49388 5.11908 8.61571 5.06862C8.73753 5.01816 8.8681 4.99219 8.99996 4.99219C9.26626 4.99219 9.52165 5.09798 9.70996 5.28628L15.71 11.2863C15.8962 11.4736 16.0007 11.7271 16.0007 11.9913C16.0007 12.2555 15.8962 12.5089 15.71 12.6963L9.70996 18.6963C9.61734 18.7908 9.5069 18.8659 9.38502 18.9174C9.26315 18.9689 9.13226 18.9957 8.99996 18.9963Z" fill="black" />
                                                    </svg>

                                                </Link>
                                            </div>

                                            <button
                                                className="text-[18px] font-medium font-inter uppercase flex items-center gap-1"
                                                onClick={() => handleOpen(sub_item.youtube_link)}
                                            >
                                                <Image
                                                    src={"/img/YOUTUBE.svg"}
                                                    alt="youtub-icon"
                                                    width={30}
                                                    height={30}
                                                    className=""
                                                />
                                            </button>

                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {showPopup && activeVideoUrl && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
                    <div className="relative w-[90%] max-w-[1024px] rounded-lg shadow-lg">
                        <button
                            onClick={handleClose}
                            className="absolute -top-12 md:-top-8 right-4 md:-right-8 text-white text-[32px] font-bold"
                        >
                            &times;
                        </button>
                        <div className="w-full aspect-video">
                            <iframe
                                src={activeVideoUrl}
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogsCard;
