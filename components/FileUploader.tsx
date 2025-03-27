"use client";

import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>(""); // Title input state
  const [author, setAuthor] = useState<string>(""); // Author input state
  const [uploadMessage, setUploadMessage] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { user } = useUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (
        ![
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(selectedFile.type)
      ) {
        setUploadMessage("Only PDF or DOC files are allowed.");
        setFile(null);
      } else {
        setFile(selectedFile);
        setUploadMessage(""); // Reset error message for valid files
      }
    }
  };

  const handleUpload = async () => {
    if (!file || !title || !author) {
      setUploadMessage("Please fill in all fields and select a valid file.");
      return;
    }

    try {
      setIsUploading(true); // Start loading state

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = async () => {
        try {
          const base64Data = reader.result;
          const response = await axios.post("/api/storage/upload", {
            data: base64Data, // Base64 file string
            fileType: file.type, // MIME type
            title: title, // Send title to backend
            author: author, // Send author to backend
            clerkId: user?.id, // Clerk ID from authenticated user
          });

          setUploadMessage("File uploaded successfully!");
          redirect('/profile')
        } catch (error) {
          console.error("Error uploading file:", error);
          setUploadMessage("Failed to upload the file. Please try again.");
        } finally {
          setIsUploading(false); // End loading state
        }
      };

      reader.onerror = () => {
        setUploadMessage("Error reading the file. Please try again.");
        setIsUploading(false);
      };
    } catch (error) {
      console.error("Unexpected error:", error);
      setUploadMessage("An unexpected error occurred. Please try again.");
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Upload Your PDF or DOC File</h1>

      {/* Title Input */}
      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
        placeholder="Enter the title of the document"
      />

      {/* Author Input */}
      <label className="block mb-2 font-semibold">Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
        placeholder="Enter the author's name"
      />

      {/* File Input */}
      <label className="block mb-2 font-semibold">Select File</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
        accept=".pdf, .doc, .docx"
      />
      {file && <p className="mb-2">Selected File: {file.name}</p>}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className={`px-4 py-2 rounded-lg ${
          isUploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isUploading ? "Uploading..." : "Upload File"}
      </button>

      {uploadMessage && (
        <p
          className={`mt-4 ${
            uploadMessage.includes("success")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {uploadMessage}
        </p>
      )}
    </div>
  );
}

export default FileUploader;
