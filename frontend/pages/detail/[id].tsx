import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
const PageDetail = () => {
  const [useDetail, setDetail] = useState<{
    categories: string[];
    id: number;
    joke: string;
  }>(null);
  const { query } = useRouter();
  const handleSetData = async () => {
    const { firstname, lastname, id } = query;
    let urlRandom = `https://api.icndb.com/jokes/${id}?limitTo=[nerdy,explicit]`;
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
      setDetail(response.value);
    }
  };
  useEffect(() => {
    if (query.id) {
      handleSetData();
    }
  }, [query.id]);
  return (
    <Container>
      <div className="wrapper">
        <h1>Story: {(useDetail && useDetail.id) || ""}</h1>
        <h2>Joke: {useDetail && useDetail.joke}</h2>
        <h3>
          categories:{" "}
          {useDetail &&
            useDetail.categories.length > 0 &&
            useDetail.categories.join(", ")}
        </h3>
        <Link href="/">
          <a> {"< "} back to home</a>
        </Link>
      </div>
    </Container>
  );
};
export default PageDetail;
const Container = styled.div`
  position: relative;
  .wrapper {
    margin: 0 auto;
    margin-top: 32px;
    max-width: 600px;
    a {
      cursor: pointer;
      display: inline-block;
      margin-top: 50px;
      background: #f3f5f8;
      border-radius: 12px;
      padding: 12px;
    }
  }
`;
