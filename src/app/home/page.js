import React from 'react'
import Hero_Section from '../components/Hero_Section'
import Tools_Section from '../components/Tools_Section'
import Timeline_Section from '../components/Timeline_Section'
import Tab_section from '../components/Tab_section'
import Testimonial_Section from '../components/Testimonial_Section'
import Card_Section from '../components/Card_Section'

const cardData = [
  {
    image: "/img/slide-1.jpg",
    title: "The Power Of Meeting Equity For Successful Hybrid Reunion",
    date: "14 Jul 2023",
    category: "Consulting",
    description:
      "Meeting equity is crucial for successful hybrid meetings, promoting inclusivity...",
    BTNTitle: "Read More",
    link: "/",
  },
  {
    image: "/img/slide2.jpg",
    title: "Why Financial Agility Matters Now More Than Ever",
    date: "10 Jul 2023",
    category: "Finance",
    description: "Adaptive strategies for a changing economic environment...",
    BTNTitle: "Read More",
    link: "/",
  },
  {
    image: "/img/slide3.jpg",
    title: "Top 5 Risk Management Trends of 2023",
    date: "01 Jul 2023",
    category: "Risk",
    description: "Stay ahead by knowing what’s trending in risk strategy...",
    BTNTitle: "Read More",
    link: "/",
  },
  {
    image: "/img/slide4.jpg",
    title: "How Retail Investors Are Changing the Game",
    date: "25 Jun 2023",
    category: "Investing",
    description:
      "The rise of retail investors is reshaping financial markets...",
       BTNTitle: "Read More",
    link: "/",
  },
  {
    image: "/img/slide4.jpg",
    title: "How Retail Investors Are Changing the Game",
    date: "25 Jun 2023",
    category: "Investing",
    description:
      "The rise of retail investors is reshaping financial markets...",
       BTNTitle: "Read More",
    link: "/",
  }
];
const page = () => {
  return (
    <>
      <Hero_Section
        hero_text="Secure Your Portfolio with Confidence."
        hero_peragraph="Market Shield provides advanced risk management solutions designed to protect your investments through intelligent strategies and real-time insights."
        button1="Explore Market Shield Today"
        button2={{
          title: "Sign up Today!",
        }}
        image="/img/banner-img.webp"
      />
      <Tools_Section />

      <Timeline_Section
        title="Market Shield: Precision Protection for Smarter Investing"
        sub_title=""
        description="In an unpredictable market, Market Shield is your ultimate safeguard—combining technology, strategy, and insight to ensure your portfolio thrives no matter the challenges. This innovative feature at the heart of Adaptive 's offerings is designed for modern investors who demand clarity and control over their financial future."
        sub_description=""
        button_title="Explore market Shield"
        Data_features={[
          {
            id: 1,
            title: "Tailored Risk Management",
            content:
              "Market Shield puts the power in your hands, letting you customize protection levels that align with your unique financial goals. From overall portfolio coverage to targeted hedges on concentrated positions, you decide the balance between risk and reward.",
            image: "/img/timeline.png",
          },
          {
            id: 2,
            title: "Strategic Hedging with Precision",
            content:
              "Market Shield puts the power in your hands, letting you customize protection levels that align with your unique financial goals. From overall portfolio coverage to targeted hedges on concentrated positions, you decide the balance between risk and reward.",
            image: "/img/frame.png",
          },
          {
            id: 3,
            title: "Cost Transparency and Efficiency",
            content:
              "Market Shield puts the power in your hands, letting you customize protection levels that align with your unique financial goals. From overall portfolio coverage to targeted hedges on concentrated positions, you decide the balance between risk and reward.",
            image: "/img/timeline.png",
          },
          {
            id: 4,
            title: "Effortless Integration",
            content:
              "Market Shield puts the power in your hands, letting you customize protection levels that align with your unique financial goals. From overall portfolio coverage to targeted hedges on concentrated positions, you decide the balance between risk and reward.",
            image: "/img/frame.png",
          },
          {
            id: 5,
            title: "Smart Insights at a Glance",
            content:
              "Market Shield puts the power in your hands, letting you customize protection levels that align with your unique financial goals. From overall portfolio coverage to targeted hedges on concentrated positions, you decide the balance between risk and reward.",
            image: "/img/timeline.png",
          },
        ]}
      />
      <Tab_section />
      <Testimonial_Section />
      <Card_Section
        title="Stay Updated with Adaptive"
        description="Stay informed with the latest updates from Adaptive, including new tools, features, and special offers. Discover how our innovative strategies continue to redefine risk management and investment solutions for advisors, retail investors, and enterprises."
        cards={cardData}
      />
    </>
  );
}

export default page