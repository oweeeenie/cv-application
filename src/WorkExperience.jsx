export default function WorkExperience({
  jobTitle,
  setJobTitle,
  companyName,
  setCompanyName,
  workFrom,
  setWorkFrom,
  workTo,
  setWorkTo,
  workDescription,
  setWorkDescription,
}) {
  return (
    <>
      <div className="work-container p-6 rounded-lg">
        <h1 className="education-header text-custom-text text-2xl pb-6">
          Work Experience
        </h1>
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover "
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="From"
          value={workFrom}
          onChange={(e) => setWorkFrom(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="To"
          value={workTo}
          onChange={(e) => setWorkTo(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="Description"
          value={workDescription}
          onChange={(e) => setWorkDescription(e.target.value)}
        />
      </div>
    </>
  );
}
