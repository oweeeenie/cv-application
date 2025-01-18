import Header from './Header';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import WorkExperience from './WorkExperience';
import CvPreview from './CvPreview';
import { useState } from 'react';

export default function Components() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [description, setDescription] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [course, setCourse] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
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
          <WorkExperience />
        </div>
        <CvPreview
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          phoneNumber={phoneNumber}
          occupation={occupation}
          description={description}
          degree={degree}
          university={university}
          course={course}
          from={from}
          to={to}
        />
      </div>
    </>
  );
}
