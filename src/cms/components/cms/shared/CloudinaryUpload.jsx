import React, { useState, useRef } from 'react';

import { API_BASE_URL } from "@/cms/utils/config";

export default function CloudinaryUpload({ imageUrl, publicId, onChange, label = "Image", className = "" }) {
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`${API_BASE_URL}/api/upload`, {
        method: 'POST',
        body: formData
      });
      
      const data = await res.json();
      if (data.success) {
        // Safely delete the old image only after the new one is successfully uploaded
        if (publicId) {
          await fetch(`${API_BASE_URL}/api/upload/delete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ publicId })
          }).catch(err => console.error("Failed to delete old image", err));
        }

        onChange(data.data.imageUrl, data.data.publicId);
        setSuccess('Image uploaded successfully!');
        setTimeout(() => setSuccess(null), 3000);
      } else {
        throw new Error(data.message || 'Upload failed');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDelete = async () => {
    if (!publicId) {
      // If there's no publicId (e.g. it was a static image), just clear it locally
      onChange("", "");
      return;
    }

    setIsDeleting(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/upload/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicId })
      });
      
      const data = await res.json();
      if (data.success || data.message === "Image deleted successfully") {
        onChange("", "");
        setSuccess('Image deleted successfully!');
        setTimeout(() => setSuccess(null), 3000);
      } else {
        throw new Error(data.message || 'Delete failed');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to delete image');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{label}</label>}
      
      <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
        {imageUrl ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center relative">
              <img src={imageUrl.startsWith('/') ? `http://localhost:3000${imageUrl}` : imageUrl} alt="Uploaded preview" className="w-full h-full object-cover" />
              {(isUploading || isDeleting) && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#f1af3c] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            
            <div className="flex gap-2 w-full justify-center">
              <button 
                type="button" 
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading || isDeleting}
                className="px-3 py-1.5 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                Replace
              </button>
              <button 
                type="button" 
                onClick={handleDelete}
                disabled={isUploading || isDeleting}
                className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 text-xs font-semibold rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div 
            onClick={() => !isUploading && fileInputRef.current?.click()}
            className={`w-full h-24 border-2 border-dashed ${isUploading ? 'border-slate-300 bg-slate-100' : 'border-slate-300 hover:border-[#f1af3c] hover:bg-amber-50 cursor-pointer'} rounded-xl flex flex-col items-center justify-center transition-colors`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 h-5 border-2 border-[#f1af3c] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Uploading...</span>
              </div>
            ) : (
              <>
                <svg className="w-6 h-6 text-slate-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Click to Upload</span>
              </>
            )}
          </div>
        )}
        
        {error && <p className="text-xs text-red-500 mt-2 font-medium">{error}</p>}
        {success && <p className="text-xs text-green-600 mt-2 font-medium">{success}</p>}
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
          className="hidden" 
        />
      </div>
    </div>
  );
}
