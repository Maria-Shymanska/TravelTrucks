import css from "./Tabs.module.css";

const Tabs = ({ activeTab, onChangeTab }) => (
  <div className={css.detailsThird}>
    <button
      className={activeTab === "features" ? css.active : css.tab}
      onClick={() => onChangeTab("features")}
    >
      Features
    </button>
    <button
      className={activeTab === "reviews" ? css.active : css.tab}
      onClick={() => onChangeTab("reviews")}
    >
      Reviews
    </button>
  </div>
);

export default Tabs;
