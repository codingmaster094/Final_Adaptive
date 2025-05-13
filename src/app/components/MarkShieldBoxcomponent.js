import Image from "next/image";
const MarkShieldBoxcomponent = ({items}) => {
    return (
      <>
        <section className="tools-section">
          {items.map((item) => (
            <div
              key={item.id} // Use a unique identifier if available
              className={`block-enterprice t-section w-full ${
                item.bgClass
              } border-b-[1px] border-b-black-200 border-b-solid ${
                item.reverse ? "xmd:flex-row-reverse" : "xmd:flex-row"
              } lg:py-[100px] md:py-[80px] sm:py-[50px] py-6`}
            >
              <div className="container">
                <div className="inner-content flex flex-col lg:space-y-16 md:space-y-10 space-y-6">
                  <div
                    className={`inner flex justify-start items-start lg:gap-16 gap-8 ${
                      item.reverse
                        ? "xmd:flex-row-reverse flex-col"
                        : "xmd:flex-row flex-col"
                    }`}
                  >
                    <div className="left xmd:w-1/2 w-full space-y-8">
                      <h3 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                        {item.title}
                      </h3>
                      <div
                        className="space-y-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></div>
                    </div>
                    <div className="right xmd:w-1/2 w-full flex justify-start">
                      <Image
                        width={714}
                        height={450}
                        src={item.image}
                        alt={item.imageAlt || "Description of the image"}
                        role="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
}
export default MarkShieldBoxcomponent