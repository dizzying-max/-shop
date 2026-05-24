import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import AuthPage from "./components/AuthPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    items: [
      {
      id: 1,
      title: 'Week',
      img:'Week.jpeg',
      desc: 'Подписка на неделю.',
      category: 'chairs',
      price: '100',
      },
      {
        id: 2,
        title: 'Month',
        img: 'Month.jpeg',
        desc: 'Подписка на месяц.',
        category: 'chairs',
        price: '500',
        },
        {
          id: 3,
          title: 'Half a year',
          img: 'UnderTheYear.jpeg',
          desc: 'Подписка на пол года.',
          category: 'chairs',
          price: '1500',
          },
          {
            id: 4,
            title: 'One year',
            img: 'OneYear.jpeg',
            desc: 'Подписка на год.',
            category: 'chairs',
            price: '3000',
            },
            {
              id: 5,
              title: 'Two years',
              img: 'OneYear.jpeg',
              desc: 'Подписка на 2 года.',
              category: 'chairs',
              price: '3000',
              },
    ]
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={
              <>
                <Header />
                <Items items={this.state.items} />
                <Footer />
              </>
            } />
            
            {/* Страница входа - Header без корзины и presentation */}
            <Route path="/login" element={
              <>
                <Header />
                <AuthPage />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;