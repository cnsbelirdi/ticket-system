const Validation = ({ touched, error }) => {
  return (
    <div>
      {!touched && error && <div className="formik-validation">
        {error}
      </div>
      }
    </div>
  );
}
export default Validation;