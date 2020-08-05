import styled from "styled-components";
import { initialFormProps } from "interface/formInputForRandomJokes";

interface FormInputForRandomJokesProps {
  handleSubmit: Function;
  useLoad: boolean;
  useFormRandomJoke: initialFormProps;
  handleReset: Function;
  handleOnChangeInput: Function;
}
const FormInputForRandomJokes = ({
  handleSubmit,
  useLoad,
  useFormRandomJoke,
  handleReset,
  handleOnChangeInput,
}: FormInputForRandomJokesProps) => {
  const { firstname, lastname, numOfJokes } = useFormRandomJoke;

  return (
    <WrapperInputForm
      onSubmit={(e) => handleSubmit(e, useFormRandomJoke)}
      onReset={handleReset}
    >
      <div className="form-input">
        <label>firstname character :</label>
        <input
          id="firstname"
          onChange={(e) => handleOnChangeInput(e)}
          value={firstname}
          type="text"
          placeholder="enter firstname"
          disabled={useLoad}
        />
      </div>
      <div className="form-input">
        <label>Lastname character :</label>
        <input
          id="lastname"
          onChange={(e) => handleOnChangeInput(e)}
          value={lastname}
          type="text"
          placeholder="enter lastname"
          disabled={useLoad}
        />
      </div>
      <div className="form-input">
        <label>The number of jokes you want :</label>
        <input
          id="numOfJokes"
          onChange={(e) => handleOnChangeInput(e)}
          value={numOfJokes}
          type="text"
          placeholder="enter number of jokes"
          disabled={useLoad}
        />
      </div>
      <div className="button">
        <button type="submit" disabled={useLoad}>
          start random
        </button>
        <button type="reset" disabled={useLoad}>
          reset input
        </button>
      </div>
    </WrapperInputForm>
  );
};
export default FormInputForRandomJokes;

const WrapperInputForm = styled.form`
  position: relative;
  margin-bottom: 32px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  .form-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    @media only screen and (max-width: 768px) {
      padding: 0 16px;
    }
    label {
      flex: 0.5;
      text-align: right;
      margin-right: 8px;
    }
    input {
      transition: all 200ms;
      flex: 1;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 12px;
      &:hover,
      &:focus {
        border: 1px solid #0089ff;
      }
    }
  }
  .button {
    button {
      border: none;
      padding: 16px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    button[type="submit"] {
      transition: all 200ms;
      background: #0089ff;
      color: #fff;
      margin-right: 8px;
      &:hover {
        background: #94b7ce;
      }
    }
    button[type="reset"] {
      transition: all 200ms;
      margin-right: 8px;
      &:hover {
        background: #fffff0;
      }
    }
    button {
      &:disabled {
        background: #e5e5e5;
        &:hover {
          background: #e5e5e5;
        }
      }
    }
  }
`;
