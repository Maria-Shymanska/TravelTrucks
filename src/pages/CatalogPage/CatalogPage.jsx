import css from "./CatalogPage.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CamperList from "../../components/CamperList/CamperList";

function CatalogPage() {
  return (
    <div className={css.conteiner}>
      <FilterForm />
      <CamperList />
    </div>
  );
}

export default CatalogPage;
