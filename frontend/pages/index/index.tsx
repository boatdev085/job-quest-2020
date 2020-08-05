import { useState } from "react";
import styled from "styled-components";
import FormInputForRandomJokes from "components/pages/index/FormInputForRandomJokes";
import {
  initialFormProps,
  initialForm,
} from "interface/formInputForRandomJokes";
import WrapperCardJokes from "components/pages/index/WrapperCardJokes";

export default function Home() {
  const [useLoad, setLoad] = useState(false);
  const [useFormRandomJoke, setFormRandomJoke] = useState<initialFormProps>(
    initialForm
  );
  const [useDataJokeCards, setDataJokeCards] = useState<
    { categories: string[]; id: number; joke: string }[]
  >([]);
  const handleOnChangeInput = (e) => {
    if (e.target.id === "numOfJokes") {
      if (e.target.value && !Number(e.target.value)) {
        return;
      }
      if (useDataJokeCards.length > 0) {
        setDataJokeCards([]);
      }
    }
    setFormRandomJoke({ ...useFormRandomJoke, [e.target.id]: e.target.value });
  };
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setFormRandomJoke(initialForm);
    setDataJokeCards([]);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (useLoad) return null;
    setLoad(true);
    const { firstname, lastname, numOfJokes } = useFormRandomJoke;
    let urlRandom = `https://api.icndb.com/jokes/random/${
      numOfJokes || 1
    }?limitTo=[nerdy,explicit]`;
    if (firstname) {
      urlRandom += `&firstName=${firstname}`;
    }
    if (lastname) {
      urlRandom += `&lastName=${lastname}`;
    }
    let response = await fetch(urlRandom, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((e) => {
        return { type: "error", message: e.message };
      });
    if (response && response.type === "success") {
      setTimeout(() => {
        setDataJokeCards(response.value || []);
        setLoad(false);
      }, 2000);
    } else {
      setLoad(false);
    }
  };
  return (
    <Container>
      <Title>random Jokes for you 😂🤪</Title>
      <FormInputForRandomJokes
        handleOnChangeInput={handleOnChangeInput}
        handleReset={handleReset}
        useFormRandomJoke={useFormRandomJoke}
        useLoad={useLoad}
        handleSubmit={handleSubmit}
      />
      <WrapperCardJokes
        useFormRandomJoke={useFormRandomJoke}
        useLoad={useLoad}
        useDataJokeCards={useDataJokeCards}
        numOfCard={parseInt(useFormRandomJoke.numOfJokes)}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
`;
const Title = styled.h1`
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;
