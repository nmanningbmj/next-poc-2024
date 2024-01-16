"use client";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent } from "react";

// Define language type
type Language = {
  code: string;
  name: string;
};

// Language data
const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "pt", name: "Portuguese" },
  { code: "cn", name: "中文" },
];

// LanguageSwitch component
export const LanguageSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Handle language change
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguageCode = event.target.value;
    const pathParts = pathname.split("/");
    pathParts[1] = selectedLanguageCode;
    const newPath = pathParts.join("/");
    router.push(newPath);
  };

  const currentLanguageCode = pathname.split("/")[1];

  return (
    <select className="languageSelect" onChange={handleLanguageChange}>
      {languages.map((language) => (
        <option
          key={language.code}
          value={language.code}
          selected={language.code === currentLanguageCode}
        >
          {language.name}
        </option>
      ))}
    </select>
  );
};
