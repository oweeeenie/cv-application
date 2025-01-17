function GeneralInformation() {
  return (
    <>
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
          placeholder="Current Occupation"
        />
        <input
          type="text"
          className="input-class flex mb-4 px-4 py-1 w-3/4 text-xl text-left text-custom-input bg-transparent border-gray-500 border-2 rounded-lg focus:outline-custom-hover"
          placeholder="Description"
        />
      </div>
    </>
  );
}

export default GeneralInformation;
