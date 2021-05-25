import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useParams } from 'react-router-dom';

export default function EditStudent({
  submission, oldName, oldEmail, oldPic,
}) {
  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [pic, setPic] = useState(oldPic);
  const [files, setFile] = useState([]);
  const { id } = useParams();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
    },
  });

  console.log('files', files);
  console.log('name', oldName);

  function sendEditedStudent(e) {
    e.preventDefault();
    Axios.patch(`/student/${id}`, {
      name, email, pic,
    });
    submission(name, email, pic);
  }

  return (
    <div className="editStudentPage fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-sm">
          <div className="bg-gray-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={sendEditedStudent}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <h1>Edit Student Page</h1>
                    <br />
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div {...getRootProps()} className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" {...getInputProps()} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-red-500">
                          { files.length === 0 ? 'no file uploaded' : files[0].path }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div onChange={(e) => { setEmail(e.target.value); }}>
                      Inputs name go here
                    </div>
                    <div onChange={(e) => { setName(e.target.value); }}>
                      Input email go here
                    </div>
                  </div>
                </div>
                <div onChange={(e) => { setPic(e.target.value); }} />
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditStudent.propTypes = {
  submission: PropTypes.func,
  oldName: PropTypes.string,
  oldEmail: PropTypes.string,
  oldPic: PropTypes.string,
};

EditStudent.defaultProps = {
  submission: null,
  oldName: '',
  oldEmail: '',
  oldPic: '',
};
