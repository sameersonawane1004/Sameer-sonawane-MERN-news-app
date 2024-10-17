// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsCard from './components/NewsCard';
import IndividualNews from './components/IndividualNews';
import AddNewsModal from './components/AddNewsModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import env from './img/environment.png';
import gov from './img/housing.png';
import ai from './img/ai.jpg';
import ten from './img/Getty.webp';

function App() {
  const [newsList, setNewsList] = useState([
    { id: '1', title: 'Study Shows Promising Results for New COVID-19 Treatment', extraDescription: 'A recent study has revealed promising results for a new COVID-19 treatment Researchers found that the treatment, which targets a specific protein essential for viral replication, significantly reduced the severity of symptoms in hospitalized patients. Initial trials showed a marked decrease in recovery time and hospitalization rates among those treated compared to placebo. The treatments mechanism involves blocking viral spread and enhancing the immune response offering potential as a critical tool in combating the ongoing pandemic Further trials and regulatory approvals are now anticipated to validate its efficacy and safety for broader use.', date: '02/10/2024', image: ten },
    { id: '2', title: 'Tech Firm Unveils Revolutionary AI Set to Transform Industry',  extraDescription: ' A leading tech firm has unveiled a   AI technology poised to revolutionize the industry. The new AI system, powered by advanced machine learning algorithms, is designed to significantly enhance automation, decision-making, and predictive capabilities across sectors. It promises to streamline operations, improve efficiency, and enable businesses to analyze vast amounts of data in real-time. The AIs versatility makes it applicable in healthcare, finance, and manufacturing, among other fields. Industry experts are already calling it a game-changer, anticipating widespread adoption in the coming years. The firm is set to roll out the AI for commercial use by next quarter.', date: '03/10/2024', image: ai },
    { id: '3', title: 'Climate Change and Sustainability',   extraDescription: 'A new study published in Nature Climate Change reveals that global warming is causing sea levels to rise at an alarming rate. Scientists predict that coastal cities around the world could face devastating flooding and erosion if emissions continue unabated. The study findings underscore the urgency of addressing climate change and transitioning to sustainable energy sources. ', date: '05/10/2024', image: env },
    { id: '4', title: 'Government New Affordable Housing Scheme',  extraDescription: 'The Indian government has announced a new affordable housing scheme aimed at providing affordable homes to low-income families. The scheme offers subsidies, interest rate reductions, and other incentives to make homeownership more accessible. The government hopes that this initiative will help address the housing shortage in the country. ', date: '06/10/2024', image: gov }
  ]);

  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const addNewsHandler = (newNews) => {
    setNewsList([...newsList, newNews]); // Function to add new news
    setShowModal(false); // Close the modal after adding news
  };

  const editNewsHandler = (id, updatedData) => {
    const updatedNewsList = newsList.map((news) =>
      news.id === id ? { ...news, ...updatedData } : news
    );
    setNewsList(updatedNewsList); // Update the state with the new news list
  };

  const deleteNewsHandler = (id) => {
    const updatedNewsList = newsList.filter((news) => news.id !== id);
    setNewsList(updatedNewsList); // Update the state with the filtered news list
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar with Add Icon */}
        <nav className="navbar">
          <h1>Daily News</h1>
          <Link to="#" className="add-icon" onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i>
          </Link>
        </nav>

        {showModal && <AddNewsModal addNews={addNewsHandler} closeModal={() => setShowModal(false)} />}
        
        <Routes>
          <Route path="/" element={
            <div className="news-list">
              {newsList.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          } />
          <Route path="/news/:id" element={<IndividualNews newsList={newsList} editNews={editNewsHandler} deleteNews={deleteNewsHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
