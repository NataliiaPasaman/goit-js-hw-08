// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listGallery = document.querySelector(".gallery");

const linksGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
         <a class="gallery__item" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             alt="${description}"
           />
         </a>
         `;
  })
  .join(" ");

listGallery.insertAdjacentHTML("beforeend", linksGallery);

let galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
