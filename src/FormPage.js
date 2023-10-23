import "./formPage.css";

function FormPage() {
  return (
    <div className="Header">
      <h1>STUDENT REGISTRATION FORM</h1>
      <div align="left" className="userForm">
        <form>
          <table cellSpacing="13">
            <tr>
              <td>FIRST NAME</td>
              <td>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Max 30 character"
                  id="name"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>LAST NAME</td>
              <td>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Max 30 character"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <input type="date" name="date of birth" required />
              </td>
            </tr>

            <tr>
              <td>EMAIL ID</td>
              <td>
                <input type="email" name="email" required />
              </td>
            </tr>

            <tr>
              <td>PHONE NUMBER</td>
              <td>
                <input
                  type="number"
                  name="email"
                  placeholder="10 didgit number"
                  maxLength="10"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>GENDER</td>
              <td>
                Male
                <input type="radio" name="male" />
                Female
                <input type="radio" name="female" />
              </td>
            </tr>

            <tr>
              <td>ADDRESS</td>
              <td>
                <textarea rows="6" cols="30" name="address" required />
              </td>
            </tr>

            <tr>
              <td>CITY</td>
              <td>
                <input
                  type="text"
                  name="city"
                  placeholder="Max 30 character"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>PIN CODE</td>
              <td>
                <input
                  type="text"
                  name="pin-code"
                  maxLength="6"
                  placeholder="6 digit number"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>STATE</td>
              <td>
                <input
                  type="text"
                  name="state"
                  placeholder="Max 30 character"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>COUNTRY</td>
              <td>
                <input type="text" name="country" value="India" required />
              </td>
            </tr>

            <tr>
              <td>HOBBIES</td>
              <td>
                Drawing
                <input type="radio" name="drawing" required />
                Singing
                <input type="radio" name="singing" required />
                Dancing
                <input type="radio" name="dancing" required />
                Sketching
                <input type="radio" name="sketching" required />
                Others
                <input type="radio" name="Others" required />
                <input type="text" name="hobbies" required />
              </td>
            </tr>

            <tr>
              <td>QUALIFICATION</td>
              <tr>
                <th>Examination</th>
                <th>Board</th>
                <th>Percentage</th>
                <th>Year of Passing</th>
              </tr>

              <tr>
                <td>Class X</td>

                <td>
                  <input type="text" />
                </td>

                <td>
                  <input type="number" />
                </td>

                <td>
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td>Class XII</td>

                <td>
                  <input type="text" />
                </td>

                <td>
                  <input type="number" />
                </td>

                <td>
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td>Graduation</td>

                <td>
                  <input type="text" />
                </td>

                <td>
                  <input type="number" />
                </td>

                <td>
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td>Masters</td>

                <td>
                  <input type="text" />
                </td>

                <td>
                  <input type="number" />
                </td>

                <td>
                  <input type="text" />
                </td>
              </tr>
            </tr>

            <tr>
              <td>COURSE APPLIED FOR</td>
              <td>
                BCA
                <input type="radio" name="bsc" required />
                B.Com
                <input type="radio" name="bcom" required />
                B.Sc
                <input type="radio" name="bsc" required />
                B.A
                <input type="radio" name="ba" required />
              </td>
            </tr>
          </table>
        </form>
        <div className="Buttons">
          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}

export default FormPage;
