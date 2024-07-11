import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFile,tuploadFile,GetLinks } from './service/api';
import NavBar from "./Components/NavBar";
import QRCode from 'qrcode.react';
const Chatbot = () => {
  const navigate = useNavigate();
  const [sendOnce, setSendOnce] = useState(false);
  const [Links, setLinks] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);
  const expiryDate = localStorage.getItem("expiryDate");
  if (expiryDate === "null") {
    navigate("/signup");
  }
 
useEffect(()=>{
  let a=localStorage.getItem('persist:root')
  
},[])

 


  // file sharing
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  
useEffect(() => {
  const getImage = async () => {
    if (file) {
      const data = new FormData();
      let uid = localStorage.getItem('uid');
      data.append("name", file.name);
      data.append("file", file);
      data.append("uid", uid);

      // Choose upload function based on sendOnce state
      const response = sendOnce ? await tuploadFile(data) : await uploadFile(data);
      console.log(response);
      setResult(response.path);
    }
  };

  getImage();
}, [file, sendOnce]);


  const onUploadClick = () => {
    fileInputRef.current.click();
  }


  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result).then(() => {
        alert('Link copied to clipboard!');
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };
  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);
        
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        
      });
  };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
    <NavBar />
    <div className="flex items-center justify-center flex-grow">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-blue-300">
        {url && (
          <img
            src={url}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
            alt="uploaded file"
          />
        )}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold text-white">Simple File Sharing!</h1>
          <p className="text-white mt-2">Upload and share the download link.</p>
          <div className="text-white m-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500"
                checked={sendOnce}
                onChange={(e) => setSendOnce(e.target.checked)}
              />
              <span className="text-lg text-blue-300">Send Once</span>
            </label>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300 shadow-lg"
            onClick={onUploadClick}
          >
            Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {result && (
            <>
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-200 hover:text-blue-300 transition duration-300"
              >
                {result}
              </a>
              <div className="py-4 bg-white rounded-lg flex justify-center">
                <QRCode value={result} size={128} />
              </div>
              <button
                className="mt-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:from-green-600 hover:to-teal-600 transition duration-300 shadow-lg"
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>

  );
};

export default Chatbot;
