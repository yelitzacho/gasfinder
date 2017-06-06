'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);
  header.append(Input());
  return header;
}

const Input = () => {
	const container = $('<div class="container-header">');
	const nav = $('<nav></nav>');
	const navWrapper = $('<div class="nav-wrapper">');
	const form = $('<form></form>');
	const inputField = $('<div class="input-field">');
	const input = $('<input id="search" type="search" placeholder="Ingresa tu distrito a buscar" required>');
	const label = $('<label class="label-icon" for="search"></label>');
	const iconLabel = $('<i class="material-icons">search</i>');
	const close = $('<i class="material-icons">close</i>');

	label.append(iconLabel);
	inputField.append(input);
	inputField.append(label);
	inputField.append(close);
	form.append(inputField);
	navWrapper.append(form);
	nav.append(navWrapper);
	container.append(nav);

	return container;
}