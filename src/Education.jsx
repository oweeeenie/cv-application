export default function Education({
  degree,
  setDegree,
  university,
  setUniversity,
  course,
  setCourse,
  from,
  setFrom,
  to,
  setTo,
}) {
  return (
    <>
      <div className="education-container p-6 rounded-lg">
        <h1 className="education-header text-custom-text text-2xl pb-6">
          Education
        </h1>
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="University"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
    </>
  );
}
