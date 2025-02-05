'use client'
import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const Timeline = () => {
    const [value, setValue] = useState(0);

    const events = ["2022-01-01", "2023-01-01", "2024-01-01"];

    return (
        <div className="bg-darkNavy text-gray-200 pt-8 px-6 sm:pt-24">
            <div className="max-w-4xl mx-auto flex justify-center items-center flex-col text-center">
                <h1 className="font-bold text-center mb-6 text-5xl">Paragon Roadmap</h1>
                <p className="text-2xl pb-10">Building Tomorrow:  A Blueprint for Paragon's Collective Futue</p>

                <>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2024"
                            contentStyle={{ background: "linear-gradient(to right, #6b21a8, #312e81)", color: "#ffffff" }}
                            contentArrowStyle={{ borderRight: "7px solid #6b21a8" }}
                            iconStyle={{ background: "blue", color: "#fff" }}
                            icon={<FaBriefcase />}
                        >

                            <h3 className="text-xl font-bold">Q1 2024</h3>
                            <h3 className="text-xl pt-2">Exclusive Pre-sale for Early Supporters</h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2024"
                            contentStyle={{ background: "linear-gradient(to right, #6b21a8, #312e81)", color: "#ffffff" }}
                            contentArrowStyle={{ borderRight: "7px solid #6b21a8" }}
                            iconStyle={{ background: "purple", color: "#fff" }}
                            icon={<FaBriefcase />}
                        >
                            <h3 className="text-xl font-bold">Q2 2024</h3>
                            <h3 className="text-xl p-2">Token Audit and Token Launch</h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2024"
                            contentStyle={{ background: "linear-gradient(to right, #6b21a8, #312e81)", color: "#ffffff" }}
                            contentArrowStyle={{ borderRight: "7px solid #6b21a8" }}
                            iconStyle={{ background: "green", color: "#fff" }}
                            icon={<FaBriefcase />}
                        >
                            <h3 className="text-xl font-bold">Q3 2024</h3>
                            <h3 className="text-xl p-2">Debut of Paragon Privacy Payment App v1</h3>
                        </VerticalTimelineElement>

                        
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2024"
                            contentStyle={{ background: "linear-gradient(to right, #6b21a8, #312e81)", color: "#ffffff" }}
                            contentArrowStyle={{ borderRight: "7px solid #6b21a8" }}
                            iconStyle={{ background: "blue", color: "#fff" }}
                            icon={<FaBriefcase />}
                        >
                            <h3 className="text-xl font-bold">Q4 2024</h3>
                            <h3 className="text-xl p-2">Evolution with Paragon Privacy Payment App v2 and Intriduction of GBP Stable Coin (poundtoken.io)</h3>
                      
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2025"
                            contentStyle={{ background: "linear-gradient(to right, #6b21a8, #312e81)", color: "#ffffff" }}
                            contentArrowStyle={{ borderRight: "7px solid #6b21a8" }}
                            iconStyle={{ background: "purple", color: "#fff" }}
                            icon={<FaBriefcase />}
                        >
                            <h3 className="text-xl font-bold">Q5 2024</h3>
                            <h3 className="text-xl p-2">Pioneering a Private Blockchain for Paragon</h3>
                        </VerticalTimelineElement>
                        
                    </VerticalTimeline>
                </>
            </div>
        </div>
    )
}

export default Timeline;