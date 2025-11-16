import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Signup failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div style={styles.page}>
      <div className= "container">
        <div  className ="row p-5 mt-5   text-center" >
          <h1 style={styles.title}>Open a free demat and trading account online</h1>
          <p style={styles.subtitle}>
            Start investing brokerage free and join a community of 1.6+ crore investors and traders.
          </p>
        </div>
        

      </div>
      
     

      <div style={styles.container}>
        <div style={styles.textSection}>
          
          <img src="media/kiteA.svg" alt="Kite Platform" style={styles.image} />
        </div>

        <div style={styles.signupCard}>
          <h2 style={styles.cardTitle}>Signup now</h2>
          <p style={styles.cardSub}>Or track your existing application</p>

          <form onSubmit={handleSignup} style={styles.form}>
            <div style={styles.mobileContainer}>
              <span style={styles.countryCode}>+91</span>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                onChange={handleChange}
                style={styles.mobileInput}
                required
              />
            </div>

            <button type="submit" style={styles.button}>Get OTP</button>
          </form>

          <p style={styles.terms}>
            By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>.
          </p>
          <p style={styles.nriText}>
            Looking to open NRI account? <a href="#">Click here</a>
          </p>
        </div>
      </div>
      <div className= "container">
         <div className="row p-5 mt-5 mb-5">
          <h3 className='fs-3 mb-5 mt-5 text-muted text-center'>Investment options with Zerodha demat account</h3>
          
      <div className="col-3 p-5 mt-2 mb-2">
        <img src="media/fo.svg" alt="Bonds" />
      </div>
      <div className="col-3 p-5 mt-2 mb-2">
        <h4 className=''>
          IPO
        </h4>
        <p>Apply to the latest IPOs instantly via UPI</p>
        
      </div>
      <div className="col-3 p-5 mt-2 mb-2">
        <img src="media/fo.svg" alt="Bonds" />
      </div>
      <div className="col-3 p-5 ">
        <h4 className=''>
          Futures & options
        </h4>
        <p>Hedge and mitigate market risk through simplified F&O trading</p>
        
      </div>
       <div className="col-3 p-5 mt-2 mb-2">
        <img src="media/fo.svg" alt="Bonds" />
      </div>
      <div className="col-3 p-5 mt-2 mb-2">
        <h4 className=''>
          IPO
        </h4>
        <p>Apply to the latest IPOs instantly via UPI</p>
        
      </div>
      <div className="col-3 p-5 mt-2 mb-2">
        <img src="media/fo.svg" alt="Bonds" />
      </div>
      <div className="col-3 p-5 ">
        <h4 className=''>
          Futures & options
        </h4>
        <p>Hedge and mitigate market risk through simplified F&O trading</p>
        
      </div>
      
       <div class="d-grid gap-2 col-6 mx-auto">
         <button class="btn btn-primary" type="button" >Expolre Investments</button>
          
         </div>

         </div>
         <div className="container-fluid" style={{backgroundColor:"#f8f9fa"}} >
          <div className="row p-5 mt-5 mb-5">
          <h2 className="fs-3 mb-5 mt-5 text-muted text-center"> Steps to open a demat account with Zerodha</h2>
          <div className="col p-5 mt-2 mb-2 ">
            <img src="media/steps.svg" alt="Steps to open account"  />
          </div>
          <div className=" col p-5 mt-2 mb-2">
            <h3 className="fs-3">Enter the requested details</h3>
            <hr/>
            <h3 className="fs-3">Complete e-sign & verification</h3>
            <hr/>
            <h3 className="fs-3">Start investing!</h3>
          </div>
          </div>
          
         </div>
         <div className="container-fluid" >
          <div className="row p-5 mt-5 mb-5">
          <div className="col  ">
            <img src="media/acop.svg" alt="Steps to open account" style={{width:"500px"}}  />
            <h4 classsName=" fs-3 ">Benefits of opening a Zerodha demat account</h4>
          </div>
          <div className=" col p-5 mt-2 mb-2">
            <h3 className="fs-3">Unbeatable pricing</h3>
            <p className="">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
            <h3 className="fs-3">Best investing experience</h3>
            <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
            <h3 className="fs-3">No spam or gimmicks</h3>
            <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
            <h3 className="fs-3">The Zerodha universe</h3>
            <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
          </div>
          </div>
          <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
            </div>
          
         </div>
         
    </div>
    </div>
    
  );
}

const styles = {
  page: {
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#fff",
    color: "#222",
    margin: 0,
    padding: 0
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 80px",
    borderBottom: "1px solid #eee"
  },
  logo: { height: "25px" },
  nav: { display: "flex", gap: "24px", fontSize: "15px" },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 100px",
    flexWrap: "wrap"
  },
  textSection: { flex: "1", minWidth: "400px", paddingRight: "60px" },
  title: { fontSize: "32px", marginBottom: "10px" },
  subtitle: { fontSize: "18px", color: "#666", marginBottom: "40px" },
  image: { width: "90%", borderRadius: "8px" },
  signupCard: {
    flex: "0 0 350px",
    padding: "40px 30px",
    border: "1px solid #e3e3e3",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center"
  },
  cardTitle: { fontSize: "22px", marginBottom: "8px" },
  cardSub: { color: "#777", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  mobileContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden"
  },
  countryCode: {
    background: "#f5f5f5",
    padding: "10px 15px",
    borderRight: "1px solid #ccc",
    color: "#333",
    fontSize: "16px"
  },
  mobileInput: {
    flex: 1,
    padding: "10px 12px",
    fontSize: "16px",
    border: "none",
    outline: "none"
  },
  button: {
    background: "#387ed1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer"
  },
  terms: { fontSize: "13px", color: "#777", marginTop: "12px" },
  nriText: { fontSize: "13px", marginTop: "10px", color: "#666" }
};

export default Signup;

