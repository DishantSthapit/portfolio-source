import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import SkillChart from '../components/SkillChart/SkillChart';
import TechnicalSkills from '../components/TechnicalSkills/TechnicalSkills';
import Services from '../components/Services/Services';

function NavSkills() {
  return (
    <div>
        <NavBar />
        <div className="color">
            <SkillChart />
            <TechnicalSkills/>
            <Services />
        </div>

      </div>
  );
}

export default NavSkills;
