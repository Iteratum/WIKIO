import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRecoilState } from "recoil"
import { editorContentState } from "./store"

export default function MCEEditor() {
  const [contents, setContents] = useRecoilState(editorContentState)
  const log = () => {
    const editorContent = tinymce.activeEditor.getContent()
    setContents(editorContent)
    
  };
  return (
    <>
      <Editor onKeyDown={ log }
        apiKey='wawx9fnwoaq1x3wj0gq8h7amxvh6o99t37tdrdgmwt7bog7f'
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