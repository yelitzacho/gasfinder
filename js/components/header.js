'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);
  header.append(Search());
  return header;
}