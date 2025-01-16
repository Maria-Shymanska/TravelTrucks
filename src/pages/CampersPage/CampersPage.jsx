import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamperById,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { fetchCamperDetails } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import Tabs from "../../components/Tabs/Tabs";
import Rating from "../../components/Rating/Rating";
import Location from "../../components/Location/Location";
import css from "./CampersPage.module.css";

const CampersPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { camper, isLoading, error } = useSelector((state) => ({
    camper: selectCamperById(state, id) || {},
    isLoading: selectIsLoading(state),
    error: selectError(state),
  }));
  const [visibleComponent, setVisibleComponent] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  const reviewsCount = useMemo(() => camper.reviews?.length || 0, [camper]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!camper.id) return <ErrorMessage message="Camper not found." />;

  return (
    <section className={css.cardDetails}>
      <div className={css.container}>
        <div className={css.detailsFirst}>
          <h1 className={css.name}>{camper.name}</h1>
          <Rating rating={camper.rating} reviewsCount={reviewsCount} />
          <Location location={camper.location} />
          <p className={css.price}>&euro;{camper.price.toFixed(2)}</p>
        </div>
        <CamperGallery gallery={camper.gallery} />
        <p className={css.description}>{camper.description}</p>
        <Tabs activeTab={visibleComponent} onChangeTab={setVisibleComponent} />
        <div className={css.detailsSecond}>
          {visibleComponent === "features" && (
            <CamperFeatures features={camper} />
          )}
          {visibleComponent === "reviews" && (
            <CamperReviews reviews={camper.reviews} />
          )}
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default CampersPage;
