import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import Teacher1 from "../../assets/tacher1.png";
import Teacher2 from "../../assets/teacher2.png";
const Professor = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <div className="my-40 max-w-7xl m-auto px-3">
      <div className=" grid lg:grid-cols-3 grid-cols-1  gap-5">
        <div
          className={` col-span-2 px-2 py-4 rounded-md ${
            theme == "light"
              ? "border bg-[#166364]  text-white"
              : "border border-[#414343] bg-[#242526] text-[#e4e6eb]"
          }`}
        >
          <h1 className=" font-medium text-xl mt-3 text-center">
            প্রফেসর আলাউদ্দিন আল আজাদ
          </h1>
          <p className="mt-3 text-center">উপাধ্যক্ষ</p>
          <p
            className={`mt-3 leading-loose  px-4 flex justify-center ${
              theme == "light" ? "text-[#e4e6eb] " : "text-[#e4e6eb] "
            }`}
          >
            বিশ্ব আজ দ্রুত পরিবর্তনের ধারায় ধাবমান। এই পরিবর্তনকে মানিয়ে নিতে
            আমাদেরকেও সামনের দিকে এগিয়ে যেতে হবে। বিশ্বায়নের চ্যালেঞ্জকে মাথায়
            নিয়ে বর্তমান সরকারের 'রূপকল্প ২০২১' বাস্তবায়নের পর সবাইকে সমান তালে
            এগিয়ে যেতে হবে পরবর্তী লক্ষ্যে। ২০৪১ সালের মধ্যে উন্নত রাষ্ট্র গঠনের
            যে সোপানে আমাদের যাত্রা শুরু হয়েছে তার সফল পরিসমাপ্তিতে আজকের ছাত্র
            সমাজকেই অগ্রণী ভূমিকা পালন করতে হবে। সেই প্রচেষ্টায় চট্টগ্রাম সরকারী
            কমার্স কলেজ একটি উজ্জ্বল নাম। বর্তমানে এই প্রতিষ্ঠানের নতুন উদ্যোগ
            'অনলাইনকার্যক্রম' সেই প্রচেষ্টাকে আরও বহুগুণ বাড়িয়ে দিয়েছে। সরকার
            ঘোষিত ডিজিটাল বাংলাদেশ বিনির্মাণে প্রতিষ্ঠানের পথ চলা হোক দীপ্তিময়।
            এ প্রতিষ্ঠানের শিক্ষার্থীরা নিজ নিজ ক্ষেত্রে একজন সফল মানুষ হিসেবে
            প্রতিষ্ঠিত হবে এ আমার প্রত্যাশা।
          </p>
          <div className="mt-5 text-center">
            <button
              className={` font-semibold text-white px-6 rounded-lg py-2 ${
                theme == "light"
                  ? "bg-[#23395b] border-green-900 text-white"
                  : "bg-[#414343]"
              }`}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className={`w-[370px]  h-full  p-2 rounded ${
              theme == "light"
                ? "border"
                : "border border-[#414343] bg-[#242526] text-[#e4e6eb]"
            }`}
          >
            <img src={Teacher1} alt="" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-5 mt-20">
        <div className="flex justify-start">
          <div
            className={`w-[370px]  h-full  p-2 rounded ${
              theme == "light"
                ? "border "
                : "border border-[#414343] bg-[#242526] text-[#e4e6eb]"
            }`}
          >
            <img src={Teacher2} alt="" />
          </div>
        </div>
        <div
          className={` col-span-2 px-2 py-4 rounded-md ${
            theme == "light"
              ? "border bg-[#166364] text-white"
              : "border border-[#414343] bg-[#242526] text-[#e4e6eb]"
          }`}
        >
          <h1 className=" font-medium text-xl mt-3 text-center">
            প্রফেসর আলাউদ্দিন আল আজাদ
          </h1>
          <p className="mt-3 text-center">উপাধ্যক্ষ</p>
          <p
            className={`mt-3 leading-loose  px-4 flex justify-center ${
              theme == "light" ? "text-[#e4e6eb]" : "text-[#e4e6eb]"
            }`}
          >
            বিশ্ব আজ দ্রুত পরিবর্তনের ধারায় ধাবমান। এই পরিবর্তনকে মানিয়ে নিতে
            আমাদেরকেও সামনের দিকে এগিয়ে যেতে হবে। বিশ্বায়নের চ্যালেঞ্জকে মাথায়
            নিয়ে বর্তমান সরকারের 'রূপকল্প ২০২১' বাস্তবায়নের পর সবাইকে সমান তালে
            এগিয়ে যেতে হবে পরবর্তী লক্ষ্যে। ২০৪১ সালের মধ্যে উন্নত রাষ্ট্র গঠনের
            যে সোপানে আমাদের যাত্রা শুরু হয়েছে তার সফল পরিসমাপ্তিতে আজকের ছাত্র
            সমাজকেই অগ্রণী ভূমিকা পালন করতে হবে। সেই প্রচেষ্টায় চট্টগ্রাম সরকারী
            কমার্স কলেজ একটি উজ্জ্বল নাম। বর্তমানে এই প্রতিষ্ঠানের নতুন উদ্যোগ
            'অনলাইনকার্যক্রম' সেই প্রচেষ্টাকে আরও বহুগুণ বাড়িয়ে দিয়েছে। সরকার
            ঘোষিত ডিজিটাল বাংলাদেশ বিনির্মাণে প্রতিষ্ঠানের পথ চলা হোক দীপ্তিময়।
            এ প্রতিষ্ঠানের শিক্ষার্থীরা নিজ নিজ ক্ষেত্রে একজন সফল মানুষ হিসেবে
            প্রতিষ্ঠিত হবে এ আমার প্রত্যাশা।
          </p>
          <div className="mt-5 text-center">
            <button
              className={` font-semibold text-white px-6 rounded-lg py-2 ${
                theme == "light"
                  ? "bg-[#23395b] border-green-900 text-white"
                  : "bg-[#414343]"
              }`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professor;
