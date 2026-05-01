import React from 'react';
import { ExternalLink, Landmark, FileText, MapPin, Search } from 'lucide-react';
import './Resources.css';

const resources = [
  {
    title: "Official Voter Registration",
    link: "https://vote.gov",
    description: "The official U.S. government site to register to vote or check your status.",
    icon: <Landmark size={24} />
  },
  {
    title: "Find Your Polling Place",
    link: "https://www.vote.org/polling-place-locator/",
    description: "Discover where you need to go on Election Day and see your sample ballot.",
    icon: <MapPin size={24} />
  },
  {
    title: "Election Results & Data",
    link: "https://www.fec.gov/",
    description: "Access official campaign finance data and historical election results.",
    icon: <FileText size={24} />
  },
  {
    title: "Ballotpedia",
    link: "https://ballotpedia.org",
    description: "Non-partisan encyclopedia of American politics and elections.",
    icon: <Search size={24} />
  }
];

const Resources = () => {
  return (
    <section className="resources-section">
      <div className="section-header">
        <h2>Official Election Resources</h2>
        <p>Always trust official .gov sources for the most accurate and up-to-date information.</p>
      </div>
      <div className="resources-grid">
        {resources.map((res, index) => (
          <a key={index} href={res.link} target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-icon">{res.icon}</div>
            <div className="resource-content">
              <h3>{res.title} <ExternalLink size={16} /></h3>
              <p>{res.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Resources;
