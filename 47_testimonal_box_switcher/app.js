const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo itaque distinctio facere nemo unde a eum amet natus veniam ratione necessitatibus'  
    },
    {
        name: 'Sasha',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/women/40.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo itaque distinctio facere nemo unde a eum amet natus veniam ratione necessitatibus'  
    },
    {
        name: 'Pasha',
        position: 'Accountant',
        photo: 'https://randomuser.me/api/portraits/women/41.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo o facere nemo unde a eum amet natus veniam ratione necessitatibus'  
    },
    {
        name: 'Nikita',
        position: 'Designer',
        photo: 'https://randomuser.me/api/portraits/women/42.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo itaque distinctio necessitatibus'  
    },
]

let idx = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)