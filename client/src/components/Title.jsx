import { useTranslation } from "react-i18next"

export default function Title() {
  const {t} = useTranslation();
  return (
    <div className="wrapperForTitle">
        <div className="title">
            <h1>
                {t("title.welcome")}<br />
                Your<span className="pinkText">Place</span> Parking
            </h1>
            <button><a>{t("title.slogan")}</a></button>
        </div>
    </div>
  )
}
