import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import SkillChart from '../components/SkillChart/SkillChart';
import TechnicalSkills from '../components/TechnicalSkills/TechnicalSkills';

function NavSkills() {
  return (
    <div>
        <NavBar />
        <div className="color">
            <TechnicalSkills/>
            <SkillChart />
        </div>

      </div>
  );
}

export default NavSkills;
