import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Index");

  return (
    <main>
      <div className="container">
        <h1>{t("title")}</h1>
        <p>{t("body")}</p>
      </div>
    </main>
  );
}
