import { useState } from "react";

function Accordion({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="accordion" onClick={(ev) => setIsExpanded((prev) => !prev)}>
      <div className="accordion__header">
        <h1 className="accordion__headline">{title}</h1>
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="2"
            viewBox="0 0 11 2"
          >
            <rect
              id="Rectangle_232"
              data-name="Rectangle 232"
              width="11"
              height="2"
              fill="#354e57"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.561"
            height="8.569"
            viewBox="0 0 8.561 8.569"
          >
            <path
              id="Path_9973"
              data-name="Path 9973"
              d="M10.652-4.263H7.269V-.879H5.493V-4.263h-3.4V-6.047h3.4v-3.4H7.269v3.4h3.384Z"
              transform="translate(-2.092 9.448)"
              fill="#354e57"
            />
          </svg>
        )}
      </div>
      {isExpanded ? <div className="accordion__body">{body}</div> : null}
    </div>
  );
}

export default Accordion;
