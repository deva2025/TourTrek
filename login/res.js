// Restaurant data with image URLs and locations
const restaurants = {
    "Ooty": [
        { name: "Earl's Secret", image: "https://res.cloudinary.com/simplotel/image/upload/x_43,y_0,w_690,h_517,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/the-littlearth-group/D4_DSC_4419_bfgvmj", location: "King's Cliff, Havelock Road, Ooty, Tamil Nadu "},
        { name: "Hyderabad Biryani House", image: "https://hyderabadbiryanihouse.ca/wp-content/uploads/2022/05/rsw_3070m-1920x1282.webp", location: "Westbury Road, Mysore Road, Ooty, Tamil Nadu" },
        { name: "Shinkow's Chinese Restaurant", image: "https://b.zmtcdn.com/data/reviews_photos/c08/7bcc48eae033ae00e98b16594254dc08_1542865457.jpg", location: "52E, Commissioner Road, Ooty, Tamil Nadu" }
    ],
    "Kodaikanal": [
        { name: "Tava", image: "https://b.zmtcdn.com/data/pictures/4/18746784/f0005ea686d8ff7de8e95b6a1627594f.jpg", location: "PT Road, Kodaikanal, Tamil Nadu" },
        { name: "Cloud Street", image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/25/5d/e7/cafe.jpg", location: "Poet Tyagaraja Road, Kodaikanal, Tamil Nadu" },
        { name: "The Royal Tibet", image: "https://media-cdn.tripadvisor.com/media/photo-s/08/35/7b/a4/royal-tibet.jpg", location: "PT Road, Kodaikanal, Tamil Nadu" }
    ],
    "Kanniyakumari": [
        { name: "The Ocean Restaurant", image: "https://media-cdn.tripadvisor.com/media/photo-s/08/8c/ff/6e/the-ocean-restaurant.jpg", location: "Beach Road, Kanniyakumari, Tamil Nadu" },
        { name: "Sea View Restaurant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohLxHDYBNp3tKxtPkuuTMkT40tsRPr8Gz6Q&s", location: "Beach Road, Kanniyakumari, Tamil Nadu" },
        { name: "Triveni Restaurant", image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/39/07/88/restaurant.jpg", location: "Beach Road, Kanniyakumari, Tamil Nadu" }
    ],
    "Yercaud": [
        { name: "Sweet Rascal", image: "https://content3.jdmagicbox.com/comp/yercaud/w8/9999p4181.4181.130519165318.a2w8/catalogue/sweet-rascal-yercaud-north-indian-restaurants-aar3no3kwj.jpg", location: "Ondikadai, Yercaud, Yercaud, Tamil Nadu" },
        { name: "The Orange Restaurant", image: "https://media-cdn.tripadvisor.com/media/photo-s/17/10/34/21/orange-restaurant-at.jpg", location: "Lake Road, Yercaud, Tamil Nadu" },
        { name: "Beans N Brews", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8b/2d/0d/tangerine-live-counter.jpg?w=600&h=-1&s=1", location: "Kottachedu, Yercaud, Tamil Nadu" }
    ],
    "Coonoor": [
        { name: "Open Kitchen", image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/9d/9c/99/open-kitchen-coonoor.jpg", location: "57, Brooklands Road, Coonoor, Tamil Nadu" },
        { name: "Cafe Diem", image: "https://media-cdn.tripadvisor.com/media/photo-s/16/fa/74/40/cafe-diem-interiors.jpg", location: "12B, Figure of 8 Road, Coonoor, Tamil Nadu" },
        { name: "Hopscotch", image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/ac/3f/77/hopscotch-coonoor.jpg", location: "17/68A, Lower Coonoor Road, Coonoor, Tamil Nadu" }
    ],
    "Rameswaram": [
        { name: "Ahaan Restaurant", image: "https://media-cdn.tripadvisor.com/media/photo-w/2a/90/ee/4b/ahaan-restaurant-daiwik.jpg", location: "1/2, Agni Theertham Road, Rameswaram, Tamil Nadu" },
        { name: "Cafe", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ab/c8/a3/cafe.jpg?w=600&h=-1&s=1", location: "4/13A, South Car Street, Rameswaram, Tamil Nadu" },
        { name: "The Curry", image: "https://media-cdn.tripadvisor.com/media/photo-w/18/ac/af/2e/overview-of-dining-area.jpg", location: "13/2, Middle Street, Rameswaram, Tamil Nadu" }
    ]
};

function getRestaurants() {
    const selectedPlace = document.getElementById("places").value;
    const restaurantsList = restaurants[selectedPlace];

    if (restaurantsList) {
        const restaurantsListDiv = document.getElementById("restaurantsList");
        restaurantsListDiv.innerHTML = "<h3>Restaurants in " + selectedPlace + ":</h3>";

        const ul = document.createElement("ul");
        restaurantsList.forEach(restaurant => {
            const li = document.createElement("li");
            li.textContent = restaurant.name;
        
            li.addEventListener("click", function() {
                showRestaurantsDetails(restaurant);
            });
            ul.appendChild(li);
        });

        restaurantsListDiv.appendChild(ul);
    } else {
        alert("No restaurants found for selected place.");
    }
}

function showRestaurantsDetails(restaurant) {
    const restaurantName = document.getElementById("restaurantName");
    const restaurantImage = document.getElementById("restaurantImage");
    const restaurantLocation = document.getElementById("restaurantLocation");
    
   

    restaurantName.textContent = restaurant.name;
    restaurantImage.src = restaurant.image;
    restaurantImage.alt = restaurant.name + " Image";
    restaurantLocation.textContent = "Location: " + restaurant.location;
}
