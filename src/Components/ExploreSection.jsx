// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../Styles/exploresection.css"
import 'boxicons'

function ExploreSection() {
  return (
    <section className="explore-category">
    <h2>Explore By Category</h2>
    <div className="category-grid">
      <div className="category-item">
      <box-icon name='code-alt' color='#00b074' ></box-icon>
        <h3>Software Developer</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon name='user-voice' type='solid' color='#00b074' ></box-icon>
        <h3>Customer Service</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon name='user-circle' type='solid ' color='#00b074'></box-icon>
        <h3>Human Resource</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon name='task' color='#00b074'></box-icon>
        <h3>Project Management</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon name='line-chart' color='#00b074'></box-icon>
        <h3>Business Development</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon name='component' type='solid' color='#00b074'></box-icon>
        <h3>Sales & Communication</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon type='solid' name='book'color='#00b074'></box-icon>
        <h3>Teaching & Education</h3>
        <p>123 Vacancy</p>
      </div>
      <div className="category-item">
      <box-icon name='compass' type='solid' color='#00b074'></box-icon>
        <h3>Design & Creative</h3>
        <p>123 Vacancy</p>
      </div>
    </div>
  </section>
  )
}

export default ExploreSection
