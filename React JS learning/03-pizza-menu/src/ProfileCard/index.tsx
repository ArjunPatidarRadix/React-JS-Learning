import React from "react";

import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Arjun Patidar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Arjun Patidar</h1>
      <p>
        Full stack developer with the experience of Android native and react
        native development and had extra ordinory skills to adopt anything as
        per the requirement of the company{" "}
      </p>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => {
        return (
          <Skill
            key={index}
            skill={skill.skill}
            emoji={skill.level}
            bgColor={skill.color}
          />
        );
      })}
    </div>
  );
}

interface ISkillProps {
  skill: string;
  emoji: string;
  bgColor: string;
}

function Skill({ skill, emoji, bgColor }: ISkillProps) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{skill}</span>
      <span>
        {" "}
        {emoji === "beginner" && "👶"}
        {emoji === "intermediate" && "👍"}
        {emoji === "advanced" && "💪"}
      </span>
    </div>
  );
}
