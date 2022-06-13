const Validation = ({ touched, error }) => {
  return (
    <div className="formik-validation" hidden={!touched && error}>
      {error}
    </div>
  );
}
export default Validation;