import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import Link from "next/link";
import { initialFormProps } from "interface/formInputForRandomJokes";

interface JokeProps {
  categories: string[];
  id: number;
  joke: string;
}
interface WrapperCardJokesProps {
  numOfCard?: number;
  useDataJokeCards: JokeProps[];
  useLoad: boolean;
  useFormRandomJoke: initialFormProps;
}
const WrapperCardJokes = ({
  numOfCard = 1,
  useDataJokeCards,
  useLoad,
  useFormRandomJoke,
}: WrapperCardJokesProps) => {
  return (
    <Container>
      {!numOfCard ? (
        <CardJoke>
          <div className="wrapper">wait start</div>
        </CardJoke>
      ) : (
        [...Array(numOfCard)].map((index, idx) => {
          const findDataIndex = useDataJokeCards.find((_, i) => i === idx);
          if (findDataIndex) {
            return (
              <Link
                href={`/detail/${findDataIndex.id}?firstname=${
                  useFormRandomJoke.firstname || ""
                }&lastname=${useFormRandomJoke.lastname}`}
              >
                <CardJoke
                  className={`${(useLoad && "flipH") || ""}`}
                  key={`joke_${idx}`}
                >
                  <div className="wrapper">
                    <div className="title-card">Story {findDataIndex.id}</div>
                    <div className="joke-detail">
                      {findDataIndex.joke || "-"}
                    </div>
                  </div>
                </CardJoke>
              </Link>
            );
          }
          return (
            <CardJoke
              className={`${(useLoad && "flipH") || ""}`}
              key={`joke_${idx}`}
            >
              <div className="wrapper">wait start</div>
            </CardJoke>
          );
        })
      )}
    </Container>
  );
};
export default WrapperCardJokes;

const Container = styled.div`
  position: relative;
  border-top: 1px solid #e5e5e5;
  margin-top: 32px;
  display: block;
  width: 100%;
  text-align: left;
  padding: 0 16px;
  .flipH {
    animation: flipH 1s 0s infinite alternate ease-in-out;
  }
  @keyframes flipH {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
  }
`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const CardJoke = styled.div`
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  background: #fff;
  vertical-align: top;
  width: calc(100% / 6);
  margin-top: 24px;
  margin-right: 24px;
  display: inline-block;
  border-radius: 12px;
  padding: 16px;
  animation: 1s ${fadeInRightAnimation};
  height: 100px;
  overflow: hidden;
  .wrapper {
    transition: all 200ms;
    &:hover {
      transform: scale(1.5);
    }
  }
  .wait {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .title-card {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .joke-detail {
    display: block;
    display: -webkit-box;
    height: 38px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
