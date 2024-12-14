'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import { 
  Camera, 
  Flashlight, 
  RefreshCw, 
  Link2, 
  Copy, 
  Check, 
  QrCode 
} from 'lucide-react';

const QRCodeScanner = () => {
  const [scanData, setScanData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [cameraFacing, setCameraFacing] = useState('environment');
  const [error, setError] = useState(null);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Enhanced QR code scanning logic
  const handleScan = useCallback((imageData) => {
    if (!imageData) return;

    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert'
    });

    if (code) {
      // Haptic feedback if supported
      if ('vibrate' in navigator) {
        navigator.vibrate(100);
      }

      setScanData({
        data: code.data,
        location: code.location
      });
    }
  }, []);

  // Continuous scanning method
  const captureQR = useCallback(() => {
    if (webcamRef.current && canvasRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          handleScan(imageData);
        };
      }
    }
  }, [handleScan]);

  // Setup scanning interval
  useEffect(() => {
    const interval = setInterval(captureQR, 300); // Slightly slower to reduce performance load
    return () => clearInterval(interval);
  }, [captureQR]);

  // Copy to clipboard functionality
  const handleCopyToClipboard = () => {
    if (scanData) {
      navigator.clipboard.writeText(scanData.data).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  // Toggle torch/flashlight
  const toggleTorch = async () => {
    try {
      const track = webcamRef.current?.stream?.getVideoTracks()[0];
      if (track && 'torch' in track) {
        await track.applyConstraints({
          advanced: [{ torch: !isTorchOn }]
        });
        setIsTorchOn(!isTorchOn);
      }
    } catch (err) {
      console.error('Could not toggle torch', err);
    }
  };

  // Switch camera facing mode
  const switchCamera = () => {
    setCameraFacing(prev => 
      prev === 'environment' ? 'user' : 'environment'
    );
  };

  // Reset scanner
  const resetScanner = () => {
    setScanData(null);
  };

  return (
    <div className="min-h-screen bg-purple-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Camera Section */}
        <div className="relative w-full aspect-square overflow-hidden">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            width="100%"
            height="100%"
            videoConstraints={{
              facingMode: cameraFacing,
              width: { ideal: 1280 },
              height: { ideal: 720 }
            }}
            onUserMediaError={(err) => setError(err)}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay for scanning area
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-4 border-green-400/70 rounded-xl animate-pulse">
              <div className="absolute inset-0 border-4 border-transparent border-t-green-400/70 animate-spin-slow"></div>
            </div>
          </div> */}

          {/* Hidden canvas for QR processing */}
          <canvas 
            ref={canvasRef} 
            className="hidden" 
          />
        </div>

        {/* Control Section */}
        <div className="p-4 bg-white">
          {scanData ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  QR Code Detected
                </h2>
                {isValidUrl(scanData.data) ? (
                  <a
                    href={scanData.data}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Link2 className="mr-2 w-5 h-5" />
                    {scanData.data}
                  </a>
                ) : (
                  <p className="text-gray-700 break-words">
                    {scanData.data}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between space-x-2">
                <button 
                  onClick={handleCopyToClipboard}
                  className="flex items-center justify-center w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {copied ? (
                    <Check className="w-5 h-5 mr-2" />
                  ) : (
                    <Copy className="w-5 h-5 mr-2" />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button 
                  onClick={resetScanner}
                  className="flex items-center justify-center w-full p-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Scan Again
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <QrCode className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Position QR code within the scanner area</p>
            </div>
          )}
        </div>

        {/* Footer Controls */}
        <div className="bg-gray-100 p-2 flex justify-between">
          <button 
            onClick={toggleTorch}
            className={`p-2 rounded-full ${
              isTorchOn ? 'bg-yellow-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Flashlight className="w-6 h-6" />
          </button>
          <button 
            onClick={switchCamera}
            className="p-2 bg-gray-200 rounded-full"
          >
            <Camera className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to check if the scanned data is a valid URL
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default QRCodeScanner;