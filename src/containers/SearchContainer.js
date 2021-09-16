import React, { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { getStoryIds } from '../services/hnApi';

import {
  GlobalStyle
} from '../styles/StoriesContainerStyles';

export const SearchContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
        <h1>Hacker News Stories</h1>
        {storyIds.map(storyId => (
          <Search key={storyId} storyId={storyId} />
        ))}
    </>
  );
};