import React, { useState,useEffect } from 'react';
import { GetLinks } from '../service/api';
import NavBar from './NavBar';
import QRCode from 'qrcode.react';

function Links() {
  const [Links, setLinks] = useState([]);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const getLinks = async () => {
    const uid = localStorage.getItem('uid');
    const data = { data: uid };
    try {
      const response = await GetLinks(data);
      setLinks(response.links);
      console.log(response.links);
    } catch (error) {
      console.log('Error while calling the API', error.message);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

const copyTextToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000); 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
    <NavBar />
    <div className="text-white m-8 flex flex-col items-center flex-grow">
      <h2 className="text-3xl font-bold mb-8">Your Links</h2>
      
      <div className="grid gap-8 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
        {Links.map((file, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 shadow-lg rounded-lg p-6 mb-4 transition-transform transform hover:scale-105"
          >
            <div className="text-xl font-medium text-white mb-2 truncate">{file.name}</div>
            <div className="flex items-center mb-4">
              <span className="text-md font-medium text-white break-all">
                http://localhost:8080/api/v1/file/{file._id}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => copyTextToClipboard(`http://localhost:8080/api/v1/file/${file._id}`, index)}
                className={`px-4 py-2 rounded-full transition duration-300 shadow-lg text-xs ${
                  copiedIndex === index
                    ? 'bg-green-600 text-white animate-tick'
                    : 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600'
                }`}
              >
                {copiedIndex === index ? '✓ Copied' : 'Copy'}
              </button>
              <div className="p-2 bg-white rounded-lg">
                <QRCode value={`http://localhost:8080/api/v1/file/${file._id}`} size={128} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Links;
