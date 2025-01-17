function GeneralInformation() {
  return (
    <>
      <div className="main-container w-1/4 border-2 border-yellow-500 rounded-lg">
        <div className="general-information-container p-6 rounded-lg">
          <h1 className="general-information-header text-custom-text text-2xl pb-6">
            General Information
          </h1>
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="First Name"
          />
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="Last Name"
          />
          <input
            type="email"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="Email Address"
          />
          <input
            type="tel"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover "
            placeholder="Address"
          />
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="Description"
          />
        </div>

        <div className="education-container p-6 rounded-lg">
          <h1 className="education-header text-custom-text text-2xl pb-6">
            Education
          </h1>
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="Degree"
          />
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="University"
          />
          <input
            type="text"
            className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
            placeholder="Course"
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

          <div className="add-delete-container w-3/4 gap-4 flex">
            <button className="bg-custom-hover rounded-lg px-5 py-1 flex ml-auto">
              Add
            </button>
            <button className="bg-custom-hover rounded-lg px-4 py-1">
              Delete
            </button>
          </div>
        </div>

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
      </div>
    </>
  );
}

export default GeneralInformation;
