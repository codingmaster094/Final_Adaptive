// components/BlogCard.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => (
  <div className="item card-item">
    <div className="bg-white p-4 border border-solid border-black-200">
      {blog.featured_image_data && blog.featured_image_data.url ? (
        <Image
          src={blog.featured_image_data.url}
          alt={blog.title.rendered}
          width={600}
          height={400}
          className="w-full md:h-[240px] object-cover"
        />
      ) : null}{" "}
      <div className="content space-y-[20px] my-6">
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-medium font-inter uppercase bg-[#EEA7DF33] p-[6px] rounded-[4px]">
            {blog.category_names[0]}
          </span>
          <span className="text-[12px] font-medium font-inter text-black-100">
            {new Date(blog.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="text-body font-bold font-inter">
          {blog.title.rendered}
        </h3>
        <div
          className="text text-black-100 font-inter font-normal"
          dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
        ></div>
      </div>
      <Link
        href={`/blog/${blog.slug}`}
        className="block underline underline-offset-4 text-black font-semibold font-overpass"
      >
        Read More
      </Link>
    </div>
  </div>
);

export default BlogCard;
