function uploadImage() {
  const fileInput = document.getElementById('imageUpload');
  const textInput = document.getElementById('imageText');
  const uploadedImages = document.getElementById('uploadedImages');

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const imageSrc = e.target.result;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');

    const image = document.createElement('img');
    image.src = imageSrc;

    const text = document.createElement('p');
    text.textContent = textInput.value;

    imageContainer.appendChild(image);
    imageContainer.appendChild(text);
    uploadedImages.appendChild(imageContainer);
  }

  reader.readAsDataURL(file);
}
