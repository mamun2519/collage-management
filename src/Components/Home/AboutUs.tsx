import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import AboutUsPic from "../../assets/About us page-cuate.svg";
const AboutUs = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <div className="my-40 max-w-7xl m-auto px-3 ">
      <div className="w-max mx-auto ">
        <div
          className={`border-b-[3px] rounded-full ${
            theme == "light"
              ? "border-[#166364]  "
              : "border-[#e4e6eb] text-[#e4e6eb]"
          }`}
        >
          <h1 className="text-4xl pb-2 text-center mt-10 px-12  font-medium uppercase">
            ABOUT US
          </h1>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5  mt-20">
        <div className=" flex  items-center">
          <img className="w-full h-full" src={AboutUsPic} alt="" />
        </div>
        <div className="w-full px-4 ">
          <div
            tabIndex={0}
            className={`collapse collapse-open border  rounded-box ${
              theme == "light"
                ? "bg-[#166364]  border-base-300  text-white"
                : "bg-[#242526] border-[#414343] text-[#e4e6eb]"
            }`}
          >
            <div className="collapse-title text-xl font-medium">
              Our Collage Details
            </div>
            <div className="collapse-content">
              <p>
                ১৯৪৭ সালে দেশ বিভাগের পর কলকাতার ‘দি কমার্শিয়াল ইনস্টিটিউট’-এর
                এক চতুর্থাংশ হিস্যা পাকিস্তানে স্থানান্তরিত হলে সেটির দায়িত্ব
                প্রফেসর আবদুস সামাদ-কে দেওয়া হয়। তিনি অনেক চিন্তা-ভাবনা করে
                অবশেষে নবগঠিত পূর্ব পাকিস্তানের বাণিজ্য নগরী চট্টগ্রামকে বেছে
                নেন। কমার্শিয়াল ইনস্টিটিউটের ভাগে পাওয়া টাইপ রাইটার, বই, ফাইল
                এবং অন্যান্য যন্ত্রপাতি নিয়ে তিনি চট্টগ্রামের উদ্দেশ্যে রওনা
                হন। চট্টগ্রামে এসে প্রফেসর সামাদ কোথায় এটি স্থাপন করা যায় তাই
                নিয়ে পড়লেন দোটানায়। কারণ, মনমতো কোনো জায়গা পাওয়া যাচ্ছিলো
                না। প্রফেসর আবদুস সামাদের পূর্ব পরিচিত ও তৎকালীন চট্টগ্রাম
                কলেজ-এর অধ্যক্ষ আবু হেনার সাথে এই বিষয়ে আলাপ করতে গেলে তিনি
                এটিকে তাঁর কলেজের একটি বিভাগ করার প্রস্তাব দেন।
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className={`collapse collapse-plus border  rounded-box ${
              theme == "light"
                ? "bg-base-100 border-base-300 "
                : "border-[#414343]  bg-[#242526] text-[#e4e6eb]"
            }`}
          >
            <div className="collapse-title text-xl font-medium">
              Our Total Teacher
            </div>
            <div className="collapse-content">
              <p>
                ১৯৪৭ সালে দেশ বিভাগের পর কলকাতার ‘দি কমার্শিয়াল ইনস্টিটিউট’-এর
                এক চতুর্থাংশ হিস্যা পাকিস্তানে স্থানান্তরিত হলে সেটির দায়িত্ব
                প্রফেসর আবদুস সামাদ-কে দেওয়া হয়। তিনি অনেক চিন্তা-ভাবনা করে
                অবশেষে নবগঠিত পূর্ব পাকিস্তানের বাণিজ্য নগরী চট্টগ্রামকে বেছে
                নেন। কমার্শিয়াল ইনস্টিটিউটের ভাগে পাওয়া টাইপ রাইটার, বই, ফাইল
                এবং অন্যান্য যন্ত্রপাতি নিয়ে তিনি চট্টগ্রামের উদ্দেশ্যে রওনা
                হন। চট্টগ্রামে এসে প্রফেসর সামাদ কোথায় এটি স্থাপন করা যায় তাই
                নিয়ে পড়লেন দোটানায়। কারণ, মনমতো কোনো জায়গা পাওয়া যাচ্ছিলো
                না। প্রফেসর আবদুস সামাদের পূর্ব পরিচিত ও তৎকালীন চট্টগ্রাম
                কলেজ-এর অধ্যক্ষ আবু হেনার সাথে এই বিষয়ে আলাপ করতে গেলে তিনি
                এটিকে তাঁর কলেজের একটি বিভাগ করার প্রস্তাব দেন।
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className={`collapse collapse-plus border  rounded-box ${
              theme == "light"
                ? "bg-base-100 border-base-300 "
                : "border-[#414343] bg-[#242526] text-[#e4e6eb]"
            }`}
          >
            <div className="collapse-title text-xl font-medium">
              Section, Notice Or event Details
            </div>
            <div className="collapse-content">
              <p>
                ১৯৪৭ সালে দেশ বিভাগের পর কলকাতার ‘দি কমার্শিয়াল ইনস্টিটিউট’-এর
                এক চতুর্থাংশ হিস্যা পাকিস্তানে স্থানান্তরিত হলে সেটির দায়িত্ব
                প্রফেসর আবদুস সামাদ-কে দেওয়া হয়। তিনি অনেক চিন্তা-ভাবনা করে
                অবশেষে নবগঠিত পূর্ব পাকিস্তানের বাণিজ্য নগরী চট্টগ্রামকে বেছে
                নেন। কমার্শিয়াল ইনস্টিটিউটের ভাগে পাওয়া টাইপ রাইটার, বই, ফাইল
                এবং অন্যান্য যন্ত্রপাতি নিয়ে তিনি চট্টগ্রামের উদ্দেশ্যে রওনা
                হন। চট্টগ্রামে এসে প্রফেসর সামাদ কোথায় এটি স্থাপন করা যায় তাই
                নিয়ে পড়লেন দোটানায়। কারণ, মনমতো কোনো জায়গা পাওয়া যাচ্ছিলো
                না। প্রফেসর আবদুস সামাদের পূর্ব পরিচিত ও তৎকালীন চট্টগ্রাম
                কলেজ-এর অধ্যক্ষ আবু হেনার সাথে এই বিষয়ে আলাপ করতে গেলে তিনি
                এটিকে তাঁর কলেজের একটি বিভাগ করার প্রস্তাব দেন।
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className={`collapse collapse-plus border  rounded-box ${
              theme == "light"
                ? "bg-base-100 border-base-300"
                : "bg-[#242526] text-[#e4e6eb] border-[#414343]"
            }`}
          >
            <div className="collapse-title text-xl font-medium">
              Collage Information
            </div>
            <div className="collapse-content">
              <p>
                ১৯৪৭ সালে দেশ বিভাগের পর কলকাতার ‘দি কমার্শিয়াল ইনস্টিটিউট’-এর
                এক চতুর্থাংশ হিস্যা পাকিস্তানে স্থানান্তরিত হলে সেটির দায়িত্ব
                প্রফেসর আবদুস সামাদ-কে দেওয়া হয়। তিনি অনেক চিন্তা-ভাবনা করে
                অবশেষে নবগঠিত পূর্ব পাকিস্তানের বাণিজ্য নগরী চট্টগ্রামকে বেছে
                নেন। কমার্শিয়াল ইনস্টিটিউটের ভাগে পাওয়া টাইপ রাইটার, বই, ফাইল
                এবং অন্যান্য যন্ত্রপাতি নিয়ে তিনি চট্টগ্রামের উদ্দেশ্যে রওনা
                হন। চট্টগ্রামে এসে প্রফেসর সামাদ কোথায় এটি স্থাপন করা যায় তাই
                নিয়ে পড়লেন দোটানায়। কারণ, মনমতো কোনো জায়গা পাওয়া যাচ্ছিলো
                না। প্রফেসর আবদুস সামাদের পূর্ব পরিচিত ও তৎকালীন চট্টগ্রাম
                কলেজ-এর অধ্যক্ষ আবু হেনার সাথে এই বিষয়ে আলাপ করতে গেলে তিনি
                এটিকে তাঁর কলেজের একটি বিভাগ করার প্রস্তাব দেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
