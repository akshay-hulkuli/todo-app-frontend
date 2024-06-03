import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTodo, retrieveTodo, updateTodo } from "./api/todoService";
import { useAuth } from "./security/AuthContext";

const TodoComponent = () => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (id != -1) {
      retrieveTodo(authContext.userName, id)
        .then((response) => {
          setTodo(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const onSubmit = (values) => {
    console.log(values);
    const tempTodo = {
      id: id,
      username: authContext.userName,
      description: values.description,
      targetDate: values.targetDate,
      isDone: false,
    };
    if (id === -1) {
        createTodo(authContext.userName, tempTodo);
    } else {
      updateTodo(authContext.userName, id, tempTodo).then((response) =>
        navigate(`/todos/${authContext.userName}`)
      );
    }
  };

  const validateValues = (values) => {
    let errors = {};
    if (values.description.length < 5) {
      errors["description"] = "length must be more than 5";
    }
    if (!values.targetDate || !moment(values.targetDate).isValid()) {
      errors["targetDate"] = "date can't be empty";
    }
    return errors;
  };

  return (
    <div style={{ margin: "10px 10%" }}>
      <Formik
        initialValues={{
          description: todo.description,
          targetDate: todo.targetDate,
        }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validateValues}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form>
            <ErrorMessage
              name="description"
              component="div"
              className="alert alert-warning"
            />
            <fieldset className="form-group m-3">
              <label className="m-2">Description</label>
              <Field type="text" className="form-control" name="description" />
            </fieldset>
            <ErrorMessage
              name="targetDate"
              component="div"
              className="alert alert-warning"
            />
            <fieldset className="form-group m-3">
              <label className="m-2">Target Date</label>
              <Field type="date" className="form-control" name="targetDate" />
            </fieldset>
            <div>
              <button className="btn btn-success m-5">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoComponent;
