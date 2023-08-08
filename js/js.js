'use strict';

const ads = document.querySelector('.ads');
ads.remove();

const container = document.querySelector('.container');
const blocks = container.querySelector('.items');

const item = container.querySelectorAll('.item');
item[4].before(item[0]);

const block2PropsList = container.querySelectorAll('.item.item_two .props__item');
const block4 = container.querySelectorAll('.item.item_four .props__item');
block4[3].before(block2PropsList[3]);

const block5PropsList = container.querySelector('.item.item_three .props__list');
const block3PropsList = container.querySelector('.item.item_five .props__list');
const cloneBlock3 = block3PropsList.cloneNode(true);
block5PropsList.replaceWith(cloneBlock3);
block3PropsList.replaceWith(block5PropsList);

const block6PropsList = container.querySelectorAll('.item.item_six .props__item');
block2PropsList[8].append(block6PropsList[8]);
block2PropsList[8].append(block6PropsList[9]);


const block3Img = container.querySelector('.item.item_three .item__image ');
const copyBlock3ImgText = block3Img.alt;
const block3Title = container.querySelector('.item.item_three .content .item__title').cloneNode();
block3Title.append(copyBlock3ImgText);
container.querySelector('.item.item_three .content .item__title').replaceWith(block3Title);


const block2Title = container.querySelector('.item.item_two .item__title ').cloneNode(true);

const block5Title = container.querySelector('.item.item_five .item__title ').cloneNode(true);

const block6Title = container.querySelector('.item.item_six .item__title ').cloneNode(true);

container.querySelector('.item.item_two .item__title ').replaceWith(block5Title);
container.querySelector('.item.item_five .item__title ').replaceWith(block6Title);
container.querySelector('.item.item_six .item__title ').replaceWith(block2Title);
