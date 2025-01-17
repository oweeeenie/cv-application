import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function CvPreview() {
  return (
    <>
      <div className="preview-main-container flex flex-col w-1/4 border-2 border-gray-500 rounded-md h-[750px]">
        <header className="preview-header  p-2 bg-custom-input w-full text-center text-custom-text">
          <h1 className="header-name text-3xl">Preview Name</h1>
          <h3 className="header-occupation text-lg">Preview Occupation</h3>
        </header>

        <div className="main-sidebar-container flex flex-grow text-custom-input">
          <div className="preview-sidebar bg-custom-hover flex flex-col w-3/7 h-full p-4">
            <h3 className="sidebar-header-contacts border-b-2 border-black pb-2 text-xl">
              Contact Information
            </h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 pt-5" />
              randomemail@gay.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2 pt-5" />
              111-222-3101
            </p>

            <h3 className="sidebar-header-education text-xl border-b-2 border-black pb-2 pt-2">
              Education
            </h3>
          </div>

          <div className="preview-main p-5 text-custom-text pt-20">
            <h3 className="main-profile text-2xl border-b-2 border-black pb-2">
              Profile
            </h3>
            <h3 className="main-work-experience text-2xl mt-32 border-b-2 border-black pb-2">
              Work Experience
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
