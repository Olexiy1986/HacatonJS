'use strict';

import './sass/styles.css';
import './sass/styles.scss';
import './js/globalVar.js';

import HomePage from './js/pages/HomePage/HomePage.js';
import DetailsPage from './js/pages/DetailsPage/DetailsPage.js';
import MyFilmLibraryPage from './js/pages/MyFilmLibraryPage/MyFilmLibraryPage.js';

import InitialHomePage from './js/components/1InitialHomePage.js';
import searchAndPlaginationHome from './js/components/2searchAndPlaginationHomePage.js';
import navigation from './js/components/3navigation.js';
import filmDetailsPage from './js/components/4filmDetailsPage.js';
import libraryPage from './js/components/5libraryPage.js';

function getCurrentPath() {
  return location.pathname;
}

function getCurrentPathId() {
  return location.search;
}

function init() {
  const root = document.getElementById('root');
  const path = getCurrentPath();
  const pathWithId = getCurrentPathId();
  switch (path) {
    case '/': {
      HomePage(root);

      InitialHomePage();
      searchAndPlaginationHome();
      break;
    }
    case '/details': {
      DetailsPage(root);
      let searchParams = new URLSearchParams(pathWithId);

      const moveId = searchParams.get('filmId');

      navigation(moveId);
      filmDetailsPage(moveId);
      break;
    }
    case '/library': {
      MyFilmLibraryPage(root);

      libraryPage();

      break;
    }
    default: {
      break;
    }
  }
}

init();
