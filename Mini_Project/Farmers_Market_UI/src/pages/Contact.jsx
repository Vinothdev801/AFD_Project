import './css/Contact.css';

const handleSubmit = () =>{
  alert('We have received you message. Our team will contact you soon.')
}
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-card'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='contact-content flex-col'>
          <label>Name: </label>
          <input type="text" name="name" id="name" required/>
          
          <label>Email: </label>
          <input type="email" name="name" id="name" required/>
          
          <label>Ph.no: </label>
          <input type="text" name="name" id="name" required/>
          
          <label>Message: </label>
          <textarea name="message" id="msg" placeholder='enter the message here...' required>
          </textarea>
          
          <div>
            <button type="submit">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
    
  )
}

export default Contact