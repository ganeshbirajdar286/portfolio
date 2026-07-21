import React from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import HackathonExperience from "../components/HackathonExperience";

export default function Experience() {
  return (
    <div className="bg-black pt-16">
      <HackathonExperience />
      <ExperienceTimeline />
    </div>
  );
}
