import React,  { useRef } from 'react'
import img2 from '../Images/cross.png'
import img5 from '../Images/boy.png'
import { useState } from 'react'
import axios from 'axios'
import './CSS/ContactStyle.css'
import { Link,useNavigate} from 'react-router-dom'


function Contact(){
  const form = useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const newNote ={
      name :user.name,
      email:user.email,
      city:user.city,
      state:user.state,
      message:user.message
    }
    axios
      .post("https://potfolio-backend-q9ga.vercel.app/contact", newNote)
      .then((res) => {
        console.log(res);
        alert("Your Response has been recorded successfuly");
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        alert("Some error occured");
      });
  };

  const navigate = useNavigate();

 

  return (
    <div className="container-fluid" id="jst">
      <div>
        <button id="btncross" onClick={() => navigate(-1)}>
          <img id="cross" className="img-fluid" src={img2} alt="Images" />
        </button>
      </div>
      <center>
        <img id="imgcontact" className="img-fluid" src={img5} alt="Images" />
      </center>

      <div className="empty">
        <h5>
          Thanks for taking the time to reach out. How can I help you today?
        </h5>
        <section className="formsection"> 

          <form method="post" class="row g-5"  ref={form} >
            <div class="col-md-6">
              <label for="text" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="City"
                name="city"
                placeholder="Eg.Indore"
                value={user.city}
                onChange={handleInputs}
              />
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">
                State
              </label>
              <select
                id="inputState"
                class="form-select"
                value={user.state}
                onChange={handleInputs}
                name="state"
              >
                <option selected>Choose...</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <center>
              <div class="col-md-8" id="description">
                <label for="text" class="form-label">
                  Message
                </label>
                <input
                  type="long text"
                  class="form-control"
                  id="inputdescription"
                  name="message"
                  placeholder="Message"
                  value={user.message}
                  onChange={handleInputs}
                />
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  id="submit"
                  value="register"
                  onClick={PostData}    
                             
                >
                  SUBMIT
                </button>
              </div>
            </center>
          </form>
          
        </section>
      </div>
    </div>
  );
}
export default Contact;
