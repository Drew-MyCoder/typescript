import logo from './assets/sofa-logo.png'
import './App.css'
import './index.css'
import { showReviewTotal, populateUser, getTopTwoReviews } from './pages/utils'
import { Review , Property} from './pages/interfaces'
import { LoyaltyUser, Permissions } from './pages/enums'
import MainProperty from './pages/classes'


const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

const reviews : Review[] = [
  {
      name: 'Sheia',
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: '01-04-2021'
  },
  {
      name: 'Andrzej',
      stars: 3,
      loyaltyUser: LoyaltyUser.BRONZE_USER,
      date: '28-03-2021'
  },
  {
      name: 'Omar',
      stars: 4,
      loyaltyUser: LoyaltyUser.SILVER_USER,
      date: '27-03-2021'
  },
]

// User
const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties : Property[] = [
  {
      image: '../src/assets/colombia-property.jpg',
      title: 'Colombian Shack',
      price: 45,
      location: {
          firstLine: 'shack 37',
          city: 'Bogota',
          code: 45632,
          country: 'Colombia'
      },
      contact: [ +1123495082908 ,'marywinkle@gmail.com'],
      isAvailable: true  
  },
  {
      image: '../src/assets/poland-property.jpg',
      title: 'Polish Cottage',
      price: 30,
      location: {
          firstLine: 'no 23',
          city: 'Gdansk',
          code: 343903,
          country: 'Poland'
      },
      contact: [+1123495082908, 'garydavis@hotmail.com'],
      isAvailable: false 
  },
  {
      image: '../src/assets/london-property.jpg',
      title: 'London Flat',
      price: 25,
      location: {
          firstLine: 'flat 15',
          city: 'London',
          code: 35433,
          country: 'United Kingdom',
      },
      contact: [ +1123495082908, 'andyluger@aol.com'],
      isAvailable: true
  },
  {
    image: '../src/assets/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 35,
    location: {
        firstLine: 'Room 4',
        city: 'Malia',
        code: 45334,
        country: 'Malaysia'
    },
    contact: [ +60349822083, 'lee34@gmail.com'],
    isAvailable: false
}
]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)


// Add the properties
for (let i = 0; i < properties.length; i++){
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  propertyContainer?.appendChild(card)
}

let count = 0
function addReviews(array : Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['kumasi', '4:08', 35]

footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

let yourMainProperty = new MainProperty(
  '../src/assets/italian-property.jpg', 
  'Italian House',
  [{
      name: 'Olive',
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: '12-04-2021'
  }] )

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

function App() {
  
  
  return (
    <>
     {/* <div className="nav-bar">
       <img src='./src/assets/sofa-logo.png' alt="" />
      <h3 className="user-container">Welcome
          <span id="returning-user"></span>
          <span id="user"></span>
       </h3>
  </div>
  <div className="container">
    <h5 id="reviews">Review total {showReviewTotal.length}| 
    last reviewed by {(showReviewTotal.name)}</h5>
           
    <h3>Other Properties recommended to you:</h3> 
    <div className="properties"></div>
  </div> */}
    </>
  )
}

export default App
