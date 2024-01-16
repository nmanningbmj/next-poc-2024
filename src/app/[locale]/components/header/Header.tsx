import Image from "next/image";
import Link from "next/link";
import { LanguageSwitch } from "./LanguageSwitch";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <Link href="/">
          <Image src="/images/BP-Logo.svg" alt="Home" width={334} height={57} />
        </Link>
        <LanguageSwitch />
      </div>
    </section>
  );
};

export default Header;
