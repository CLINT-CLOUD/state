import React, { Component } from "react";
import IMG_9271 from './assets/IMG_9271.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Clinton Otieno",
        bio: "I am a software developer passionate about React.",
        imgSrc: IMG_9271.jpg,
        profession: "Frontend Developer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    const containerStyle = {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
    };

    const buttonStyle = {
      background: "linear-gradient(90deg, #ff8a00, #e52e71)",
      border: "none",
      borderRadius: "30px",
      padding: "12px 30px",
      fontSize: "18px",
      color: "#fff",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(229, 46, 113, 0.5)",
      transition: "transform 0.2s ease",
    };


    const profileCardStyle = {
      marginTop: "30px",
      background: "rgba(255, 255, 255, 0.15)",
      padding: "25px",
      borderRadius: "20px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      maxWidth: "350px",
      textAlign: "center",
    };

    const imgStyle = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      border: "4px solid #fff",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      marginBottom: "20px",
      objectFit: "cover",
    };

    const nameStyle = {
      fontSize: "2rem",
      marginBottom: "10px",
      fontWeight: "700",
      textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
    };

    const bioStyle = {
      fontStyle: "italic",
      marginBottom: "15px",
      lineHeight: "1.4",
    };

    const professionStyle = {
      fontWeight: "600",
      fontSize: "1.1rem",
      color: "#ffd700",
      marginBottom: "0",
    };

    const timeStyle = {
      marginTop: "40px",
      fontSize: "1.2rem",
      fontWeight: "500",
      textShadow: "1px 1px 6px rgba(0,0,0,0.3)",
    };

    return (
      <div style={containerStyle}>
        <button
          style={buttonStyle}
          onClick={this.toggleShow}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={profileCardStyle}>
            <img src={person.imgSrc} alt="profile" style={imgStyle} />
            <h1 style={nameStyle}>{person.fullName}</h1>
            <p style={bioStyle}>"{person.bio}"</p>
            <p style={professionStyle}>{person.profession}</p>
          </div>
        )}

        <p style={timeStyle}>Time since mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
