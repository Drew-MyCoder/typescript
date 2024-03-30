import logo from './assets/sofa-logo.png'
import './App.css'

function App() {
 
  const reviewTotalDisplay = document.querySelector('#reviews') as HTMLInputElement

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal (value: number) {
  reviewTotalDisplay.innerHTML = 'review total is ' + value.toString()
};

showReviewTotal(reviews.length)

  
  return (
    <>
      <div className="nav-bar">
           <div className="logo">
            <img src={logo} alt="" />
           </div>
           <h3 className="user-container">Welcome
               <span id="returning-user"></span>
               <span id="user"></span>
            </h3>
       </div>
       <div className="container">
         <h5 id="reviews"></h5>         
       </div> 
    </>
  )
}

export default App
