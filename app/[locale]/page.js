// app/page.js
// 配置国际化
import { getTranslations } from "next-intl/server";
export default async function Page() {
  const t = await getTranslations("Basic");
  return (
    <div className="note--empty-state">
      <span className="note-text--empty-state">{t("initText")}</span>
    </div>
  );
}
