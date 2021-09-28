// == Import npm
import React, { useEffect } from 'react';

// == Import
import './team.scss';

// == Import data
import team from 'src/data/team';

// == Import component
import Footer from 'src/components/Footer';

// == Import Images
import olympians from 'src/assets/images/olympians.png';
import linkedin from 'src/assets/images/linkedin.png';

// == Component
const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="team-presentation">
      <img src={olympians} alt="les olympiens" className="team-title" />
      <div className="team">
        {team.map((member) => (
          <div
            className="member"
            key={member.name}
          >
            <div className="member-name">
              {member.name}
            </div>
            <div className="member-role">
              {member.role}
            </div>
            <div className="member-avatar">
              <img src={member.avatar} alt={member.name} />
            </div>
            <div className="member-linkedin">
              <div>
                <img src={linkedin} alt={member.linkedin} />
              </div>
              {member.linkedin}
            </div>
            <div className="member-description">
              <div>
                {member.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

// == Export
export default Team;
