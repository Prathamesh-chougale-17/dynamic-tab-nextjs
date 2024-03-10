import { getCode } from "@/sanity/sanity-util";
import React from "react";
import Example from "./example.mdx";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  github,
  nightOwl,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const Sanitymarkdown = async () => {
  const code = await getCode();

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Code</h1>
          {code.map((c) => (
            <div key={c.title}>
              <h1>{c.title}</h1>
              <div>
                <SyntaxHighlighter language="tsx" style={nightOwl}>
                  {c.Code.toString()}
                </SyntaxHighlighter>
              </div>
              <div>
                {/* convert the jsx.element code to mdx and render the component */}
                {/* <Example>{c.Code.toString()}</Example> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sanitymarkdown;
