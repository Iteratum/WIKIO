import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function MCEEditor({ editorContent }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent()
      return editorContent(content)
    }
  };
  return (
    <>
      <Editor onChange={ log }
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist | code | ' +
            'blockquote | media image link ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}