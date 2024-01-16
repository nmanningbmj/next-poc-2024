import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Index");

  return (
    <main>
      <h1>{t("title")}</h1>
      <h1>{t("body")}</h1>
    </main>
  );
}
