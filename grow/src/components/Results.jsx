import React from "react";
import {
  Wrapper,
  TableWrapper,
  ResultBox,
  Header,
  ErrorMessage,
} from "./Results.css";
import ArticleListItem from "./ArticleListItem";

const Results = ({ result }) => {
  return result && result === "empty" ? (
    <ErrorMessage>No Results Found</ErrorMessage>
  ) : result && result === "error" ? (
    <ErrorMessage>Error Occured While Getting Results</ErrorMessage>
  ) : (
    result && (
      <Wrapper>
        <TableWrapper>
          <Header>Results</Header>
          <ResultBox>
            {Array(JSON.parse(result))[0].map(
              ({ article, views, views_ceil, rank }) => (
                <ArticleListItem
                  key={rank + article}
                  name={article.replaceAll("_", " ")}
                  views={views || views_ceil}
                  rank={rank}
                  content={""}
                />
              )
            )}
          </ResultBox>
        </TableWrapper>
      </Wrapper>
    )
  );
};

export default Results;
