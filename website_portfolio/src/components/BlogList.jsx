import React, { useState } from "react";
import "../App.css";
const articles = [
  {
    id: 1,
    title: "The Importance Of User In UI/UX Design",
    description: "Discover why the user is central to design decisions.",
    category: "UI/UX Design",
    date: "11 Sep 25",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "The Behind Color Choices In UI/UX Design",
    description: "Explore the psychology and use of colors in design.",
    category: "Visual Design",
    date: "11 Sep 25",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "The Behind Color Choices In UI/UX Design",
    description: "Explore the psychology and use of colors in design.",
    category: "Visual Design",
    date: "11 Sep 25",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60",
  },
  
  // Add more articles as needed
];

export default function BlogList() {
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="container-fluid" id="blog">
        <div className="container">
             <div className="blog-list-container" onMouseMove={hoveredArticle ? handleMouseMove : null}>
                <h2>My Recent Blog & Articles</h2>
                <div className="articles-list">
                    {articles.map((article) => (
                    <div
                        key={article.id}
                        className="article-item"
                        onMouseEnter={() => setHoveredArticle(article)}
                        onMouseLeave={() => setHoveredArticle(null)}
                    >
                        <div className="article-info">
                        <h3 className="title">{article.title}</h3>
                        <p className="description">{article.description}</p>
                        <div className="meta-row">
                            <span className="date">{article.date}</span>
                            <span className="category">{article.category}</span>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                {hoveredArticle && (
                    <div
                    className="hover-image-container"
                    style={{
                        top: mousePos.y + "px",
                        left: mousePos.x + "px",
                        transform: "translate(-50%, -50%) rotate(-15deg)",
                    }}
                    >
                    <img src={hoveredArticle.image} alt={hoveredArticle.title} className="hover-image" />
                    <div className="hover-text">
                        <h4>{hoveredArticle.title}</h4>
                        <p>{hoveredArticle.category}</p>
                    </div>
                    </div>
                )}
                </div>
        </div>
    </div>
  );
}