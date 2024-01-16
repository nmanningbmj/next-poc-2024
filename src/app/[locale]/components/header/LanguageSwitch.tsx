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
  { code: "en-us", name: "English (US)" },
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
    // Split the current pathname into an array
    const pathParts = pathname.split("/");

    // Replace the first element with the selected language code
    pathParts[1] = selectedLanguageCode;

    // Join the array back into a string to form the new path
    const newPath = pathParts.join("/");

    // Push the updated path to the router
    router.push(newPath);
  };

  return (
    <select className="languageSelect" onChange={handleLanguageChange}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};
