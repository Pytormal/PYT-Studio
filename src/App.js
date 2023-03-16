import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";

import logout from "./components/utils/logout";

import Home from "./components/Home";
import Song from "./components/Song";
import ListSongs from "./components/ListSongs";
import Socials from "./components/utils/Social Media/socials"
import UploadSongs from "./components/forms/MusicForm";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import PollHome from "./components/PollHome";
import Videogallery from "./components/Video-gallery";
import Photogallery from "./components/Photos";
// import MessageForm from "./components/forms/MessageForm"
import { Min5Timer, Min10Timer, Min30Timer } from "./components/timer.js";

// import PageDev from "./components/utils/PageinDev.js"

// import Credit from "./components/Credit";

// STYLES //
import "./components/styles/reset.css";
import "./components/styles/App.css";
import "./components/styles/home.css";
import "./components/styles/formStyle.css";
// import "./components/styles/credit.css";
import "./components/styles/song-list.css";
import "./components/styles/polls.css";
import "./components/styles/video-gallery.css";
import "./components/styles/dualscreen.css";
import "./components/styles/responsive.css";
import "./components/styles/photos.css"
import "./components/styles/socials.css";

function App() {
  return (
    <>
      <section id="split">
        <section className="all-links">
          <section className="left-links links">
            <Link to="/">Home</Link>
            {/* <Link to="/register">Register Here</Link> does not work */}
           <Link to="/login" onClick={logout}>
              Log Out
            </Link>
            <Link to="/songs_list">Songs</Link> {/* songs used in videos*/}
            <Link to="/video-gallery">Videos</Link>
<Link to="/photo-gallery">Photos</Link>
            <Link to="/socials">Social Media</Link>
          </section>
          <section className="left-links2 links">
            {/* <Link to="/login">Login</Link> does not work */}
            {/* <Link to="/polls-hub">Polls</Link> */}
            {/*used for getting client info*/}
            {/* <Link to="/timers">Timers</Link>  */}
            {/* <Link to="/upload-song">Upload Songs here</Link> */}
            <Link to="/video-gallery">Videos</Link>
<Link to="/photo-gallery">Photos</Link>
            <Link to="/socials">Social Media</Link>
          </section>

          {/* <section id="duo">  <MessageForm /></section> */}
        </section>

        <div className="App">
          <Switch className="pick">
            <Route path="/songs_list/:music_id">
              <Song props={ListSongs} />
            </Route>
            <Route exact path="/songs_list">
              <ListSongs props={ListSongs} />
            </Route>
            <Route path="/socials">
              <Socials />
            </Route>

            <Route path="/video-gallery">
              <Videogallery />
            </Route>

<Route path="/photo-gallery">
              <Photogallery />
            </Route>

            <Route path="/polls-hub">
              <PollHome />
            </Route>
            <Route path="/timers">
              <Min5Timer />
              <Min10Timer />
              <Min30Timer />
            </Route>

            <PrivateRoute
              exact
              path="/upload-song"
              component={UploadSongs}
            ></PrivateRoute>

            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </section>
      <footer>
        <ul>
<div id="smart-button-container">
      <div style="text-align: center;">
        <div style="margin-bottom: 1.25rem;">
          <p>Film Session</p>
          <select id="item-options"><option value="3 Hour Session (up to 15 minutes of graded footage)" price="300">3 Hour Session (up to 15 minutes of graded footage) - 300 USD</option><option value="2 Hour Session (up to 10minutes of graded footage)" price="200">2 Hour Session (up to 10minutes of graded footage) - 200 USD</option><option value="1 Hour Session (up to 6 minutes of graded footage)" price="100">1 Hour Session (up to 6 minutes of graded footage) - 100 USD</option><option value="Raw footage (3 hours) " price="60">Raw footage (3 hours)  - 60 USD</option><option value="Raw footage (2 hours) " price="45">Raw footage (2 hours)  - 45 USD</option><option value="Raw footage (1 hour) " price="20">Raw footage (1 hour)  - 20 USD</option></select>
          <select style="visibility: hidden" id="quantitySelect"></select>
        </div>
      <div id="paypal-button-container"></div>
      </div>
    </div>
    <script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
    <script>
      function initPayPalButton() {
        var shipping = 50;
        var itemOptions = document.querySelector("#smart-button-container #item-options");
    var quantity = parseInt();
    var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
    if (!isNaN(quantity)) {
      quantitySelect.style.visibility = "visible";
    }
    var orderDescription = 'Film Session';
    if(orderDescription === '') {
      orderDescription = 'Item';
    }
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'silver',
        layout: 'horizontal',
        label: 'paypal',
        
      },
      createOrder: function(data, actions) {
        var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
        var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
        var tax = (8 === 0 || false) ? 0 : (selectedItemPrice * (parseFloat(8)/100));
        if(quantitySelect.options.length > 0) {
          quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
        } else {
          quantity = 1;
        }

        tax *= quantity;
        tax = Math.round(tax * 100) / 100;
        var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
        priceTotal = Math.round(priceTotal * 100) / 100;
        var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;

        return actions.order.create({
          purchase_units: [{
            description: orderDescription,
            amount: {
              currency_code: 'USD',
              value: priceTotal,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: itemTotalValue,
                },
                shipping: {
                  currency_code: 'USD',
                  value: shipping,
                },
                tax_total: {
                  currency_code: 'USD',
                  value: tax,
                }
              }
            },
            items: [{
              name: selectedItemDescription,
              unit_amount: {
                currency_code: 'USD',
                value: selectedItemPrice,
              },
              quantity: quantity
            }]
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');

        });
      },
      onError: function(err) {
        console.log(err);
      },
    }).render('#paypal-button-container');
  }
  initPayPalButton();
    </script>
          <nav></nav>
        </ul>
      </footer>
    </>
  );
}

export default App;
