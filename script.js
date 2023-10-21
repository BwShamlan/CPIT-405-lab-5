function createElement(photoURL) {
    const imgElem = document.createElement('img');
    imgElem.src = photoURL;
    imgElem.alt = 'Photo of a cat.';
    return imgElem;
}

function addPhotoToGalleryDiv(imgElem) {
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElem);

    // Add zoom buttons and get references to them and to access to them in addDeleteButton function
    const { zoomInButton, zoomOutButton } = addZoomButtons(imgElem);
    addDeleteButton(imgElem, zoomInButton, zoomOutButton);
}

function addDeleteButton(imgElem, zoomInButton, zoomOutButton) {
    const DeleteButton = document.createElement('button');
    DeleteButton.innerText = 'X';
    DeleteButton.id = 'deletePhotoBtn';
    DeleteButton.addEventListener('click', function () {
        imgElem.remove();
        DeleteButton.remove();
        zoomInButton.remove();
        zoomOutButton.remove();
    });
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(DeleteButton);
}

function addPhoto() {
    const photoURL = prompt("Enter the URL of the photo:");
    const imgElem = createElement(photoURL);
    const { zoomInButton, zoomOutButton } = addPhotoToGalleryDiv(imgElem);
    addDeleteButton(imgElem, zoomInButton, zoomOutButton);
}

function addZoomButtons(imgElem) {
    const zoomInButton = document.createElement('button');
    zoomInButton.innerText = '+';
    zoomInButton.id = 'zoomPhotoBtns';
    zoomInButton.addEventListener('click', function () {
        zoomIn(imgElem);
    });

    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerText = '-';
    zoomOutButton.id = 'zoomPhotoBtns';
    zoomOutButton.addEventListener('click', function () {
        zoomOut(imgElem);
    });

    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(zoomInButton);
    photoGalleryDiv.appendChild(zoomOutButton);

    return { zoomInButton, zoomOutButton };
}

function zoomIn(imgElem) {
    const currentWidth = imgElem.width;
    const currentHeight = imgElem.height;

    imgElem.style.maxWidth = (currentWidth * 1.1) + 'px';
    imgElem.style.maxHeight = (currentHeight * 1.1) + 'px';
}

function zoomOut(imgElem) {
    const currentWidth = imgElem.width;
    const currentHeight = imgElem.height;

    imgElem.style.maxWidth = (currentWidth / 1.1) + 'px';
    imgElem.style.maxHeight = (currentHeight / 1.1) + 'px';
}

const addPhotoBtn = document.getElementById('addPhotoBtn');
addPhotoBtn.addEventListener('click', addPhoto);
