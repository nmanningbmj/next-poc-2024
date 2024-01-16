import Image from "next/image";
import { footerLinks, footerSocialMediaLinks } from "../../constants";

export const Footer = () => {
  return (
    <div className="footer">
      {footerLinks.map((section, index) => (
        <div key={index} className="footer-section">
          <h2>{section.section}</h2>
          <ul>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="footer-section footer-social-media">
        <ul>
          {footerSocialMediaLinks.map((socialLink, index) => (
            <li key={index}>
              <a href={socialLink.link}>
                <Image
                  src={socialLink.image}
                  alt={`Social Media Link`}
                  width={30}
                  height={30}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
