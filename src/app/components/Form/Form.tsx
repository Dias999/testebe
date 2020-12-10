import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Input } from "components";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form: React.FC<Form.Props> = ({ getPokemon, loading, clearAll }) => {
  const pokemonSearchValidationSchema = Yup.object().shape({
    name: Yup.string().required("Please add the pokemon name"),
  });

  const pokemonSearchInitialValues: Form.SearchForm = {
    name: "",
  };

  const formik = useFormik({
    onSubmit: (values) => {
      getPokemon(values.name);
    },
    initialValues: pokemonSearchInitialValues,
    validationSchema: pokemonSearchValidationSchema,
  });

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    resetForm,
  } = formik;

  const clear = () => {
    resetForm();
    clearAll();
  };

  return (
    <Row className="mt-4">
      <Col>
        <Input
          type="text"
          placeholder="Pokemon name"
          name="name"
          ariaLabel="pokemon name"
          value={values.name}
          onChange={handleChange}
          handleBlur={handleBlur}
          error={touched.name && errors.name}
        />
        <div className="d-flex mt-2">
          <Button
            className="mr-2"
            onClick={() => {
              handleSubmit();
            }}
            disabled={loading}
            color="primary"
            outline
            size="small"
          >
            Search
          </Button>
          <Button
            onClick={clear}
            disabled={loading}
            color="primary"
            outline
            size="small"
          >
            Clear
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Form;
