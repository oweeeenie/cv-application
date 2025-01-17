export default function WorkExperience() {
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
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover "
          placeholder="Company Name"
        />
        <input
          type="date"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="From"
        />
        <input
          type="date"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="To"
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="Description"
        />

        <div className="add-delete-container w-3/4 gap-4 flex">
          <button className="bg-custom-hover rounded-lg px-5 py-1 flex ml-auto">
            Add
          </button>
          <button className="bg-custom-hover rounded-lg px-4 py-1">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
