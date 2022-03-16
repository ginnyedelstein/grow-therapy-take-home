import React from "react";

import {
  Wrapper,
  InfoColumn,
  DetailsColumn,
  Name,
  Details,
} from "./ArticleListItem.css";

const ArticleListItem = ({ name, views, rank, content }) => {
  return (
    <Wrapper>
      <InfoColumn>
        <Name>
          {rank}. {name}
        </Name>
        <DetailsColumn>
          <Details>{`Views: ${views} ${content}`}</Details>
        </DetailsColumn>
      </InfoColumn>
    </Wrapper>
  );
};

export default ArticleListItem;
