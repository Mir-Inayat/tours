"use client";

import React, { useState } from 'react';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import CodeBlock from '@tiptap/extension-code-block';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';

// Import icons
import { 
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, AlignLeft, AlignCenter, 
  AlignRight, AlignJustify, List, ListOrdered, Heading, ImageIcon, Link as LinkIcon, 
  Code, Table as TableIcon, Type, Subscript as SubscriptIcon, Superscript as SuperscriptIcon,
  Quote, Redo, Undo, Paperclip, FileText, PanelLeftClose, PanelLeftOpen,
  Camera, Youtube, SeparatorVertical, Palette
} from 'lucide-react';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange, placeholder = 'Write something...' }) => {
  const [showSourceView, setShowSourceView] = useState(false);
  const [sourceCode, setSourceCode] = useState(content);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Superscript,
      Subscript,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      CodeBlock,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
      Typography,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Highlight,
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
      setSourceCode(html);
    },
  });

  if (!editor) {
    return null;
  }

  const handleSourceViewToggle = () => {
    if (showSourceView) {
      // Update the editor content when switching back from source view
      editor.commands.setContent(sourceCode);
    }
    setShowSourceView(!showSourceView);
  };

  const handleSourceCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSourceCode(e.target.value);
    onChange(e.target.value);
  };

  const toggleHeadingLevel = (level: number) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  // Helper for button style
  const buttonClass = (isActive = false) => 
    `p-1 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-200' : ''}`;

  return (
    <div className="ckeditor-container border border-gray-300 rounded-md overflow-hidden">
      {/* Main Toolbar Row 1 */}
      <div className="border-b p-1 flex flex-wrap gap-1 bg-gray-50">
        <button
          title="Source"
          onClick={handleSourceViewToggle}
          className={buttonClass(showSourceView)}
        >
          {showSourceView ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </button>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <button
          title="Undo"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className={buttonClass()}
        >
          <Undo size={16} />
        </button>
        <button
          title="Redo"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className={buttonClass()}
        >
          <Redo size={16} />
        </button>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <button
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive('bold'))}
        >
          <Bold size={16} />
        </button>
        <button
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass(editor.isActive('italic'))}
        >
          <Italic size={16} />
        </button>
        <button
          title="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonClass(editor.isActive('underline'))}
        >
          <UnderlineIcon size={16} />
        </button>
        <button
          title="Strikethrough"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={buttonClass(editor.isActive('strike'))}
        >
          <Strikethrough size={16} />
        </button>
        <button
          title="Superscript"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={buttonClass(editor.isActive('superscript'))}
        >
          <SuperscriptIcon size={16} />
        </button>
        <button
          title="Subscript"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={buttonClass(editor.isActive('subscript'))}
        >
          <SubscriptIcon size={16} />
        </button>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <button
          title="Bulleted List"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive('bulletList'))}
        >
          <List size={16} />
        </button>
        <button
          title="Numbered List"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonClass(editor.isActive('orderedList'))}
        >
          <ListOrdered size={16} />
        </button>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <button
          title="Align Left"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={buttonClass(editor.isActive({ textAlign: 'left' }))}
        >
          <AlignLeft size={16} />
        </button>
        <button
          title="Align Center"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={buttonClass(editor.isActive({ textAlign: 'center' }))}
        >
          <AlignCenter size={16} />
        </button>
        <button
          title="Align Right"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={buttonClass(editor.isActive({ textAlign: 'right' }))}
        >
          <AlignRight size={16} />
        </button>
        <button
          title="Justify"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={buttonClass(editor.isActive({ textAlign: 'justify' }))}
        >
          <AlignJustify size={16} />
        </button>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <button
          title="Block Quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={buttonClass(editor.isActive('blockquote'))}
        >
          <Quote size={16} />
        </button>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <button
          title="Insert Link"
          onClick={() => {
            const url = prompt('URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            } else {
              editor.chain().focus().unsetLink().run();
            }
          }}
          className={buttonClass(editor.isActive('link'))}
        >
          <LinkIcon size={16} />
        </button>
        
        <button
          title="Insert Image"
          onClick={() => {
            const url = prompt('Image URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className={buttonClass()}
        >
          <ImageIcon size={16} />
        </button>
        
        <button
          title="Insert Table"
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          className={buttonClass()}
        >
          <TableIcon size={16} />
        </button>
        
        <button
          title="Insert Code Block"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={buttonClass(editor.isActive('codeBlock'))}
        >
          <Code size={16} />
        </button>
      </div>
      
      {/* Second Toolbar Row */}
      <div className="border-b p-1 flex flex-wrap gap-1 items-center bg-gray-50">
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">Styles</span>
          <select 
            className="border rounded px-1 py-0.5 text-sm bg-white"
            onChange={(e) => {
              const value = e.target.value;
              if (value.startsWith('heading-')) {
                const level = parseInt(value.split('-')[1]);
                toggleHeadingLevel(level);
              } else if (value === 'paragraph') {
                editor.chain().focus().setParagraph().run();
              } else if (value === 'code-block') {
                editor.chain().focus().toggleCodeBlock().run();
              }
            }}
            value={
              editor.isActive('heading', { level: 1 })
                ? 'heading-1'
                : editor.isActive('heading', { level: 2 })
                ? 'heading-2'
                : editor.isActive('heading', { level: 3 })
                ? 'heading-3'
                : editor.isActive('codeBlock')
                ? 'code-block'
                : 'paragraph'
            }
          >
            <option value="paragraph">Paragraph</option>
            <option value="heading-1">Heading 1</option>
            <option value="heading-2">Heading 2</option>
            <option value="heading-3">Heading 3</option>
            <option value="code-block">Code Block</option>
          </select>
        </div>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">Format</span>
          <select 
            className="border rounded px-1 py-0.5 text-sm bg-white"
            onChange={(e) => {
              // Format options would go here
            }}
          >
            <option value="default">Default</option>
            <option value="pre">Preformatted</option>
          </select>
        </div>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">Font</span>
          <select 
            className="border rounded px-1 py-0.5 text-sm bg-white"
            onChange={(e) => {
              // Font family options would go here
            }}
          >
            <option value="default">Default</option>
            <option value="arial">Arial</option>
            <option value="times">Times New Roman</option>
            <option value="courier">Courier New</option>
          </select>
        </div>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">Size</span>
          <select 
            className="border rounded px-1 py-0.5 text-sm bg-white"
            onChange={(e) => {
              // Font size options would go here
            }}
          >
            <option value="default">Default</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        
        <div className="h-6 mx-1 border-l border-gray-300"></div>
        
        <input
          type="color"
          onChange={(e) => {
            editor.chain().focus().setColor(e.target.value).run();
          }}
          value="#000000"
          className="w-6 h-6 border rounded cursor-pointer"
          title="Text Color"
        />
        
        <button
          title="Background Color"
          onClick={() => {
            const color = prompt('Background color (hex, rgb, etc.)');
            if (color) {
              editor.chain().focus().toggleHighlight({ color }).run();
            }
          }}
          className={buttonClass()}
        >
          <Palette size={16} />
        </button>
      </div>
      
      {/* Editor Content or Source View */}
      <div className="min-h-[300px]">
        {showSourceView ? (
          <textarea
            value={sourceCode}
            onChange={handleSourceCodeChange}
            className="w-full h-full min-h-[300px] p-3 font-mono text-sm"
            placeholder="HTML Source"
          />
        ) : (
          <EditorContent editor={editor} className="prose max-w-none h-full min-h-[300px] p-3" />
        )}
      </div>
      
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="flex items-center bg-white shadow rounded-md p-1 border">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={buttonClass(editor.isActive('bold'))}
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={buttonClass(editor.isActive('italic'))}
          >
            <Italic size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={buttonClass(editor.isActive('underline'))}
          >
            <UnderlineIcon size={16} />
          </button>
          <button
            onClick={() => {
              const url = prompt('URL');
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              } else {
                editor.chain().focus().unsetLink().run();
              }
            }}
            className={buttonClass(editor.isActive('link'))}
          >
            <LinkIcon size={16} />
          </button>
        </div>
      </BubbleMenu>
    </div>
  );
};

export default TiptapEditor;