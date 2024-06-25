// Resort data with image URLs and locations
const resorts = {
    "Ooty": [
        { name: "Taj Savoy Hotel", image: "https://cdn.sanity.io/images/ocl5w36p/production/8e4657342a8eb1c5e205b7ba3c0d9da9334ff38f-3840x1860.jpg", location: "77, Sylks Road, Ooty, Tamil Nadu" },
        { name: "Sterling Ooty Fern Hill", image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/6d/e5/04/sterling-ooty-fern-hill.jpg", location: "73, Kundah House Road, Ooty, Tamil Nadu" },
        { name: "Club Mahindra Danish Villa", image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200702211310044490-c79bf37cb4d311ed98890a58a9feac02.jpg", location: "30, Sheddon Road, Ooty, Tamil Nadu" }
    ],
    "Kodaikanal": [
        { name: "The Carlton", image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_1649,h_927,r_0,c_crop,q_92,fl_progressive/w_900,f_auto,c_fit/the-carlton/WhatsApp_Image_2021-07-17_l3wqk8", location: "Lake Road, Kodaikanal, Tamil Nadu" },
        { name: "Kodai Resort Hotel", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5e/75/ec/caption.jpg?w=700&h=-1&s=1", location: "Coaker's Walk, Kodaikanal, Tamil Nadu" },
        { name: "Sterling Kodai Lake", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1c/89/9a/kodai-by-the-lake-a-sterling.jpg?w=700&h=-1&s=1", location: "44, Gymkhana Road, Kodaikanal, Tamil Nadu" }
    ],
    "Kanniyakumari": [
        { name: "Sparsa Resort", image: "https://pix10.agoda.net/hotelImages/111/111254/111254_16060213260043054189.jpg?ca=6&ce=1&s=414x232&ar=16x9", location: "Beach Road, Kanniyakumari, Tamil Nadu" },
         { name: "Hotel Sea View", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROiAt-EPQXC76oVclZAK5uZNzOQfVmo0WmQw&s", location: "Beach Road, Kanniyakumari, Tamil Nadu" },
        { name: "The Gopinivas Grand", image: "https://thegopinivasgrand.com/wp-content/uploads/elementor/thumbs/01.-The-Gopinivas-Grand-Kanyakumari-q6nhb5lrqnjkgykry95g4175wzgl51fmp1vgrx1xz4.jpg", location: "East Car Street, Kanniyakumari, Tamil Nadu" }
    ],
    "Yercaud": [
        { name: "GReaT trails yercaud by GRT Hotels", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/e9/a0/a1/poolside-room.jpg?w=600&h=-1&s=1", location: "20, Grange Road, Yercaud, Tamil Nadu" },
        { name: "Sterling Yercaud", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416514648.jpg?k=49363a22fecb52540f21dbf6da6cba7cdce7a266d22b977084dd37da67ed56ca&o=&hp=1", location: "Ladys Seat Road, Yercaud, Tamil Nadu" },
        { name: "Grand Palace Hotel and Spa", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401997566.jpg?k=81323180922e58d01fb1197b799a604242d446d3d75cc765bee477fcb47d43cf&o=&hp=1", location: "Killiyur Falls Road, Yercaud, Tamil Nadu" }
    ],
    "Coonoor": [
        { name: "The Gateway Hotel Church Road Coonoor", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497320918.jpg?k=1ba8ec576814d33d49e4bf9e580fc1da47aa123a022ac9a496ba4564dd8dae06&o=&hp=1", location: "Upper Coonoor, Nilgiris, Coonoor, Tamil Nadu" },
        { name: "Kurumba Village Resort", image: "https://natureresorts.in/kurumba-village-resort/wp-content/uploads/sites/9/2023/09/Copy-of-146A8485-scaled-1.jpg", location: "Hillgrove Post, Kurumbadi, Coonoor, Tamil Nadu" },
        { name: "Tea Nest Resort", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e6/f5/af/teanest-property.jpg?w=700&h=-1&s=1", location: "Singara Estate, Coonoor, Tamil Nadu" }
    ],
    "Rameswaram": [
        { name: "Hyatt Place Rameswaram", image: "https://hblimg.mmtcdn.com/content/hubble/img/rameshwaram/mmt/activities/m_activities_Rameshwaram_Hyatt%20Place%20Rameswaram_l_400_640.jpg?im=Resize=(288,162)", location: "Madurai-Dhanushkodi NH Road, Rameswaram, Tamil Nadu" },
        { name: "Daiwik Hotels Rameswaram", image: "https://static.toiimg.com/photo/58021050.cms", location: "NH-49, Madurai-Dhanushkodi Road, Rameswaram, Tamil Nadu" },
        { name: "Hotel Tamil Nadu", image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202109201737411750-85703b3825dd11ec9a6e0a58a9feac02.jpg", location: "West Car Street, Rameswaram, Tamil Nadu" },
        { name: "Blue Coral Cottage", image: "https://media-cdn.tripadvisor.com/media/photo-s/05/57/95/10/blue-coral-cottage.jpg", location: "East Car Street, Rameswaram, Tamil Nadu" },
        { name: "Rameswaram Grand Palace", image: "https://pix10.agoda.net/hotelImages/781488/-1/4a47dfb58f28692f363e51f996373a16.jpg?ce=0&s=414x232&ar=16x9", location: "11/19, Middle Street, Rameswaram, Tamil Nadu" }
    ]
};


function getResorts() {
    const selectedPlace = document.getElementById("places").value;
    const resortsList = resorts[selectedPlace];

    if (resortsList) {
        const resortsListDiv = document.getElementById("resortsList");
        resortsListDiv.innerHTML = "<h3>Resorts in " + selectedPlace + ":</h3>";

        const ul = document.createElement("ul");
        resortsList.forEach(resort => {
            const li = document.createElement("li");
            li.textContent = resort.name;
            // Attach click event to show image and details
            li.addEventListener("click", function() {
                showResortDetails(resort);
            });
            ul.appendChild(li);
        });

        resortsListDiv.appendChild(ul);
    } else {
        alert("No resorts found for selected place.");
    }
}

// Function to show resort image and details
function showResortDetails(resort) {
    const resortName = document.getElementById("resortName");
    const resortImage = document.getElementById("resortImage");
    const resortLocation = document.getElementById("resortLocation");

    resortName.textContent = resort.name;
    resortImage.src = resort.image;
    resortImage.alt = resort.name + " Image";
    resortLocation.textContent = "Location: " + resort.location;
}
