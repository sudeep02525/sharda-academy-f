"use client";

import React, { useMemo } from "react";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false, 
  loading: () => <div className="h-48 bg-slate-50 animate-pulse rounded-xl border border-slate-200"></div>
});

export default function RichTextEditor({ value, onChange }) {
  const modules = useMemo(() => ({
    toolbar: false,
  }), []);

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 focus-within:border-[#f1af3c] [&_.ql-container]:border-none [&_.ql-editor]:min-h-[150px] [&_.ql-editor]:text-slate-600 [&_.ql-editor]:text-sm">
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        modules={modules}
      />
    </div>
  );
}
