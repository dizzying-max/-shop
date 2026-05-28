import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import AuthPage from "./components/AuthPage";
import RegisterPage from "./components/RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'Week', img: 'Week.jpeg', desc: 'Подписка на неделю.', price: '100' },
        { id: 2, title: 'Month', img: 'Month.jpeg', desc: 'Подписка на месяц.', price: '500' },
        { id: 3, title: 'Half a year', img: 'UnderTheYear.jpeg', desc: 'Подписка на пол года.', price: '1500' },
        { id: 4, title: 'One year', img: 'OneYear.jpeg', desc: 'Подписка на год.', price: '3000' },
        { id: 5, title: 'Two years', img: 'OneYear.jpeg', desc: 'Подписка на 2 года.', price: '3000' },
      ]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Items items={this.state.items} />
                <Footer />
              </>
            } />

            <Route path="/login" element={
              <>
                <Header />
                <AuthPage />
              </>
            } />

            <Route path="/register" element={
              <>
                <Header />
                <RegisterPage />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;