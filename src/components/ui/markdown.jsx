import ReactMarkdown from "react-markdown";

export default function Markdown({ children }) {
  return (
    <div className="prose prose-base dark:prose-invert xl:prose-lg max-w-full select-none">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
