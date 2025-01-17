import Header from './Header';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';
import CvPreview from './CvPreview';

export default function Components() {
  return (
    <>
      <div className="flex justify-center gap-20 pt-8">
        <div className="cv-application w-1/4 border-2 border-gray-500 rounded-md">
          <Header />
          <GeneralInformation />
          <Education />
          <WorkExperience />
        </div>
        <CvPreview />
      </div>
    </>
  );
}
