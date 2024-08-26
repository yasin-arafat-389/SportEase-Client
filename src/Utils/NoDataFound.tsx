/* eslint-disable @typescript-eslint/no-explicit-any */
import noDataIcon from "../Assets/no-data.png";

const NoDataFound = ({ message }: any) => {
  return (
    <div>
      <div className="bg-gray-400 w-full py-7 rounded-lg flex flex-col justify-center items-center">
        <img className="w-[150px]" src={noDataIcon} alt="" />

        <h1 className="mt-7 text-3xl text-gray-800 font-bold italic">
          {message}
        </h1>
      </div>
    </div>
  );
};

export default NoDataFound;
