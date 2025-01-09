import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import jsQR from 'jsqr';
import './scanQR.css';

const QRCodeScanner = () => {
  const [scanResult, setScanResult] = useState('');
  const [imageResult, setImageResult] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setScanResult(result.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setImageSrc(img);
          detectQRCode(img);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const detectQRCode = (img) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    if (code) {
      setImageResult(`QR Code detected: ${code.data}`);
    } else {
      setImageResult('No QR code found in the image');
    }
  };

  return (
    <div className="scanner-container">
      <h1>QR CODE SCANNING USING CAMERA AND THROUGH IMAGE UPLOADING</h1>
      <div className="scanner-card">
        <h2>Scan QR Code with Camera</h2>
        <QrReader
          onResult={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
        />
        {scanResult && <p>Scanned Result: {scanResult}</p>}
      </div>

      <div className="scanner-card">
        <h2>Upload QR Code Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
        />
        {imageResult && <p>{imageResult}</p>}
        {imageSrc && (
          <div>
            <h4>Uploaded Image Preview</h4>
            <img src={imageSrc.src} alt="Uploaded" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeScanner;
