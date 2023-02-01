import React from "react";

export default function ContactSection({ title, subtitle, id }) {
  return (
    <div name="contact" className="text-center text-black">
      {/* Container */}
      <div className=" p-2 pb-8 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-300px inline">Contact Me👋</p>
        </div>
        <div className={"contactSection"}>
          <div className="contact-content" id={id}>
            <h1 className="contactTitle">{title}</h1>
            <div className="endContainer">
              <p className="contactParagraph"> </p>
            </div>
            <div className="contactLinks text-pink-400">
              <a
                href="mailto:sandraadeyinka21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
              >
                <br></br>
                @gmail
              </a>
              <a className="socialLink" href="https://github.com/SandraAdey">
                <br></br>
                GitHub
              </a>
              <a
                className="socialLink"
                href="https://www.linkedin.com/in/sandra-adeyinka-0ab03119a/"
              >
                <br></br>
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
