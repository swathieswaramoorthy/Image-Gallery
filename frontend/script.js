const images = [
    'images/animal1.jpg',
    'images/animal2.jpg',
    'images/animal3.jpg',
    'https://cdn.pixabay.com/photo/2023/02/07/19/53/mountains-7774999_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/09/22/09/39/pantheon-paris-9065570_640.jpg',
    'https://cdn.pixabay.com/photo/2023/12/15/18/07/bean-8451254_640.jpg',
    'https://cdn.pixabay.com/photo/2024/04/18/09/44/polar-bear-8703907_640.jpg',
    'https://cdn.pixabay.com/photo/2024/03/09/06/52/mountains-8622035_640.jpg',
    'https://cdn.pixabay.com/photo/2023/01/16/22/48/bird-7723465_640.jpg',
    'https://cdn.pixabay.com/photo/2023/02/07/19/53/mountains-7774999_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/05/04/11/49/dried-flowers-7173793_640.jpg',
    'https://cdn.pixabay.com/photo/2024/10/11/19/50/animal-9113761_640.jpg',
    'https://cdn.pixabay.com/photo/2022/12/16/16/28/flowers-7660120_640.jpg',
    'https://cdn.pixabay.com/photo/2023/01/14/19/54/christmas-7718958_640.jpg',
    'https://cdn.pixabay.com/photo/2023/03/14/15/55/baby-7852589_640.jpg',
    'https://cdn.pixabay.com/photo/2022/12/05/22/08/open-book-7637805_640.jpg',
    'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_640.jpg',
    'https://cdn.pixabay.com/photo/2024/07/31/12/20/books-8934573_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/02/49/bike-8337261_640.jpg',
    'https://cdn.pixabay.com/photo/2023/02/22/19/13/tea-ceremony-7807230_640.jpg',
    'https://cdn.pixabay.com/photo/2024/05/22/14/54/flowers-8780868_640.jpg',
    'images/places1.jpg',
    'images/places2.jpg',
    // Add more images as needed
];
let currentImageIndex = 0;
function searchImages() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const images = document.querySelectorAll(".gallery .pic");

    images.forEach((image) => {
        const title = image.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            image.style.display = "block"; // Show matching images
        } else {
            image.style.display = "none"; // Hide non-matching images
        }
    });
}

function openModal(index) {
    currentImageIndex = index;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = images[currentImageIndex];
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("modalImage").src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("modalImage").src = images[currentImageIndex];
}

