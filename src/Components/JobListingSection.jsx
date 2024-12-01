// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Styles/joblistingsection.css";

const JobListing = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("featured");

  const jobs = [
    {
      id: 1,
      category: "featured", 
      title: "Software Engineer",
      location: "New York, USA",
      type: "Full Time",
      salary: "$123 - $456",
      date: "01 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjpf7b0774e0059f666134dd694efa5ff33.png",
    },
{
      id: 2,
      category: "full-time",
      title: "Software Engineer",
      location: "New York, USA",
      type: "Full Time",
      salary: "$123 - $456",
      date: "01 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp25ebdae31c008057885409ded924899e.png",
    },
{
      id: 3,
      category: "part-time",
      title: "Software Engineer",
      location: "New York, USA",
      type: "Part Time",
      salary: "$123 - $456",
      date: "01 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjpceefe3e1b09c9d18fda53c89a7d2e80f.png",
    },
    {
      id: 4,
      category: "full-time",
      title: "Marketing Manager",
      location: "New York, USA",
      type: "Full Time",
      salary: "$123 - $456",
      date: "01 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjpe1254a13feafb99e0f2dd500200fe78f.png",
    },
{
      id: 5,
      category: "featured",
      title: "Marketing Manager",
      location: "New York, USA",
      type: "Full Time",
      salary: "$123 - $456",
      date: "01 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp582456b5dd2cfed7a0e77487efd9cd9e.png",
    },
{
      id: 6,
      category: "part-time",
      title: "Marketing Manager",
      location: "New York, USA",
      type: "Part Time",
      salary: "$123 - $456",
      date: "01 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp1c66a37991b93e465b291144e4c78f14.png",
    },
    {
      id: 7,
      category: "part-time",
      title: "Product Designer",
      location: "New York, USA",
      type: "Part Time",
      salary: "$100 - $300",
      date: "15 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjpc7e830e45a5dae4e68027d709d343bcd.png",
    },
{
      id: 8,
      category: "full-time",
      title: "Product Designer",
      location: "New York, USA",
      type: "Full Time",
      salary: "$100 - $300",
      date: "15 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp021e45fd4363f4287e356bfe313ba8f6.png",
    },
{
      id: 9,
      category: "featured",
      title: "Product Designer",
      location: "New York, USA",
      type: "Full Time",
      salary: "$100 - $300",
      date: "15 Jan, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp22d4cd8bff9af3ba83b79ed11a26d16b.png",
    },
    {
      id: 10,
      category: "full-time",
      title: "Creative Director",
      location: "New York, USA",
      type: "Full Time",
      salary: "$200 - $500",
      date: "10 Feb, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp5085b17be8f08f70e306a16955be5f1b.png",
    },
{
      id: 11,
      category: "featured",
      title: "Creative Director",
      location: "New York, USA",
      type: "Full Time",
      salary: "$200 - $500",
      date: "10 Feb, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjpa5cc377987cd30678041596817e73d1e.png",
    },
{
      id: 12,
      category: "part-time",
      title: "Creative Director",
      location: "New York, USA",
      type: "Part Time",
      salary: "$200 - $500",
      date: "10 Feb, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp8847476f0b1fb7bea85eb9259c63905b.png",
    },
{
      id: 13,
      category: "part-time",
      title: "Wordpress Developer",
      location: "New York, USA",
      type: "Part Time",
      salary: "$200 - $500",
      date: "10 Feb, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjpefabec7e480b66823798047af5cfd7ed.png",
    },
{
      id: 14,
      category: "full-time",
      title: "Wordpress Developer",
      location: "New York, USA",
      type: "Full Time",
      salary: "$200 - $500",
      date: "10 Feb, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp9c3868b97347f985be5f89099fa6fe00.png",
    },
{
      id: 15,
      category: "featured",
      title: "Wordpress Developer",
      location: "New York, USA",
      type: "Full Time",
      salary: "$200 - $500",
      date: "10 Feb, 2045",
      image: "https://www.jobringer.com/images/content/company-logo/hjp4c896fc50ac8240b99f762aa46c44908.png",
    },
  ];

  return (
    <section className="job-listing">
      <h2>Job Listing</h2>
      {/* Tabs */}
      <div className="job-tabs">
        <button
          className={`tab-btn ${activeTab === "featured" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("featured")}
        >
          Featured
        </button>
        <button
          className={`tab-btn ${activeTab === "full-time" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("full-time")}
        >
          Full Time
        </button>
        <button
          className={`tab-btn ${activeTab === "part-time" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("part-time")}
        >
          Part Time
        </button>
      </div>

      {/* Job Cards */}
      <div className="job-cards">
        {jobs
          .filter((job) => job.category === activeTab)
          .map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-info">
                <img src={job.image} alt={job.title} />
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <p>
                    {job.location} · {job.type} · {job.salary}
                  </p>
                </div>
              </div>
              <div className="job-actions">
                <span className="date-line">Date Line: {job.date}</span>
                <button className="btn apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
      </div>
      <button className="btn browse-more-btn">Browse More Jobs</button>
    </section>
  );
};

export default JobListing;
