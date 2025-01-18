import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function CvPreview({
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  occupation,
  description,
  degree,
  university,
  course,
  from,
  to,
  jobTitle,
  companyName,
  workFrom,
  workTo,
  workDescription,
}) {
  return (
    <>
      <div className="preview-main-container flex flex-col w-1/4 border-2 border-gray-500 rounded-md h-[750px]">
        <header className="preview-header p-2 bg-custom-input w-full text-center text-custom-text">
          <h1 className="header-name text-3xl">
            {firstName} {lastName}
          </h1>
          <h3 className="header-occupation text-lg">{occupation}</h3>
        </header>

        <div className="main-sidebar-container flex flex-grow text-custom-input">
          <div className="preview-sidebar bg-custom-hover flex flex-col w-3/7 h-full p-4">
            <h3 className="sidebar-header-contacts border-b-2 border-black pb-2 text-xl font-bold ">
              Contact Information
            </h3>
            <p className="">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 pt-5" />
              {emailAddress}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2 pt-5" />
              {phoneNumber}
            </p>

            <h3 className="sidebar-header-education text-xl border-b-2 border-black pb-2 pt-2 font-bold">
              Education
            </h3>
            <p className="degree text-xl">{degree}</p>
            <p className="university text-md">{university}</p>
            <p className="course text-sm">{course}</p>
            <p className="educationDate">
              {from} - {to}
            </p>
          </div>

          <div className="preview-main p-5 text-custom-text pt-20">
            <h3 className="main-profile text-2xl border-b-2 border-black pb-2 font-bold">
              Profile
            </h3>
            <p>{description}</p>
            <h3 className="main-work-experience text-2xl mt-32 border-b-2 border-black pb-2 font-bold">
              Work Experience
            </h3>
            <p className="jobTitle text-xl">{jobTitle}</p>
            <p className="companyName text-lg">{companyName}</p>
            <p className="workDate text-lg">
              {workFrom} - {workTo}
            </p>
            <p className="work-description text-md">{workDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}
