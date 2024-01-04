import Heading from '@tiptap/extension-heading'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Code from '@tiptap/extension-code'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Blockquote from '@tiptap/extension-blockquote'
import { EditorContent, useEditor } from '@tiptap/react'
import { useCallback, useState } from 'react'

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Blockquote,
      Paragraph,
      Bold,
      Italic,
      Code,
      Link,
      Image,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],

    content: `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`
  })

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = prompt('Please enter URL', previousUrl)

    if (url == null) {
      return
    }
    
    //empty
    if(url == '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    //update
    editor.chain().focus().extendMarkRange('link').setLink({href: url}).run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <>
      <nav className='bg-gray-300 p-4 overflow-x-scroll'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex space-x-14'>
          <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>
      
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </button>
      <button
        onClick={setLink}
        className={editor.isActive('link') ? 'is-active' : ''}
      >
        setLink
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
      >
        unsetLink
      </button>
      {/*
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        codeblock
      </button>
  */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockQuote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>
          </div>
        </div>
      </nav>

      <EditorContent editor={editor} />
    </>
  )
}

export default TiptapEditor



function HandlePrompt(event) {
  const [urlInput, setUrlInput] = useState()
  const urlPrompt = Window.prompt("Please enter URL")

  setUrlInput(urlPrompt)
}