import React from "react";

const Projected_Risk_Projected_Value = ({
  title,
  description,
  riskMeasures,
  tableTitle,
  tableData,
  tableHeaders,
  projectedValueDescription,
}) => {
  return (
    <section className="t-section riskvalue-section bg-white-100  lg:py[150px] md:py-[80px] sm:py-[50px] py-6 w-full border-b-[1px] border-b-black-200 border-b-solid">
      <div className="container">
        <div className="inner space-y-8">
          <div className="top text-black text-left space-y-8">
            <div className="title flex justify-start items-start">
              <h2 className="text-h2 font-ivy font-semibold relative before:content-[''] before:w-[67px] before:h-[67px] before:rounded-full before:bg-pink before:absolute before:top-[-12px] xsm:before:left-[-16px] before:left-[0] before:opacity-20 before:z-0">
                {title}
              </h2>
            </div>
            <div className="text text-body font-inter font-normal space-y-4">
              {description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          <div className="risk-block space-y-4 font-inter font-normal">
            {riskMeasures.map((measure, index) => (
              <div className="r-block" key={index}>
                <h3 className="text-h5 font-bold pl-6 relative before:content-[''] before:w-[10px] before:h-[10px] before:bg-green before:rounded-full before:absolute before:top-2 before:left-0">
                  {measure.title}
                </h3>
                <p>{measure.description}</p>
              </div>
            ))}
          </div>

          <div className="definition space-y-8 font-inter font-normal">
            <p dangerouslySetInnerHTML={{ __html: tableTitle }}></p>
            <div className="lg:w-[60%] w-[500px]">
              <div className="overflow-x-auto w-full">
              <table className="md:w-full md:max-w-none max-w-[600px] text-left">
                <thead className="bg-[#EdEdEd]">
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th key={index} className="lg:p-4 p-2 font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border border-black-200">
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-black-200 lg:p-4 p-2">
                        {row.projectedRisk}
                      </td>
                      <td className="border border-black-200 lg:p-4 p-2">
                        {row.vixRange}
                      </td>
                      <td className="border border-black-200 lg:p-4 p-2">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
            <p>{projectedValueDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projected_Risk_Projected_Value;
