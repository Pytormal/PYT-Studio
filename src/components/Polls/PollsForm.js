import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import { useRouteMatch, Switch, Route, NavLink, Link } from "react-router-dom";



function Form() {
  yup.addMethod(
    yup.object,
    "optional",
    function (isOptional = true, defaultValue = undefined) {
      return this.transform(function (value) {
        if (!isOptional) return value;

        if (
          value &&
          Object.values(value).some(
            (v) => !(v === null || v === undefined || v === "")
          )
        ) {
          return value;
        }

        return defaultValue;
      }).default(defaultValue);
    }
  );

  const formSchema = yup.object().shape({
    streamingSite: yup
      .object({
        Twitch: yup.string().required(),
        Facebook: yup.string().required(),
        Youtube: yup.string().required(),
      })
      .optional(),
    interested: yup
      .object({
        Yes: yup.string().required(),
        No: yup.string().required(),
      })
      .optional(),
  });

  const [formState, setFormState] = useState({
    streamingSite: {
      Twitch: "Twitch",
      Facebook: "Facebook",
      Youtube: "Youtube",
    },

    interested: {
      Yes: "Yes",
      No: "No",
    },
  });

  const [errors, setErrors] = useState({
    streamingSite: {
      Twitch: "Twitch",
      Facebook: "Facebook",
      Youtube: "Youtube",
    },

    interested: {
      Yes: "Yes",
      No: "No",
    },
  });

  const formSubmit = (e) => {
    console.log("form submitted for review");
    // e.preventDefault();

    axiosWithAuth()
      // .post("http://localhost:9500/api/polls", formState)
      .post("https://overlay-server-api.herokuapp.com/api/polls", formState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const { path, url } = useRouteMatch();

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .object({ formSchema })
      .optional()
      .validate(e.target.value)

      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })

      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors,
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };
  return (
    <>
      <Switch>
        <Route path={`${path}/form-submited`}>
          <div className="SubmitedText">
            <h4>Submited Form </h4>
            <Link to={`${path}`}>return to previous page</Link>
          </div>
        </Route>

        <form className="form-container">
          <section className="poll-wrapper">
            <section className="site-wrapper options-wrapper">
              <h4>What is your preferred streaming site?</h4>
              <br />
              <label className="Twitch radio" for="Twitch">
                <h5>
                  Twitch
                  <input
                    id="Twitch"
                    type="radio"
                    name="streamingSite"
                    value={formState.streamingSite.Twitch}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Facebook radio" for="Facebook">
                <h5>
                  Facebook
                  <input
                    id="Facebook"
                    type="radio"
                    name="streamingSite"
                    value={formState.streamingSite.Facebook}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Youtube radio" for="Youtube">
                <h5>
                  Youtube
                  <input
                    id="Youtube"
                    type="radio"
                    name="streamingSite"
                    value={formState.streamingSite.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              {/* {errors.streamingSite > 0 ? (
              <p className="error">{errors.streamingSite}</p>
            ) : null} */}
            </section>

            <section className="interested options-wrapper">
              <h4>Would you be interested in Watching this stream?</h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  Yes
                  <input
                    id="Yes"
                    type="radio"
                    name="interested"
                    value={formState.interested.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="No radio" for="No">
                <h5>
                  No
                  <input
                    id="No"
                    type="radio"
                    name="interested"
                    value={formState.interested.No}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              {/* {errors.interested > 0 ? (
              <p className="error">{errors.interested}</p>
            ) : null} */}
            </section>
            <pre className="message-box">
              <p>
                ▼ you may need to refresh this page if this ▼ confirmation box ▼
                has not been reset if you wish to submit another form ▼
              </p>
            </pre>

            <pre className="JSONString message-box">
              <p>{JSON.stringify(formState)}</p>
            </pre>
            <button
              type="submit"
              onClick={(validateChange, formSubmit)}
              disabled={buttonDisabled}
            >
              <NavLink to={`${url}/form-submited`}>Submit </NavLink>
            </button>
          </section>
        </form>
      </Switch>
    </>
  );
}

export default Form;
