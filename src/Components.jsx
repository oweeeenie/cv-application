import Header from './Header';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';

export default function Components() {
  return (
    <div className="main-container w-1/4 border-2 border-yellow-500 rounded-lg">
      <Header />
      <GeneralInformation />
      <Education />
      <WorkExperience />
    </div>
  );
}
