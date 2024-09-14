import React from 'react';
function App() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [field, setField] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [cpassword, setCpassword] = React.useState('');
  const [terms, setTerms] = React.useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleDobChange = (e) => {
    setDob(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleFieldChange = (e) => {
    setField(e.target.value);
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }
  const handleCpasswordChange = (e) => {
    setCpassword(e.target.value);
  }
  const handleTermsChange = (e) => {
    setTerms(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Date of Birth: ${dob}`);
    console.log(`Phone: ${phone}`);
    console.log(`Password: ${password}`);
    console.log(`Field: ${field}`);
    console.log(`Gender: ${gender}`);
    console.log(`Confirm Password: ${cpassword}`);
    console.log(`Terms: ${terms}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px'} } autoComplete='on'>
        <label labelfor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
        <label labelfor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} required />
        <label labelfor="dob">Date of Birth</label>
        <input type="date" id="dob"  name="dob" placeholder="Enter Date of Birth" value={dob} onChange={handleDobChange} required />
        <label labelfor="phone">Phone Number</label>
        <input type="text" id="phone" name="phone" placeholder="Enter Phone Number" value={phone} onChange={handlePhoneChange} required />
        <label labelfor="password">Password</label>
        <label labelfor="field">Choose your Field</label>
        <select name="field" id="field" value={field} onChange={handleFieldChange} required>
          <option value="web-evelopment">Web Development</option>
          <option value="android-development">Andriod Development</option>
          <option value="ios-development">IOS Development</option>
        </select>
        <fieldset>
          <legend>Gender</legend>
          <input type="radio" id="male" name="gender" value="male" checked={gender === "male"} onChange={handleGenderChange} required />
          <label labelfor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" checked={gender === "female"} onChange={handleGenderChange} />
          <label labelfor="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" checked={gender === "other"} onChange={handleGenderChange} />
          <label labelfor="other">Other</label>
        </fieldset>
        <input type="password" id="password" name="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required />
        <label labelfor="cpassword">Confirm Password</label>
        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" value={cpassword} onChange={handleCpasswordChange} required />
        <input type="checkbox" id="terms" name="terms" checked={terms} onChange={handleTermsChange} required />
        <label labelfor="terms">I accept all Terms and Conditions</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;