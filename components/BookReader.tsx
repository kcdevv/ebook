"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Worker, Viewer } from "@react-pdf-viewer/core"; // PDF viewer
import "@react-pdf-viewer/core/lib/styles/index.css"; // PDF Viewer Styles
import mammoth from "mammoth"; // DOCX reader

function BookReader({ id }: { id: string }) {
  const [book, setBook] = useState<any>(null);
  const [docContent, setDocContent] = useState<string>(""); // For DOCX content
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/book/${id}`);
        setBook(response.data.book);

        // If it's a DOCX file, fetch and convert to HTML
        if (response.data.book.fileUrl.endsWith(".docx")) {
          const fileResponse = await axios.get(response.data.book.fileUrl, {
            responseType: "arraybuffer",
          });

          // Convert buffer to Uint8Array for mammoth
          const buffer = new Uint8Array(fileResponse.data);
          const { value } = await mammoth.extractRawText({ arrayBuffer: buffer.buffer }); // Correct buffer handling
          setDocContent(value);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
        setError("Failed to load book details.");
      }
    };

    fetchBook();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="mb-2">Author: {book.author}</p>
      <p className="mb-4">Description: {book.description}</p>

      {/* Automatically render PDF or DOCX file */}
      {book.fileUrl.endsWith(".pdf") && (
        <div className="border rounded-lg overflow-hidden">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
            <Viewer fileUrl={book.fileUrl} />
          </Worker>
        </div>
      )}

      {book.fileUrl.endsWith(".docx") && (
        <div className="mt-4 p-4 bg-white border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">DOCX Content:</h2>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: docContent }}
          />
        </div>
      )}
    </div>
  );
}

export default BookReader;
