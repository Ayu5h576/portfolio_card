const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const wrapper = document.querySelector('.wrapper'); // Select the card wrapper

// Modal open function
const openModal = () => {
    console.log('modal is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
    wrapper.classList.add('blurred'); // Add blur effect
};

// Modal close function
const closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
    wrapper.classList.remove('blurred'); // Remove blur effect
};
