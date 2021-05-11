import React, { useState, useEffect } from "react";
import axios from "axios";
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

    axios

      // .post("http://localhost:9500/api/polls", formState)
      .post("/api/polls", formState)
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
            <Link to="Poll-hub/Polls">return to previous page</Link>
          </div>
        </Route>

        <form className="form-container">
          <section className="songName music-edit">
            What is your preferred streaming site?
            <br />
            <label className="music-edit" for="Twitch">
              <span>
                Twitch
                <input
                  id="Twitch"
                  type="radio"
                  name="streamingSite"
                  value={formState.streamingSite.Twitch}
                  onChange={inputChange}
                />
              </span>
            </label>
            <br />
            <label className="music-edit" for="Facebook">
              <span>
                Facebook
                <input
                  id="Facebook"
                  type="radio"
                  name="streamingSite"
                  value={formState.streamingSite.Facebook}
                  onChange={inputChange}
                />
              </span>
            </label>
            <br />
            <label className="music-edit" for="Youtube">
              <span>
                Youtube
                <input
                  id="Youtube"
                  type="radio"
                  name="streamingSite"
                  value={formState.streamingSite.Youtube}
                  onChange={inputChange}
                />
              </span>
            </label>
            {/* {errors.streamingSite > 0 ? (
              <p className="error">{errors.streamingSite}</p>
            ) : null} */}
          </section>

          <section className="musicstreamingSite music-edit">
            Would you be interested in Watching this stream?
            <br />
            <label for="Yes">
              <span>
                Yes
                <input
                  id="Yes"
                  type="radio"
                  name="interested"
                  value={formState.interested.Yes}
                  onChange={inputChange}
                />
              </span>
            </label>
            <br />
            <label for="No">
              <span>
                No
                <input
                  id="No"
                  type="radio"
                  name="interested"
                  value={formState.interested.No}
                  onChange={inputChange}
                />
              </span>
            </label>
            {/* {errors.interested > 0 ? (
              <p className="error">{errors.interested}</p>
            ) : null} */}
          </section>

          <pre className='message-box'>
            ▼ you may need to refresh this page if this ▼ confirmation box ▼ has not been
            reset if you wish to submit another form ▼
          </pre>

          <pre className='JSONString'>{JSON.stringify(formState)}</pre>

          <button
            type="submit"
            onClick={(validateChange, formSubmit)}
            disabled={buttonDisabled}
          >
            <NavLink to={`${url}/form-submited`}>Submit </NavLink>
          </button>
        </form>
      </Switch>
    </>
  );
}

export default Form;
