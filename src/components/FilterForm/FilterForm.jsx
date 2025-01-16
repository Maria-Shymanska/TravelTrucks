import { Field, Form, Formik } from "formik";
import css from "./FilterForm.module.css";
import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { filtersChange } from "../../redux/filters/filtersSlice";

function FilterForm() {
  const initialValues = {
    location: "",
    equipment: [],
    type: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(filtersChange(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.conteiner}>
          <h3 className={css.h3}>Location</h3>
          <div className={css.locationConteiner}>
            <Field
              className={css.fieldLocation}
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
            />
            <img
              src="../../../public/images/icon/Map.svg"
              alt="map"
              className={css.locationIcon}
            />
          </div>

          <h3 className={css.h3}>Filters</h3>

          <h2 className={css.h2}>Vehicle equipment</h2>
          <hr className={css.hr} />
          <div className={css.equipmentConteiner}>
            <label>
              <Field type="checkbox" name="equipment" value="ac" />
              <Icon text={"AC"} icon={"wind"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="automatic" />
              <Icon text={"Automatic"} icon={"selector"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="kitchen" />
              <Icon text={"Kitchen"} icon={"cup"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="tv" />
              <Icon text={"TV"} icon={"tv"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="bathroom" />
              <Icon text={"Bathroom"} icon={"shower"} />
            </label>
          </div>

          <h2 className={css.h2}>Vehicle type</h2>
          <hr className={css.hr} />
          <div className={css.typeConteiner}>
            <label>
              <Field type="radio" name="type" value="van" />
              <Icon text={"Van"} icon={"grid-1x2"} />
            </label>
            <label>
              <Field type="radio" name="type" value="fully integrated" />
              <Icon text={"Fully Integrated"} icon={"grid"} />
            </label>
            <label>
              <Field type="radio" name="type" value="Alcove" />
              <Icon text={"Alcove"} icon={"grid-3x3"} />
            </label>
          </div>

          <button className={css.formButton} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FilterForm;
