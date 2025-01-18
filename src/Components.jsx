import Header from './Header';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';
import CvPreview from './CvPreview';
import { useState } from 'react';

export default function Components() {
  // general information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [description, setDescription] = useState('');
  // education
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [course, setCourse] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  // work experience
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [workFrom, setWorkFrom] = useState('');
  const [workTo, setWorkTo] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  return (
    <>
      <div className="flex justify-center gap-20 pt-8">
        <div className="cv-application w-1/4 border-2 border-gray-500 rounded-md">
          <Header />
          <GeneralInformation
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            occupation={occupation}
            setOccupation={setOccupation}
            description={description}
            setDescription={setDescription}
          />
          <Education
            degree={degree}
            setDegree={setDegree}
            university={university}
            setUniversity={setUniversity}
            course={course}
            setCourse={setCourse}
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
          />
          <WorkExperience
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            companyName={companyName}
            setCompanyName={setCompanyName}
            workFrom={workFrom}
            setWorkFrom={setWorkFrom}
            workTo={workTo}
            setWorkTo={setWorkTo}
            workDescription={workDescription}
            setWorkDescription={setWorkDescription}
          />
        </div>
        <CvPreview
          // general information
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          phoneNumber={phoneNumber}
          occupation={occupation}
          description={description}
          // education
          degree={degree}
          university={university}
          course={course}
          from={from}
          to={to}
          // work experience
          jobTitle={jobTitle}
          companyName={companyName}
          workFrom={workFrom}
          workTo={workTo}
          workDescription={workDescription}
        />
      </div>
    </>
  );
}
