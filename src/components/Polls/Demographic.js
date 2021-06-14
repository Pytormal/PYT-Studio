import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import { useRouteMatch, Switch, Route, NavLink, Link } from "react-router-dom";

function DemographicForm() {
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
    threeChoices: yup
      .object({
        yes: yup.string().required(),
        no: yup.string().required(),
        both: yup.string().required(),
      })
      .optional(),
    threeChoices: yup
      .object({
        Yes: yup.string().required(),
        No: yup.string().required(),
      })
      .optional(),
  });

  const [formState, setFormState] = useState({
    threeChoices: {
      yes: "Yes", //Yes
      no: "No", //No
      both: "Both", //Both
    },

    textRes: {
      text: "",
    },
  });

  const [errors, setErrors] = useState({
    threeChoices: {
      yes: "Yes", //Yes
      no: "No", //No
      both: "Both", //Both
    },

    textRes: {
      text: "",
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
            <h4>Submited DemographicForm </h4>
            <Link to={`${path}`}>return to previous page</Link>
          </div>
        </Route>

        <form className="form-container">
          <h2>(release date for beta, year 2022)</h2>
          <p>
            this survey and streaming site will most likely contain some partial
            or full wholesome nudity, if you do not like to see any naked
            natural bodies, your input is still valid, and will be taken into
            consideration on making it still available to those that do not mind
            seeing natural bodies. this site will referr to it being a use of free speech as long as it isn't
            'with intent to arouse'.
          </p>

          {/* Poll Container */}
          <section className="poll-wrapper">
            <section className="options-wrapper">
              {/* Q1 Would you Rather */}
              <h4>Would You Rather Watch:</h4>
              <br />
              {/* Radio Buttons */}
              <section>
                <label className="Twitch radio" for="Twitch">
                  <h5>
                    Live Videos
                    <input
                      id="Twitch"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.yes}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                <br />
                <label className="radio" for="Facebook">
                  <h5>
                    Pre-Recorded Videos
                    <input
                      id="Facebook"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.no}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                <br />
                <label className="Youtube radio" for="Youtube">
                  <h5>
                    or Both
                    <input
                      id="Youtube"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.both}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              </section>
            </section>

            <section className="options-wrapper">
              <h4>
                What <span className="underline">Do</span> you like about
                Twitch?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="textRes"
                    value={formState.threeChoices.yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.> 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              <h4>
                What <span className="underline">Don't</span> you like about
                Twitch?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.> 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
            </section>
            <section className="options-wrapper">
              <h4>
                What <span className="underline">Do</span> you like about
                Youtube?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.> 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              <h4>
                What <span className="underline">Don't</span> you like about
                Youtube?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.> 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
            </section>
            <section className="options-wrapper">
              <h4>
                What <span className="underline">Do</span> you like about
                Facebook Gaming?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.> 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              <h4>
                What <span className="underline">Don't</span> you like about
                Facebook Gaming?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.> 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
            </section>

            <section className="site-wrapper options-wrapper">
              <h4>Would you enjoy watching Other people play:</h4>
              <br />
              <label className="Twitch radio" for="Twitch">
                <h5>
                  Their favourite video games?
                  <input
                    id="Twitch"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Twitch}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Facebook radio" for="Facebook">
                <h5>
                  your favourite video games
                  <input
                    id="Facebook"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Facebook}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Youtube radio" for="Youtube">
                <h5>
                  esport related competition video games
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <label className="Youtube radio" for="Youtube">
                <h5>
                  IRL (in real life) streams
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <label className="Youtube radio" for="Youtube">
                <h5>
                  IRL (in real life) daily living streams
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <label className="Youtube radio" for="Youtube">
                <h5>
                  IRL (in real life) interaction streams
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
            </section>

            <section className="site-wrapper options-wrapper">
              <h4>
                if you are a either a full-time or veteran content creater and
                or streamer:
              </h4>
              <br />
              <h4>how do you make money? </h4>
              <br />
              <label className="Twitch radio" for="Twitch">
                <h5>
                  Through Promotional or Corporation ads
                  <input
                    id="Twitch"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Twitch}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Facebook radio" for="Facebook">
                <h5>
                  Through Donations/ Tips
                  <input
                    id="Facebook"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Facebook}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Youtube radio" for="Youtube">
                <h5>
                  With your personal ads
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <label className="Youtube radio" for="Youtube">
                <h5>
                  With a subscription based system
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <h4>
                What things would you like to see changed on your current
                streaming platform?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
            </section>
            <section className="site-wrapper options-wrapper">
              <h4>
                if you are a either a part-time or a new content creater and or
                streamer:
              </h4>
              <br />
              <h4>how do or would you like to make money? </h4>
              <br />
              <label className="Twitch radio" for="Twitch">
                <h5>
                  Through Promotional or Corporation ads
                  <input
                    id="Twitch"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Twitch}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Facebook radio" for="Facebook">
                <h5>
                  Through Donations/ Tips
                  <input
                    id="Facebook"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Facebook}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              <label className="Youtube radio" for="Youtube">
                <h5>
                  With your personal ads
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <label className="Youtube radio" for="Youtube">
                <h5>
                  With a subscription based system
                  <input
                    id="Youtube"
                    type="radio"
                    name="threeChoices"
                    value={formState.threeChoices.Youtube}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <h4>
                What things would you like to see changed on your current
                streaming platform?
              </h4>
              <br />
              <label className="Yes radio" for="Yes">
                <h5>
                  <input
                    id="Yes"
                    type="text"
                    name="threeChoices"
                    value={formState.threeChoices.Yes}
                    onChange={inputChange}
                  />
                </h5>
              </label>
              <br />
              {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
            </section>

            <section>
              <h2>Guestions about Nudity</h2>
              <p>
                On this streaming platform, this should be a place for *All
                content* this Platform would allow *wholesome nudity* for any
                one wanting to be naked but feels the drag of needing to put on
                clothes before work and or broadcasting content, this site is
                for you too.
              </p>
              <br />
              <p></p>

              <section className="site-wrapper options-wrapper">
                <h4>Would you say Nudity and Pornography are different?:</h4>
                <br />
                <label className="Twitch radio" for="Twitch">
                  <h5>
                    Yes
                    <input
                      id="Twitch"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.Twitch}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                <br />
                <label className="Facebook radio" for="Facebook">
                  <h5>
                    No
                    <input
                      id="Facebook"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.Facebook}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                <br />
                <label className="Youtube radio" for="Youtube">
                  <h5>
                    if no, please explain your point of view
                    <input
                      id="Youtube"
                      type="text"
                      name="threeChoices"
                      value={formState.threeChoices.Youtube}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              </section>
              <section className="site-wrapper options-wrapper">
                <h4>
                  If Males are overall welcome to be Topless, (bare chested).
                  should Females also be welcomed to be Topless?:
                </h4>
                <br />
                <label className="Twitch radio" for="Twitch">
                  <h5>
                    Yes
                    <input
                      id="Twitch"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.Twitch}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                <br />
                <label className="Facebook radio" for="Facebook">
                  <h5>
                    No
                    <input
                      id="Facebook"
                      type="radio"
                      name="threeChoices"
                      value={formState.threeChoices.Facebook}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                <br />
                <label className="Youtube radio" for="Youtube">
                  <h5>
                    if no, please explain your point of view
                    <input
                      id="Youtube"
                      type="text"
                      name="threeChoices"
                      value={formState.threeChoices.Youtube}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              </section>
              <section className="site-wrapper options-wrapper">
                <h4>
                  what are your thoughts/ standpoint about seeing nudity either
                  in public, or publicly seeing on a streaming platform?
                </h4>
                <br />
                <label className="Twitch radio" for="Twitch">
                  <h5>
                    Yes
                    <input
                      id="Twitch"
                      type="tesxt"
                      name="threeChoices"
                      value={formState.threeChoices.Twitch}
                      onChange={inputChange}
                    />
                  </h5>
                </label>
                {/* {errors.threeChoices > 0 ? (
              <p className="error">{errors.threeChoices}</p>
            ) : null} */}
              </section>
            </section>
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

export default DemographicForm;
