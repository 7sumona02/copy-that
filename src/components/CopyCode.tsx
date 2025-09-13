'use client';

import { useState, useRef, useEffect } from 'react';
import { Highlight, themes, Language } from 'prism-react-renderer';
import { Check, ClipboardIcon } from 'lucide-react';
import { PrismTheme } from 'prism-react-renderer';

interface CopyCodeProps {
  code: string;
  language?: Language;
  theme?: PrismTheme;           // <- add this
  copiedIcon?: React.ReactNode; // optional custom icon
  copyIcon?: React.ReactNode;   // optional custom icon
}


export default function CopyCode({ code, language = 'tsx' }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click bubbling to underlying elements
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative max-w-full shadow-lg overflow-hidden font-mono text-sm rounded-md">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="cursor-pointer absolute top-2 right-2 bg-transparent hover:bg-neutral-600/70 hover:opacity-100 opacity-70 text-white px-1.5 py-1 rounded text-xs transition-all duration-300"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <Check className="size-4.5" />
        ) : (
          <ClipboardIcon className="size-4.5" />
        )}
      </button>

      {/* Code Block */}
      <Highlight theme={themes.dracula} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`p-4 pr-12 overflow-x-auto bg-gray-900 text-gray-100 ${className}`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className="flex">
                <span className="select-none text-gray-500 w-6 text-right mr-4">{i + 1}</span>
                <div className="flex-1">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
