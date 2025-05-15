

const Tailored_Downside_Protection = ({ down_side }) => {
  return (
    <section className="tools-section lg:py[150px] md:py-[80px] py-[50px] w-full bg-dots_bg bg-cover bg-center bg-no-repeat border-b-[1px] border-b-black-200 border-b-solid border-t-[1px] border-t-black-200 border-t-solid">
      <div className="container">
        <div className="inner lg:space-y-[100px] md:space-y-16 space-y-6">
          {down_side && down_side.map((items,i) =>{
            return (
              <div className="top text-black text-left space-y-6" key={i}>
                <div className="title flex justify-start items-start">
                  <h2
                    className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0"
                    dangerouslySetInnerHTML={{ __html: items.title }}
                  ></h2>
                </div>
                <div
                  className="text text-body font-inter font-normal text-black-100"
                  dangerouslySetInnerHTML={{ __html: items.desc }}
                >
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tailored_Downside_Protection